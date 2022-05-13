const { candidates } = require("../../database");

const deleteCandidate = (req, res) => {
  const candidateId = parseInt(req.params.id);

  if (candidateId !== req.body.id) {
    return res.status(400).json({
      status: 400,
      error: `Select a candidate to remove`,
    });
  }

  for (let i = 0; i < candidates.length; i++) {
    if (candidates[i].id === candidateId) {
      candidates.splice(i, 1);
    }
  }
  res.json({
    status: 200,
    data: {
      candidates,
    },
  });
};

module.exports = deleteCandidate;
