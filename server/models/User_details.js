const mongoose=require('mongoose')

//making user schema

const userSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,

    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    }
});

module.exports=mongoose.model('User_details',userSchema);