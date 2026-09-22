import express from "express";
import {editUser, getSingleUser, getUser, postUser} from "../controllers/user.js";


const route = express.Router();


route.get("/user", getUser);
route.post("/post-user",postUser);
route.get("/user/:id", getSingleUser);
route.put("/user/:id", editUser);
route.delete("/user/:id", deleteUser);


export default route;