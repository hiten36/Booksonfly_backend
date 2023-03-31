const express=require('express');
const { getUsers, postUser } = require('../controllers/userController');
const router=express.Router();

router.get('/getUsers', async (req,res)=>{
    const data=await getUsers();
    res.json(data);
});

router.post('/postUser', async (req,res)=>{
    const data=await postUser({...req.body});
    if(!data.status)
    {
        return res.status(400).json(data);
    }
    res.json(data);
});

module.exports=router;
