const express=require('express');
const mongoose = require('mongoose');
const router=express.Router();

const User_details=require('../models/User_details')
router.post('/',(req,res,next)=>{
    console.log(req.body);
    
    const user=new User_details({
        id:req.body.id,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email
    });
    user.save()
    .then(result=>{
        console.log(result);
        res.status(201).json({
            message:"User Created"
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err 
        })
    })

});


module.exports=router;