const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const cors = require('cors');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3002;

mongoose.connect(process.env.MONGO_DB).then(() => console.log("Conectado exitosamente"))
        .catch((err) => (console.log(err)));


// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes setup
app.use('/patients' , require('./routes/patient'));
app.use('/patients/:id/analysis' , require('./routes/analysis'))        
        
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});