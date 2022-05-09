const { party } = require("../../database");

const getAllParties = (req, res) => {
  const data = party.map((party) => party);
  res.json({
    status: 200,
    data,
  });
};

module.exports = getAllParties;
