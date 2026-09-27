import express from "express";
import {deleteUser, editUser, getSingleUser, getUser, postUser} from "../controllers/user.js";
import { isAdmin, isAuth } from "../middleware/authCheck.js";


const route = express.Router();


route.get("/user",isAuth, isAdmin, getUser);
route.post("/post-user",postUser);
route.get("/get-user/:id", getSingleUser);
route.put("/edit-user/:id", editUser);
route.delete("/delete-user/:id", deleteUser);


export default route;