const express = require('express');
const router = express.Router();
const { createOneAnalysis , getAnalysis , deleteAnalysis} = require('../controllers/analysisControllers');

router.post('/newAnalysis' , createOneAnalysis );
router.delete('/:id', deleteAnalysis)
router.get('/' , getAnalysis );


module.exports = router;