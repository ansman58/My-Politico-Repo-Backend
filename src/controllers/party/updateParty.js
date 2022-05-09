const { party } = require("../../database");

const updateParty = (req, res) => {
  const partyData = party.find((party) => party.id === parseInt(req.params.id));
  
  if (!partyData) {
    return res.status(400).json({
      status: 400,
      error: {
        message: `Party not found`,
      },
    });
  }

  partyData.name = req.body.name ? req.body.name : partyData.name;
  partyData.hqAddress = req.body.hqAddress ? req.body.hqAddress : partyData.hqAddress;
  partyData.logoURL = req.body.logoURL ? req.body.logoURL : partyData.logoURL;

  res.json({
    status: 200,
    data: partyData,
  });
};

module.exports = updateParty;
