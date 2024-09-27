const e = require('express');
const mangoose = require('mongoose')

async function connectDB(){
    try {
       await mangoose.connect(process.env.MANGODB_URI)

    } catch (err) {
       console.log(err); 
    }
}
module.exports = connectDB