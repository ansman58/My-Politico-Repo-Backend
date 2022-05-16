const { vote } = require("../../database");

const getAllVotes = (req, res) => {
  const {createdBy, candidate} = req.body;

  const authUser = req.user;


  const checkOut = vote.filter(el => el.createdBy === authUser.id && el.office)
  if(checkOut){
    
    const data = vote.map((vote) => vote);
    res.json({
      status: 200,
      data,
    });
  }

};

module.exports = getAllVotes;