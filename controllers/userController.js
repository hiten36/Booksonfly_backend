const User = require('../models/User');
const bcrypt=require('bcryptjs');

const getUsers=async()=>{
    const data=await User.find();
    return {status: true, data};
};

const postUser=async({name, email, phone, password})=>{
    const checkUser=await User.findOne({email});
    const checkUser1=await User.findOne({phone});
    if(checkUser || checkUser1)
    {
        return {status: false, message: 'User already exists'};
    }

    const pass=await bcrypt.hash(password, 8);
    const newUser=new User({
        name,
        email,
        phone,
        password: pass
    });
    const saveUser=await newUser.save();
    return {status: true, data: saveUser, message: 'User Registration Successful'};
};

module.exports={
    getUsers,
    postUser
};
