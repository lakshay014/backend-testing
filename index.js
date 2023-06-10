const express=require('express')
const app = express()
const nodemailer = require('nodemailer')
const config = require('./config.json')
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:config.email,
        pass:config.pass
    }
})



app.get('/',(req,res) => {
    transporter.sendMail({
        from:'laksh<'+ config.email+'>',
        to:'lakshverma94@gmail.com',
        html:'hello this is a test mail :) '
    },(err,info) =>
    {
        if(err) throw err;
        
        res.json({status : info.response})
    })
})

app.listen(7000, ()=>console.log('Running on 7000'));