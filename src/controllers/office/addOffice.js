const { offices } = require("../../database");

const addOffice = (req, res) => {
  const type = req.body.type;
  const name = req.body.name;

  if (!type) {
    return res.status(400).json({
      status: 400,
      error: {
        message: "Please include the office type",
      },
    });
  }

  if (!name) {
    res.status(400).json({
      status: 400,
      error: {
        message: "Please include the office name",
      },
    });
  }

  const newOffice = {
    id: offices.length + 1,
    type: req.body.type,
    name: req.body.name,
  };

  offices.push(newOffice);

  return res.json({
    status: 200,
    data: newOffice,
  });
};

module.exports = addOffice;
