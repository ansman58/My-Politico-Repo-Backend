const {candidates} = require('../../database');

const updateCandidate = (req, res) => {
    const findCandidate = candidates.find(candidate => candidate.id === parseInt(req.params.id))

    if(!findCandidate) {
        return res.status(400).json({
            status: 400,
            error: {
                message: `Please include an Candidate`
            },
        });
    };

    findCandidate.type = req.body.type ? req.body.type : findCandidate.type
    findCandidate.name = req.body.name ? req.body.name : findCandidate.name

    res.json({
        status: 200,
        data: findCandidate,
    });
};

module.exports = updateCandidate;