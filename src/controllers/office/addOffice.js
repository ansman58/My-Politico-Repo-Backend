const { offices } = require("../../database");
// const cloudinary = require("../../config/cloudinary")
// const bcrypt = require("bcrypt")
// const fs = require('fs')
// const generateToken = require("../../utils/generateToken")

const addOffice =  (req, res) => {
  const { type, name } = req.body;

  // const check = offices.find((office) => office.name === name);

  if (!type || !name ) {
    const error = {}

    if(!type) {
      // error.type = "Please include the office type"
      res.status(400).json({
        status: 400,
        error: {
          message: "Please include the office type"
        }
      });
    }
    if(!name) {
      // error.name = "Please include the office name"
      res.status(400).json({
        status: 400,
        error: {
          message: "Please include the office name"
        }
      });
    }

    // if (check) {
      // res.status(400).json({
      //   status: 400,
      //   error
      // });
      // return;
    // }
  }

  const newOffice = {
    id: offices.length,
    type,
    name
  };

  offices.push(newOffice);

  res.json({
    status: 200,
    data: newOffice
  });
};

module.exports = addOffice;
