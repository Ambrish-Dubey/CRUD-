import express from "express"
import { create, deleteUser, fetch, update } from "../controller/userController.js"; //importing req controllers

const route = express.Router();

//url would look like:- http:localhost:5001/api/task/...

route.get("/getall", fetch)
route.post ("/create",create)
route.put("/update/:id", update)
route.delete("/delete/:string",deleteUser)

export default route;