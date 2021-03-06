const mongoose = require('mongoose');
const env = require('./environment');
mongoose.connect(`mongodb://localhost/${env.db}`);

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error in connecting MongoDB"));

db.once('open',function(){
console.log("Server is succesfully connected to :: MongoDB");
})

module.exports = db;