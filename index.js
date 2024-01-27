const express= require('express');
const app=express();

app.get('/welcome',(req, res)=>{
    res.send('welcome')
})
app.get('/goodbye',(req, res)=>{
    res.send('goodbye')
})

const port = process.env.PORT;

app.listen(port, ()=>{
    try {
        console.log(('listinung') +port)
    } catch (err) {
        console.log((err));
    }
})