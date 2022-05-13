const addCandidate = require("../controllers/candidate/addCandidate.js");
const getCandidate = require("../controllers/candidate/getCandidate");
const getAllCandidates = require("../controllers/candidate/getAllCandidates");
const deleteCandidate = require("../controllers/candidate/deleteCandidate");
const updateCandidate = require("../controllers/candidate/updateCandidate");

const express = require("express");

const Router = express.Router;
const candidateRouter = Router();

candidateRouter.post("/add", addCandidate);
candidateRouter.get("/get/:id", getCandidate);
candidateRouter.get('/', getAllCandidates);
candidateRouter.delete("/delete/:id", deleteCandidate);
candidateRouter.put("/update/:id", updateCandidate);

module.exports = candidateRouter;
