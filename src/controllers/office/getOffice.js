const {offices} = require('../../database');

const getOffice = (req, res) => {
    const findOffice = offices.find((office) => office.id === parseInt(req.params.id))

    if(!findOffice){
        return res.status(400).json({
            status: 400,
            error: {
                message: `Office not found`
            }
        })
    }

        res.json({
            status: 200,
            data: findOffice
        })
}

module.exports = getOffice;