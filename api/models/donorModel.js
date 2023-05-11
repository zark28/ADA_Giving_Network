const {model,Schema} =require("mongoose")
const Solicitor =require("./solicitorModel")

const donorSchema = new Schema ({
    organizatioName:{
        type:String,
        required:[true,"Name field cannot be empty"]
    },
    description:{
        type:String,
        required:[true,"Cause field cannot be empty"]
    },
    firstName:{
        type:String,
        required:[true,"Name field cannot be empty"]
    },
    lastName:{
        type:String,
        required:[true,"Name field cannot be empty"]
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: true,
        lowercase: true,
      },
      password: {
        type: String,
        required: [true, 'Password is required.'],
      },
      donations: [{
        type: Schema.Types.ObjectId, 
        ref: 'Donation',
    }]
},
{timestamps:true})

const Donor = model("Donor",donorSchema)