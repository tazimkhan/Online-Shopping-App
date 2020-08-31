const express=require('express');
const app=express();

const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
const api=require('./routes/api');


app.use(bodyParser.json());
app.use(cors());
app.use('/api',api);
app.get('/',(req,res)=>{
    res.send('hello');
})

app.listen(3000,()=>console.log('Server is running...')); 