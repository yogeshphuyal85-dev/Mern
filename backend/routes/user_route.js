import express from "express";
import {deleteUser, editUser, getSingleUser, getUser, postUser} from "../controllers/user.js";


const route = express.Router();


route.get("/user", getUser);
route.post("/post-user",postUser);
route.get("/get-user/:id", getSingleUser);
route.put("/edit-user/:id", editUser);
route.delete("/delete-user/:id", deleteUser);


export default route;