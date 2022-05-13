const { candidates } = require("../../database");

const getCandidate = (req, res) => {
//   const userId = req.body.id;

  const findCandidate = candidates.find((candidate) => candidate.id === parseInt(req.params.id));
  if (!findCandidate) {
    return res.status(400).json({
      status: 400,
      error: `Candidate not found`
    });
  }
  res.json({
    status: 200,
    data: findCandidate
  });
};

module.exports = getCandidate;