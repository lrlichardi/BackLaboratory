const express = require('express');
const router = express.Router();
const {createPatient , getPatients, getPatient, deletePatient, updatePatient} = require('../controllers/patientControllers');

router.post('/' , createPatient);
router.get('/' , getPatients);
router.get('/:id' , getPatient);
router.delete('/:id' , deletePatient);
router.put('/:id' , updatePatient);


module.exports = router;