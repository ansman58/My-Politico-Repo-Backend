const {offices} = require('../../database');

const deleteOffice = (req, res) => {
    const officeId = parseInt(req.params.id)
    if(!officeId){
       return res.status(400).json({
            status: 400,
            error: `Invalid Office Id`
        })

    }
    
    else{
        for(let i = 0; i < offices.length; i++) {
            if(offices[i].id === officeId) {
                offices.splice(i, 1);
            }
           }      
           res.json({
               status: 200,
               data: {
                ...offices
               }
           })
    }


}

module.exports = deleteOffice;