// const res = require("express/lib/response");
const { vote } = require("../../database");

const getVoter = (req, res) => {
  // const getVoter = vote.find((voter) => voter.id === parseInt(req.params.id));
  const getVoters = vote.map(vote => vote.candidate && vote.office)
  // if (!getVoter) {
  //   return res.status(400).json({
  //     status: 400,
  //     error: `Voter Id not found`,
  //   });
  // }
  res.json({
    status: 200,
    data: getVoters,
  });
};

module.exports = getVoter;
