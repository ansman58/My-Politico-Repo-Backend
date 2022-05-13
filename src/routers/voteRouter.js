const addVote = require("../controllers/vote/addVote");
// const getCandidate = require("../controllers/candidate/getCandidate");
// const getAllCandidates = require("../controllers/candidate/getAllCandidates");
// const deleteCandidate = require("../controllers/candidate/deleteCandidate");
// const updateCandidate = require("../controllers/candidate/updateCandidate");

const express = require("express");
// const addVote = require("../controllers/vote/addVote.js");

const Router = express.Router;
const voteRouter = Router();

voteRouter.post("/add", addVote);
// candidateRouter.get("/get/:id", getCandidate);
// candidateRouter.get('/', getAllCandidates);
// candidateRouter.delete("/delete/:id", deleteCandidate);
// candidateRouter.put("/update/:id", updateCandidate);

module.exports = voteRouter;
