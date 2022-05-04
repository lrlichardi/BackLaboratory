const Analysis = require("../models/Analysis");
const { OK, BAD_REQUEST , INTERNAL_SERVER_ERROR} = require("../constants/httpCode");

exports.createOneAnalysis = async (req, res) => {
  try {
    console.log(req.body)
    let analysisNew = new Analysis(req.body);
    await analysisNew.save();
    res.status(OK).send(analysisNew);

  } catch (error) {
    console.log(error)
    res.status(INTERNAL_SERVER_ERROR).send({msg: 'Error del Servidor!'});
  }
};

exports.getAnalysis = async (req, res) => {
  try {
    const allAnalysis = await Analysis.find({ patientId: req.query.id });
    res.status(OK).send(allAnalysis);

  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).send(error);
  }
};

exports.deleteAnalysis = async (req, res) => {
  const id = req.params.id;
  try{
   const data = await Analysis.findByIdAndRemove(id);

   if(!data){
     return res.status(BAD_REQUEST).send({ msg: "Error al eliminar el analisis!" })
   }

   res.status(OK).send('Se elimino el analisis correctamente');
  }

  catch(error){
    res.status(INTERNAL_SERVER_ERROR).send(error);
  }
};
