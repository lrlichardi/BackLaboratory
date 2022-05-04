const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-sequence')(mongoose);

const AnalysisSchema = new Schema({
  _id: Number,
  doctor: {
    type: String,
    trim: true,
  },
  analysis: {
    type: Array,
  },
  patientId: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
  },
  date: {
    type: String,
  },
});
AnalysisSchema.plugin(autoIncrement);

module.exports = mongoose.model("Analysis", AnalysisSchema);
