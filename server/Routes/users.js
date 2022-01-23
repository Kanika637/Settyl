const express=require('express');
const { Mongoose } = require('mongoose');
const router=express.Router();

const User_details=require('../models/User_details')
router.post('/',(req,res)=>{
    console.log(req);
    
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