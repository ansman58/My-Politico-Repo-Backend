const { candidates } = require("../../database");


const addCandidate = (req, res) => {
    const {party, office} = req.body;

    const authUser = req.user

    if (!party || !office) {
      const error = {}
  
      if(!party) {
        error.party = "Party name cannot be empty"
      }
  
      if(!office) {
        error.office = "Include an office"
      }
  
      res.status(400).json({
        status: 400,
        error
      });
      return;
    }
  
    const newData = {
      id: candidates.length + 1,
      office: parseInt(office),
      party: parseInt(party) , 
      candidate: authUser.id
    };
  
    candidates.push(newData);
  
    res.json({
      status: 200,
      data: newData
    });
  };
  
  module.exports = addCandidate;
  