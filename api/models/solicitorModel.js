const {model,Schema} =require("mongoose")

const solicitorSchema = new Schema ({
    organizatioName:{
        type:String,
        required:[true,"Name field cannot be empty"]
    },
    cause:{
        type:String,
        required:[true,"Cause field cannot be empty"]
    },
    description:{
        type:String,
        required:[true,"field cannot be empty"]
    },
    location:{
        type:String,
        required:[true,"field cannot be empty"]
    },
    description:{
        type:String,
        required:[true,"Cause field cannot be empty"]
    },
    firstName:{
        String,
        required:[true,"Name field cannot be empty"]
    },
    lastName:{
        String,
        required:[true,"Name field cannot be empty"]
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: true,
        lowercase: true,
      },
    phoneNumber:{
        type:String,
        required:[true,"Field is reuired"]
      },
    size:{
        type:String,
        required:[true,'Field is required']

      },
    password: {
        type: String,
        required: [true, 'Password is required.'],
      }
},
{timestamps:true})

const Solicitor = model('Recipient',solicitorSchema)

modeul.exports=Solicitor