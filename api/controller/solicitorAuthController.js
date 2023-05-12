const Solicitor =require("../models/solicitorModel")
require("dotenv").config()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {solicitorSigninValidator,solicitorSignupValidator}=require("../middleware/solicitorAuthValidator")
const solicitorSignup = async (req, res) => {
    const {error,value} = await solicitorSignupValidator.validate(req.body);
    if(error){
        res.status(400).json("required fields can't be empty")
        return;
    }
    const {email} = value;

    // check if email is already in the database
    const alreadyExists = await Solicitor.findOne({email });
    if (alreadyExists) {
      res.status(400).json({ message: 'Socilitor already exists.' });
      return;
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 12);
    value['password']=hashedPassword
  
    const solicitor = await Solicitor.create(value);
  
    res.status(201).json({ solicitor });
  };
  

  const solicitorSignin = async (req, res) => {
    const {error,value} = await solicitorSigninValidator.validate(req.body);
    if(error){
        res.status(400).json({message:"required fields can't be empty"})
        return;
    }
    const {email} = value;
  
    // check if email is in the database
    let solicitor = await Solicitor.findOne({ email });

    if (!solicitor) {
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
    res.status(200).json({ solicitor ,token});
  };
  
  
  module.exports={
    solicitorSignin,
    solicitorSignup
  }