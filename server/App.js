const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose');
const morgan=require('morgan');
const cors=require('cors');

const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); 

mongoose.connect('mongodb://127.0.0.1/settyl',{
    useNewURlParser:true,
    useUnifiedTopology:true
});

mongoose.Promise=global.Promise;

app.use(morgan('dev'));
app.use(cors());



//Routes

app.use('/users', require('./Routes/users'));



module.exports=app;
