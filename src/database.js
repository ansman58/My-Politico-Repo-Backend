const bcrypt = require("bcrypt")

const users = [
  {
    id: 1,
    firstname: "Anslem",
    lastname: "Nnakwe",
    othername: "",
    email: "ee",
    phoneNumber: "868576576",
    passportUrl: "../images/politician1.jpg",
    isAdmin: true,
    role: "user",
    password: bcrypt.hashSync('123456', 12)
  },
  {
    id: 2,
    firstname: "Anslem",
    lastname: "Nnakwe",
    othername: "",
    email: "emaukjhhd",
    phoneNumber: "868576576",
    passportUrl: "../images/politician1.jpg",
    isAdmin: false,
    role: "politician",
    password: bcrypt.hashSync('123456', 12)
  },
  {
    id: 4,
    firstname: "Anslem",
    lastname: "Nnakwe",
    othername: "",
    email: "emaukjhhd",
    phoneNumber: "868576576",
    passportUrl: "../images/politician1.jpg",
    isAdmin: false,
    role: "politician",
  },
  {
    id: 3,
    firstname: "Anslem",
    lastname: "Nnakwe",
    othername: "",
    email: "emaukjhhd",
    phoneNumber: "868576576",
    passportUrl: "../images/politician1.jpg",
    isAdmin: false,
    role: "user",
  },
];

const party = [
  {
    id: 1,
    name: "PDP",
    hqAddress: "Abuja",
    logoURL:
      "https://www.inecnigeria.org/wp-content/uploads/2019/02/PDP-Constitution.pdf",
  },

  {
    id: 2,
    name: "APC",
    hqAddress: "Osun",
    logoURL:
      "https://www.inecnigeria.org/wp-content/uploads/2019/02/APC-Constitution.pdf",
  },

  {
    id: 3,
    name: "SPC",
    hqAddress: "Delta",
    logoURL:
      "https://www.inecnigeria.org/wp-content/uploads/2019/02/APC-Constitution.pdf",
  },

  {
    id: 4,
    name: "APGA",
    hqAddress: "Abuja",
    logoURL:
      "https://www.inecnigeria.org/wp-content/uploads/2019/02/SDP-Constitution.pdf",
  }
];

const offices = [
  {
    id: 1,
    type: "federal",
    name: "President",
  },
  {
    id: 2,
    type: "legislative",
    name: "Senate",
  },
  {
    id: 3,
    type: "state",
    name: "Governor",
  },
  {
    id: 4,
    type: "local government",
    name: "Chairman",
  },
  {
    id: 5,
    type: "federal",
    name: "Vice President",
  },
  {
    id: 6,
    type: "state",
    name: "Deputy Governor",
  }
];
const candidates = [];
const vote = [];
const petition = [];

module.exports = { users, party, offices, candidates, vote, petition };
