const {offices} = require('../../database');

const updateOffice = (req, res) => {
    // const {type, name} = req.body;

    const findOffice = offices.find(office => office.id === parseInt(req.params.id))

    if(!findOffice) {
        return res.status(400).json({
            status: 400,
            error: {
                message: `Please include an office`
            },
        });
    };

    findOffice.type = req.body.type ? req.body.type : findOffice.type
    findOffice.name = req.body.name ? req.body.name : findOffice.name

    res.json({
        status: 200,
        data: findOffice,
    });
};




module.exports = updateOffice;