const { users } = require("../../database");
const cloudinary = require("../../config/cloudinary")
const bcrypt = require("bcrypt")
const fs = require('fs')
const generateToken = require("../../utils/generateToken")

const addUsers = async (req, res) => {
  const { firstname, lastname, othername, email, phoneNumber, role, password } = req.body;
  const file = req.file;

  // return res.json({
  //   firstname,
  //   lastname,
  //   othername,
  //   email,
  //   phoneNumber,
  //   role,
  //   file,
  // });

  const check = users.find((user) => user.email === email);

  if (!firstname || !lastname || !email || check || !phoneNumber || !password || !role || !file || (file.size > 5242880) ) {
    const error = {}

    if(!firstname) {
      error.firstname = "Firstname cannot be empty"
    }
    if(!lastname) {
      error.lastname = "Lastname cannot be empty"
    }
    if(!email) {
      error.email = "Email cannot be empty"
    }
    if(!phoneNumber) {
      error.phoneNumber = "Phone number cannot be empty"
    }

    if(!role) {
      error.role = "Role cannot be empty"
    }

    if(!password) {
      error.password = "Password cannot be empty"
    }

    if(!file) {
      error.file = "Please upload a picture"
    }

    if(file && file.size > 5242880) {
      error.file = "Picture size cannot be above 5mb"
    }

    if (check) {
      error.email = "Email already exist"
    }

    res.status(400).json({
      status: 400,
      error
    });
    return;
  }

  const newPassword = bcrypt.hashSync(password, 12)

  let passportUrl
  const path = file.path;
  const uniqueFileName = `${file.originalname}${Date.now()}`;

  await cloudinary.uploader.upload(
    path,
    {
      public_id: `politico/${uniqueFileName}`,
      tags: "politico",
    },
    (err, image) => {
      if(err) {
         return res.status(400).json({
          status: 400,
          error: {
            file: err.message
          }
        })
      }

      fs.unlinkSync(path);
      passportUrl = image.secure_url
    }
  )

  const newData = {
    id: users.length,
    firstname,
    lastname,
    othername,
    email,
    phoneNumber,
    role,
    password: newPassword,
    passportUrl,
    isAdmin: false,
  };

  users.push(newData);

  res.json({
    status: 200,
    data: {
      ...newData,
      token: generateToken(newData)
    }
  });
};

module.exports = addUsers;
