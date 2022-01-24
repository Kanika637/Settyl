const express=require('express');
const mongoose = require('mongoose');
const router=express.Router();

const User_details=require('../models/User_details')



//get request
router.get('/',(req,res,next)=>{
    User_details.find()
    .then(result=>{
        res.status(200).json({
            UserData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

//post request

router.post('/',(req,res,next)=>{
    console.log(req.body);
    
    const user=new User_details({
        _id:new mongoose.Types.ObjectId,
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

//put request

router.put('/:_id',(req,res,next)=>{
    console.log(req.params._id);
    User_details.findOneAndUpdate({_id:req.params._id},{
        $set:{
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email

        }
    })
    .then(result=>{
        res.status(200).json({
            updated_entry:result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })

})


module.exports=router;