const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_DB).then(() => console.log("Conectado exitosamente"))
        .catch((err) => (console.log(err)));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
// routes setup
app.use('/patients' , require('./routes/patient'));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});