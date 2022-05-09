const {users} = require('../../database');

const updateUsers = (req, res) => {
    // const { firstname, lastname, othername, email, phoneNumber, role, password } = req.body;
    const userData = users.find(user => user.id === parseInt(req.params.id))
    if(!userData) {
        return res.status(400).json({
            status: 400,
            error: {
                message: `User not found`
            }
        })
    }


    if(req.body.email && req.body.email !== userData.email){
      const checkUsers = users.some(user => user.email === req.body.email)
      if(checkUsers){
        return res.status(400).json({
            status: 400,
            error: {
                message: `Email already exists`
            }
      })
    }  

    }
    userData.firstname = req.body.firstname ? req.body.firstname : userData.firstname,
    userData.lastname = req.body.lastname ? req.body.lastname : userData.lastname,
    userData.othername = req.body.othername ? req.body.othername : userData.othername,
    userData.phoneNumber = req.body.phoneNumber ? req.body.phoneNumber : userData.phoneNumber,
    userData.role = req.body.role ? req.body.role : userData.role


    res.json({
        status: 200,
        data: userData
    })  
}


module.exports = updateUsers;