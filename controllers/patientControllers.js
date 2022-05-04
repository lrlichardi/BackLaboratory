const Patient = require("../models/Patient");
const Analisys = require("../models/Analysis");
const { OK, BAD_REQUEST , INTERNAL_SERVER_ERROR } = require("../constants/httpCode");
const { getAnalysis } = require("./analysisControllers");

exports.createPatient = async (req, res) => {
  const { dni } = req.body;

  try {
    const patientFound = await Patient.findOne({ dni });

    if (patientFound) {
      return res
        .status(BAD_REQUEST)
        .send({ msg: "Ya existe persona registrada con ese documento! " });
    }

    let patientNew = new Patient(req.body);
    await patientNew.save();

    res.status(OK).send(patientNew);

  } catch (error) {
    console.log(error);
    res
      .status(BAD_REQUEST)
      .send({ msg: `Hubo un error al crear al paciente!` });
  }
};

exports.getPatients = async (req, res) => {
  try {
    const patient = await Patient.find();
    res.status(OK).send(patient);
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({ msg: "Error al buscar!" });
    console.log(error);
  }
};

exports.getPatient = async (req, res) => {
  const patient = await Patient.findById(req.params.id);
  res.status(OK).send({ patient });
};

exports.deletePatient = async (req, res) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);
    res.status(OK).send("Paciente Eliminado");
  } catch (error) {
    res.status(BAD_REQUEST).send({ msg: "Error al eliminar el paciente!" });
  }
};

exports.updatePatient = async (req, res) => {
  try {
    await Patient.findByIdAndUpdate(req.params.id, req.body);
    res.send("Ok");
  } catch (error) {
    console.log(error);
  }
};
