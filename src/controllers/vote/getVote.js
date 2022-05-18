const { vote } = require("../../database");

const getVoter = (req, res) => {
  const getVoter = vote.filter((voter) => voter.createdBy === parseInt(req.params.id));
if (!getVoter) {
  return res.status(400).json({
    status: 400,
    error: `Voter Id not found`,
  });
}

if(getVoter) {
  res.json({
    status: 200,
    data: getVoter,
  });
}
};

module.exports = getVoter;
