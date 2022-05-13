const addOffice = require("../controllers/office/addOffice");
const getOffice = require("../controllers/office/getOffice");
const getAllOffice = require("../controllers/office/getAllOffice");
const deleteOffice = require("../controllers/office/deleteOffice");
const updateOffice = require("../controllers/office/updateOffice");

const express = require("express");
const isAdmin = require("../utils/isAdmin");

const Router = express.Router;
const officeRouter = Router();

officeRouter.post('/add', isAdmin, addOffice)
officeRouter.get("/get/:id", getOffice);
officeRouter.get('/', getAllOffice);
officeRouter.delete("/delete/:id", isAdmin, deleteOffice);
officeRouter.put("/update/:id", isAdmin, updateOffice);

module.exports = officeRouter;