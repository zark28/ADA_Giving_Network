const mongoose = require("mongoose");
require("dotenv").config()

const db =async()=>{
        const connection= await mongoose.connect(process.env.MONGODB_URI )
        if(connection){
        console.log(`Database connected ${connection.connection.host}`)
        }else{
        console.log(`Database connected ${connection.connection.host}`)  
        }
}

module.exports =db