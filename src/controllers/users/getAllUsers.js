const {users} = require('../../database')

const getAllUsers = (req, res) => {
    const role = req.query.role 
    if(!role) {
       return res.json({
           status: 200,
           data: users
       })
    }
    const data = users.filter(user => user.role === role)
    res.json({
        status: 200,
        data
    })
}

module.exports = getAllUsers;