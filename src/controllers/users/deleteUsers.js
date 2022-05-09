const {users} = require('../../database');

const deleteUsers = (req, res) => {
    const userId = parseInt(req.params.id)

       for(let i = 0; i < users.length; i++) {
        if(users[i].id === userId) {
            users.splice(i, 1);
        }
       }      
       return res.json(users)
}

module.exports = deleteUsers;