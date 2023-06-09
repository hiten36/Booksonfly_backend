require('dotenv').config();
require('./db/conn');
const express=require('express');
const cors=require('cors');
const port = process.env.PORT || 5000;
const app=express();
const userRouter=require('./routes/userRouter');
const contactRouter=require('./routes/contactRouter');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/user', userRouter);
app.use('/contact', contactRouter);

app.listen(port, ()=>{
    console.log('Listening ...');
});
