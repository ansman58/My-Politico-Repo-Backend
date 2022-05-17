const { vote } = require("../../database");
const { users } = require("../../database");

const addVote = (req, res) => {
  const { office, candidate } = req.body;

  const authUser = req.user;

  const check = vote.find(
    (element) => element.createdBy === authUser.id && element.office === office
  );

  if (!office || !candidate) {
    const error = {};

    if (!office) {
      
      error.office = `Choose an office`;
    }

    if (!candidate) {
      error.candidate = `Choose a candidate`;
    }

    res.status(400).json({
      status: 400,
      error,
    });
    return;
  }

  if (check) {
    res.status(400).json({
      status: 400,
      error: `Sorry, you can only vote for an office once`,
    });
    return;
  }

  const newVote = {
    id: vote.length + 1,
    office: parseInt(office),
    createdBy: authUser.id,
    createdOn: new Date(),
    candidate: parseInt(candidate)
  };

  vote.push(newVote);

  res.json({
    status: 200,
    data: newVote,
  });
};

module.exports = addVote;
