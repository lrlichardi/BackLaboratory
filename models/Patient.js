const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true,
            trim:true
        },
        lastName:{
            type:String,
            require:true,
            trim:true
        },
        dni:{
            type:Number,
            require:true,
            unique:true,
            trim:true
        },
        obraSocial:{
            type:String,
            trim:true
        },
        numberSocial:{
            type:Number,
            trim:true,
        },
        phoneNumber:{
            type:String,
            trim:true,
        },
        nac:{
            type:String,
            trim:true,
        },
        adress:{
            type:String,
            trim:true,
        },
        sex:{
            type:String,
            trim:true
        },
        registro:{
            type:Date,
            default:Date.now(),
        },
    }
)

module.exports = mongoose.model('Patient' , PatientSchema)