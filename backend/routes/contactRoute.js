import express from "express";
import { addContact, getContacts } from "../controllers/contactController.js";
import { authAdmin } from "../middlewares/authAdmin.js";

const contactRouter = express.Router(); 

// frontend contact form
contactRouter.post("/send", addContact);

// admin dashboard
contactRouter.get("/all", authAdmin, getContacts);

export default contactRouter;
