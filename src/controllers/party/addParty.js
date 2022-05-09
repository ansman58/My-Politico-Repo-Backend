const { party } = require("../../database");
const cloudinary = require("../../config/cloudinary");
const fs = require('fs');;

const addParty = async (req, res) => {
    const {name, hqAddress} = req.body;
    const file = req.file;
  
    const check = party.find((party) => party.name === name);
  
    if (!name || !hqAddress || !file || (file.size > 5242880) ) {
      const error = {}
  
      if(!name) {
        error.name = "Party name cannot be empty"
      }
  
      if(!hqAddress) {
        error.role = "Headquarter address cannot be empty"
      }
  
      if(!file) {
        error.file = "Please upload a picture"
      }
  
      if(file && file.size > 5242880) {
        error.file = "Picture size cannot be above 5mb"
      }
  
      if (check) {
        error.name = "Name already exist"
      }
  
      res.status(400).json({
        status: 400,
        error
      });
      return;
    }
  
 
    let logoURL;
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
        logoURL = image.secure_url
      }
    )
  
    const newData = {
      id: party.length,
      name,
      hqAddress,    
      logoURL,
    };
  
    party.push(newData);
  
    res.json({
      status: 200,
      data: newData
    });
  };
  
  module.exports = addParty;
  