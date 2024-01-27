const express= require('express');

require('dotenv').config();
const app=express();

app.get('/welcome',(req, res)=>{
    res.send('welcome')
})
app.get('/goodbye',(req, res)=>{
    res.send('goodbye')
})
app.get('/name',(req, res)=>{
    res.send(`Hello My name is ${process.env.NAME}`)
})
// console.log(`Hello My name is ${process.env.NAME}`)

const port = process.env.PORT;

app.listen(port, ()=>{
    try {
        console.log(('listining ') +port)
    } catch (err) {
        console.log((err));
    }
})