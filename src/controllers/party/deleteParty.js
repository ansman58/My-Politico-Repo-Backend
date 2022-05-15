const {party} = require('../../database');

const deleteParty = (req, res) => {
    const partyId = parseInt(req.params.id)

       for(let i = 0; i < party.length; i++) {
        if(party[i].id === partyId) {
            party.splice(i, 1);
        }
       }      
       return res.json(party)

}

module.exports = deleteParty;