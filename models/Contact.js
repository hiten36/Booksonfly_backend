const mongoose=require('mongoose');

const mySchema=mongoose.Schema({
    name: String,
    email:String,
    message:String,
});

const Contact=mongoose.model('Contact', mySchema);

module.exports=Contact;
