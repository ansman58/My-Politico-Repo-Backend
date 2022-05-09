const { users } = require("../../database");
const cloudinary = require("../../config/cloudinary");
const bcrypt = require("bcrypt");
const fs = require("fs");
const generateToken = require("../../utils/generateToken");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const userData = users.find((user) => user.email === email);

  if (!email || !userData || !password) {
    const error = {};

    if (!userData) {
      error.email = "Email not found";
    }

    if (!email) {
      error.email = "Email cannot be empty";
    }
    if (!password) {
      error.password = "Password cannot be empty";
    }

    res.status(400).json({
      status: 400,
      error,
    });
    return;
  }

  if (!bcrypt.compareSync(password, userData.password)) {
    res.status(400).json({
      status: 400,
      error: {
        password: "Invalid Password",
      },
    });
    return;
  }

  res.json({
    status: 200,
    data: {
      ...userData,
      token: generateToken(userData),
    },
  });
};

module.exports = loginUser;
