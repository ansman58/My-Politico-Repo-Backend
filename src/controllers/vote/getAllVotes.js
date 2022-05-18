const { vote } = require("../../database");



const getAllVotes = (req, res) => {

  const checkOut = vote.map(element => element);

  if(checkOut){
    res.json({
      status: 200,
      data: vote
    });
  }

};

module.exports = getAllVotes;