const loginUser = require("../controllers/users/loginUser");
const addUsers = require("../controllers/users/addUsers");
const getUsers = require("../controllers/users/getUsers");
const getAllUsers = require("../controllers/users/getAllUsers");
const deleteUsers = require("../controllers/users/deleteUsers");
const updateUsers = require("../controllers/users/updateUser");

const express = require("express");

const Router = express.Router;
const userRouter = Router();

userRouter.post("/signup", addUsers);
userRouter.post("/login", loginUser);
userRouter.get("/get/:id", getUsers);
userRouter.get('/', getAllUsers);
userRouter.delete("/delete/:id", deleteUsers);
userRouter.put("/update/:id", updateUsers);

module.exports = userRouter;
