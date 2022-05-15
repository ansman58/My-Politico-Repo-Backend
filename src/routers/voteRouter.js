const addVote = require("../controllers/vote/addVote");
const getVoter = require("../controllers/vote/getVote");
const getAllVotes = require("../controllers/vote/getAllVotes");



const express = require("express");


const Router = express.Router;
const voteRouter = Router();

voteRouter.post("/add", addVote);
voteRouter.get("/get/:id", getVoter);
voteRouter.get('/', getAllVotes);
// candidateRouter.delete("/delete/:id", deleteCandidate);
// candidateRouter.put("/update/:id", updateCandidate);

module.exports = voteRouter;
