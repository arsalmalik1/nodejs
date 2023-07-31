const express = require('express');
require("./db/connection");
const Student = require("./models/students");

const app =express();
const port = process.env.port || 3000;
app.use(express.json());

const sendMail = require('./controllers/send-mail');

app.post('/student',(req,res)=>{
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(()=>{
        res.status(200).send(user);

    }).catch((e)=>{
        res.status(400).send(e);
    });
});
app.get('/', (req, res)=>{
    res.send('Welcome');
});

app.get('/send', sendMail);

app.listen(port,()=>{
    console.log('Connection is setup');
});