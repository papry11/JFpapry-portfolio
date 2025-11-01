import express from "express";
import { getAllProjectsPublic } from "../controllers/publicController.js";

const publicRoute = express.Router();

// Public projects route
publicRoute.get("/projects", getAllProjectsPublic);

export default publicRoute;
