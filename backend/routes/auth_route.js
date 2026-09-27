import { login } from "../controllers/auth";
import express from "express";

const route = express.Router();
route.post("/login", login);

export default route;