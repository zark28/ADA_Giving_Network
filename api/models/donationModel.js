const {Schema} =require("mongoose")

const donationSchema = new Schema ({
    solicitorOrganisation:{
        type:String,
        required:[true,"Name field cannot be empty"]
    },
    amount:{
        type:Number,
        required:[true,"Cause field cannot be empty"]
    },
    description:{
        type:String,
        required:[true,"field cannot be empty"]
    },
    title:{
        type:String,
        required:[true,"field cannot be empty"]
    }

},
{timestamps:true})

const Donation=model('Donation',donationSchema)