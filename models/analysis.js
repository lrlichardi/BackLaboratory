const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { getSequenceNextValue , insertCounter } = require("./Counter");
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
},
//  { _id: false }
);
AnalysisSchema.plugin(autoIncrement);
// AnalysisSchema.pre("save", (next) => {
//   let doc = this;
//   getSequenceNextValue("user_id")
//   .then((counter) => {
//     console.log('contador' , counter);
//     if (!counter) {
//          insertCounter("user_id")
//         .then((counter) => {
//           doc._id = counter;
//           console.log('prueba ' , doc);
//           next();
//         })
//         .catch((error) => next(error));
//     } else {
//       console.log('en else')
//       doc._id = counter;
//       next();
//     }
//   }).catch(error => {
//     console.log(error)
//     next(error)});
  
// });

module.exports = mongoose.model("Analysis", AnalysisSchema);
