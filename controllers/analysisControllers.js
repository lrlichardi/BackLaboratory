const Analisys = require("../models/Analysis");
const Patient = require('../models/Patient');
 
exports.createOneAnalisys = async (req, res) => {
  let analysisNew = new Analisys(req.body);
  await analysisNew.save();
  res.status(200).send(analysisNew)
};

exports.getAnalysis = async (req, res) => {
  console.log(req.params.id)
   const allAnalisys = await Patient.findById(req.params.id)
   res.status(200).send(allAnalisys);
};
