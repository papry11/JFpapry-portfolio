import Contact from "../models/contactModel.js";

export const addContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
      return res.status(400).json({ success: false, message: "All fields are required" });

    const newContact = await Contact.create({ name, email, message });
    return res.status(201).json({ success: true, message: "Message sent", data: newContact });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }); // latest first
    return res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
