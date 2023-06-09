const express=require('express');
const { getContacts, postContact } = require('../controllers/contactController');
const router=express.Router();

router.get('/getContacts', async (req,res)=>{
    const data=await getContacts();
    res.json(data);
});

router.post('/postContact', async (req,res)=>{
    const data=await postContact({...req.body});
    if(!data.status)
    {
        return res.status(400).json(data);
    }
    res.json(data);
});

module.exports=router;
