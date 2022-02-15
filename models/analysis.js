const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnalysisSchema = new mongoose.Schema({
  doctor: {
    type:String,
    trim:true,
  },
  analysis: {
    type: Array,
  },
  patientId: {
    type: Schema.Types.ObjectId,
    ref: 'Patient',
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Analysis", AnalysisSchema);
