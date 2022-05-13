const { candidates, party } = require("../../database");

const getAllCandidates = (req, res) => {
//   const {office, party, candidate} = req.query;
    const office = req.query.office;
    const party = req.query.party;
    const candidate = req.query.candidate;


 if(candidate) {
    const cands = candidates.filter(cand => cand.candidate === parseInt(candidate))
    return res.json({
        status: 200,
        data: cands
      });
 }


 if(office) {
    const candOffice = candidates.filter(cand => cand.office === parseInt(office))
    return res.json({
        status: 200,
        data: candOffice
      });
 }

 if (party) {

     const candParties = candidates.filter( cand=> cand.party ===  parseInt(party))
     return res.json({
        status: 200,
        data: candParties
      });
 }

  const data = candidates.map((candidate) => candidate);
  res.json({
    status: 200,
    data
  });
};

module.exports = getAllCandidates;
