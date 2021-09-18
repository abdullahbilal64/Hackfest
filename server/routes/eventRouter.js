var express = require('express');
var eventRouter = express.Router();
const bodyParser = require('body-parser');
var Event = require('../models/events');
var passport = require('passport');
var authenticate = require('../authenticate');

eventRouter.use(bodyParser.json());
eventRouter.use(bodyParser.json());
eventRouter.route('/')
    .get(authenticate.verifyUser,(req,res,next)=>{
            Event.find({})
            .then(res=>{

            })
    })
    .post(authenticate.verifyUser,(req,res,next)=>{
            Event.create(req.body)
            .then(res=>{

            })
    })
    .put(authenticate.verifyUser,(req,res,next)=>{
            res.statusCode = 500;
            res.send('PUT is not valid on events');
    })
    .delete(authenticate.verifyUser,(req,res,next)=>{
            res.statusCode = 500;
            res.send('DELETE is not valid on events');
    });
eventRouter.route('/:id')
    .get(authenticate.verifyUser,(req,res,next)=>{
            Event.findById(req.user._id)
            .then(res=>{

            })
    })
    .post(authenticate.verifyUser,(req,res,next)=>{
            res.statusCode = 500;
            res.send('event is not valid on event');
    })
    .put(authenticate.verifyUser,(req,res,next)=>{
            Event.findByIdAndUpdate(req.user._id,req.body)
            .then(res=>{

            })
    })
    .delete(authenticate.verifyUser,(req,res,next)=>{
            Event.findByIdAndDelete(req.user._id)
            .then(res=>{

            })
    });

module.exports = eventRouter;