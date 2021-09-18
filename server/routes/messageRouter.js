var express = require('express');
var msgRouter = express.Router();
const bodyParser = require('body-parser');
var Msg = require('../models/message');
var passport = require('passport');
var authenticate = require('../authenticate');

msgRouter.use(bodyParser.json());
msgRouter.route('/')
    .get(authenticate.verifyUser,(req,res,next)=>{
            
    })
    .post(authenticate.verifyUser,(req,res,next)=>{

    })
    .put(authenticate.verifyUser,(req,res,next)=>{
        
    })
    .delete(authenticate.verifyUser,(req,res,next)=>{
        
    });
msgRouter.route('/:id')
    .get(authenticate.verifyUser,(req,res,next)=>{
            
    })
    .post(authenticate.verifyUser,(req,res,next)=>{

    })
    .put(authenticate.verifyUser,(req,res,next)=>{
        
    })
    .delete(authenticate.verifyUser,(req,res,next)=>{
        
    });

module.exports = userRouter;