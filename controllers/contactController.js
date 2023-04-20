const Contact = require('../models/Contact');

const getContacts=async()=>{
    const data=await Contact.find();
    return {status: true, data};
};

const postContact=async({name, email, message})=>{
    const newContact=new Contact({
        name,
        email,
        message
    });
    const saveUser=await newContact.save();
    return {status: true, data: saveUser, message: 'Conatct sent Successful'};
};

module.exports={
    getContacts,
    postContact
};
