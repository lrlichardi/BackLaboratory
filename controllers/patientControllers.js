const Patient = require('../models/Patient');
const Analisys = require('../models/Analysis');

exports.createPatient = async (req, res) => {
        const { dni } = req.body;
        console.log(dni)
        try {
                const patientFound = await Patient.findOne({ dni })
                if (patientFound) {
                        return res.status(400).send({ msg: `Ya existe persona registrada con ese DNI!` })
                }
                let patientNew = new Patient(req.body);
                await patientNew.save();
                res.send(patientNew);
        }
        catch (error) {
                console.log(error)
                res.status(400).send({msg: `Hubo un error al crear al paciente!`})
}
}

exports.getPatients = async (req, res) => {
        try {
                const patient = await Patient.find();
                res.send(patient);
        }
        catch (error) {
                res.status(400).json({ msg: 'Error al buscar!' });
                console.log(error);
        }
}

exports.getPatient = async (req , res ) => {
        const patient =  await Patient.findById(req.params.id);
        const analysis = await Analisys.find({patientId:req.params.id});
        res.status(200).send({patient , analysis});
}

exports.deletePatient = async (req , res) => {
        try{
        await Patient.findByIdAndDelete(req.params.id)
        res.send('Paciente Eliminado')
        }catch(error){
                res.status(400).send({msg:'Error al eliminar el paciente!'})
        }
        
}

exports.updatePatient = async (req , res) => {
        try{
                await Patient.findByIdAndUpdate(req.params.id , req.body)
                res.send('Ok')
        }catch(error){
                console.log(error)
        }
}