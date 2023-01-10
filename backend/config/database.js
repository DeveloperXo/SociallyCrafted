const mongoose = require('mongoose');

const connectdb =  () => {
    mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true}).then((d)=>{
        console.log(`mongodb connected with server ${d.connection.host}`)
    }).catch((err)=>{
        console.log(err)
    });
    mongoose.set('strictQuery', true);
}

module.exports = connectdb