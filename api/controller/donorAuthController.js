require("dotenv").config()
const Donor =require("../models/donorModel")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const {donorSigninValidator,donorSignupValidator}=require("../middleware/donorAuthValidator")

const donorSignup = async (req, res) => {
    const {error,value} = await donorSignupValidator.validate(req.body);
    if(error){
        res.status(400).json("required fields can't be empty")
        return;
    }
    const {email} = value;

    // check if email is already in the database
    const alreadyExists = await Donor.findOne({email });
    if (alreadyExists) {
      res.status(400).json({ message: 'Socilitor already exists.' });
      return;
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 12);
    value['password']=hashedPassword
  
    const donor = await Donor.create(value);
  
    res.status(201).json({ donor });
  };
  

  const donorSignin = async (req, res) => {
    const {error,value} = await donorSigninValidator.validate(req.body);
    if(error){
        res.status(400).json({message:"required fields can't be empty"})
        return;
    }
    const {email} = value;
  
    // check if email is in the databa
    let donor = await Donor.findOne({ email });

    if (!donor) {
      res.status(400).json({ message: 'Invalid credentials' });
      return;
    }
  
    // check for password
    const isMatch = await bcrypt.compare(password, solicitor.password);
    if (!isMatch) {
      res.status(400).json({ message: 'Invalid credentials' });
      return;
    }
  
    // generate token
    const token = jwt.sign({ id: solicitor._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: '1h',
    });
    res.status(200).json({ donor ,token});
  };
  
  
  module.exports={
    donorSignin,
    donorSignup
  }