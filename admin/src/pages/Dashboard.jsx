import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { AdminContext } from "../context/AdminContext";
import { Mail, User, FolderKanban } from "lucide-react";

const Dashboard = () => {
  const { aToken, backendUrl } = useContext(AdminContext);
  const [contacts, setContacts] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    if (!aToken) return;
    try {
      const { data } = await axios.get(`${backendUrl}/api/admin/recent-projects`, {
        headers: { Authorization: `Bearer ${aToken}` },
      });
      if (data.success) setProjects(data.data);
    } catch (err) {
      console.error("Projects fetch error:", err.response ? err.response.data : err);
    }
  };

  const fetchContacts = async () => {
    if (!aToken) return;
    try {
      const { data } = await axios.get(`${backendUrl}/api/contacts/all`, {
        headers: { Authorization: `Bearer ${aToken}` },
      });
      if (data.success) setContacts(data.data);
    } catch (err) {
      console.error("Contacts fetch error:", err.response ? err.response.data : err);
    }
  };

  useEffect(() => {
    if (aToken && backendUrl) {
      fetchProjects();
      fetchContacts();
      setTimeout(() => setLoading(false), 600);
    }
  }, [aToken, backendUrl]);

  if (!aToken) {
    return (
      <motion.div
        className="p-10 text-center text-red-500 font-medium text-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Please log in as admin to see the dashboard.
      </motion.div>
    );
  }

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <motion.p
          className="text-gray-500 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.2 }}
        >
          Loading dashboard...
        </motion.p>
      </div>
    );

  return (
    <motion.div
      className="min-h-screen w-full bg-gradient-to-b from-gray-100 to-white p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Contact Messages */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Mail className="text-blue-600" size={22} />
            <h2 className="text-2xl font-semibold text-gray-800">Recent Contact Messages</h2>
          </div>

          <motion.div
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 p-6 max-h-[500px] overflow-y-auto transition-all duration-300 hover:shadow-xl"
            whileHover={{ scale: 1.005 }}
          >
            {contacts.length ? (
              contacts.map((c, index) => (
                <motion.div
                  key={c._id}
                  className="p-4 mb-3 bg-gray-50 hover:bg-white rounded-xl shadow-sm border border-gray-100 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-800 flex items-center gap-2">
                        <User size={16} className="text-blue-600" />
                        {c.name}
                      </p>
                      <p className="text-sm text-gray-500">{c.email}</p>
                    </div>
                    <p className="text-xs text-gray-400">
                      {new Date(c.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <p className="text-gray-700 mt-2 leading-relaxed">{c.message}</p>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-400 text-center py-10">No messages yet</p>
            )}
          </motion.div>
        </motion.section>

        
      </div>
    </motion.div>
  );
};

export default Dashboard;

