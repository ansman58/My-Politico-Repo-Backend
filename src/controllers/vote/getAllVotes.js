const { vote } = require("../../database");

const getAllVotes = (req, res) => {
  const {createdBy, office} = req.body;

  const checkOut = vote.filter(
    (element) => element.createdBy === req.user.id && element.office === office
  );
  if(checkOut){
    res.json({
      status: 200,
      data,
    });
  }

};

module.exports = getAllVotes;