const { users } = require("../../database");

const getUsers = (req, res) => {
  // const userId = req.body.id;

  const findUser = users.find((user) => user.id === parseInt(req.params.id));
  if (!findUser) {
    return res.status(400).json({
      status: 400,
      error: `User not found`,
    });
  }
  res.json({
    status: 200,
    data: findUser,
  });
};

module.exports = getUsers;
