const express = require('express');
const router = express.Router();
const { createOneAnalisys , getAnalysis} = require('../controllers/analysisControllers');

router.post('/newAnalisys' , createOneAnalisys );
router.get('/' , getAnalysis );


module.exports = router;