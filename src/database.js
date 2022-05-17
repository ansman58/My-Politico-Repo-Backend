const bcrypt = require("bcrypt")

const users = [
  {
    id: 1,
    firstname: "John",
    lastname: "Doe",
    othername: "",
    email: "chris@gmail.com",
    phoneNumber: "868576576",
    passportUrl: "../images/politician1.jpg",
    isAdmin: true,
    role: "user",
    password: bcrypt.hashSync('123456', 12),
    // confirmPassword: bcrypt.hashSync('123456', 12)
  },
  {
    id: 2,
    firstname: "Seun",
    lastname: "Nnakwe",
    othername: "Ashley",
    email: "chuks@gmail.com",
    phoneNumber: "868576576",
    passportUrl: "../images/politician1.jpg",
    isAdmin: false,
    role: "user",
    password: bcrypt.hashSync('123456', 12)
  },
  {
    id: 4,
    firstname: "Matthew",
    lastname: "Godwin",
    othername: "",
    email: "him@gmail.com",
    phoneNumber: "868576576",
    passportUrl: "../images/politician1.jpg",
    isAdmin: false,
    role: "politician",
    password: bcrypt.hashSync('123456', 12),
    // confirmPassword: bcrypt.hashSync('123456', 12)
  },
  {
    id: 3,
    firstname: "Francis",
    lastname: "Jennifer",
    othername: "",
    email: "grace@gmail.com",
    phoneNumber: "868576576",
    passportUrl: "../images/politician1.jpg",
    isAdmin: true,
    role: "user",
    password: bcrypt.hashSync('123456', 12),
    // confirmPassword: bcrypt.hashSync('123456', 12)
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
    name: "KOWA",
    hqAddress: "Asaba",
    logoURL:
      "https://www.inecnigeria.org/wp-content/uploads/2019/02/APC-Constitution.pdf",
  },

  {
    id: 5,
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

const candidates = [
  {
    id: 1,
    office: 2,
    party: 4,
    candidate: 2,
  },
  {
    id: 2,
    office: 4,
    party: 4,
    candidate: 2,
  },
  {
    id: 3,
    office: 2,
    party: 3,
    candidate: 4,
  },
  {
    id: 4,
    office: 3,
    party: 2,
    candidate: 4,
  },
  {
    id: 5,
    office: 3,
    party: 2,
    candidate: 4,
  },
  {
    id: 6,
    office: 2,
    party: 4,
    candidate: 4,
  },
];

const vote = [
  {
    id: 1,
    createdOn: new Date(),
    createdBy: 1,
    office: 1,
    candidate: 2,
  },
  {
    id: 2,
    createdOn: new Date(),
    createdBy: 2,
    office: 4,
    candidate: 2,
  },
  {
    id: 3,
    createdOn: new Date(),
    createdBy: 3,
    office: 3,
    candidate: 1,
  },
];

module.exports = { users, party, offices, candidates, vote};
