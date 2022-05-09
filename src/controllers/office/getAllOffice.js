// const { type } = require('express/lib/response')
const {offices} = require('../../database')

const getAllOffices = (req, res) => {
    const type = req.query.type
    const name = req.query.name
    if(!type && !name) {
       return res.json({
           status: 200,
           data: offices
       })
    }
    const officeType = offices.filter(office => office.type === type)
    if(officeType) {
         res.json({
            status: 200,
            data: officeType
        })
    }
    else{
        const officeName = offices.filter(office => office.name == name)
        res.json({
            status: 200,
            data: officeName
        })
    }
}

module.exports = getAllOffices;