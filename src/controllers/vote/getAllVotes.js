const { vote } = require("../../database");

const getAllVotes = (req, res) => {
  
  const data = vote.map((vote) => vote);
  res.json({
    status: 200,
    data,
  });
};

module.exports = getAllVotes;