const mongoose = require('mongoose');

const dns = require('dns');

// Force Node to use Google DNS
dns.setServers(['8.8.8.8', '8.8.4.4']);


function connectToDB() {
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('Connected to the database');
    })
    .catch((err)=>{
        console.log('Error connecting to the database');
        console.log(err);
        process.exit(1);
    })
}


module.exports = connectToDB;