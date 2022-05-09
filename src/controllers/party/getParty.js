const { party } = require("../../database");

const getParties = (req, res) => {
  const userId = req.body.id;

  const findParty = party.find((party) => party.id === parseInt(req.params.id));
  if (!findParty) {
    return res.status(400).json({
      status: 400,
      error: `Party not found`
    });
  }
  res.json({
    status: 200,
    data: findParty
  });
};

module.exports = getParties;