var express = require('express');
var eventRouter = express.Router();
const bodyParser = require('body-parser');
var Event = require('../models/events');
var passport = require('passport');
var authenticate = require('../authenticate');

eventRouter.use(bodyParser.json());
eventRouter.route('/')
    .get(authenticate.verifyUser,(req,res,next)=>{
            Event.find({})
            .then(events=>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(events);
            })
    })
    .post(authenticate.verifyUser,(req,res,next)=>{
            Event.create({creator:req.user._id,eventName:req.body.eventName,eventLocation:req.body.eventLocation,Description:req.body.Description})
            .then(event=>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(event);
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
            Event.findById(req.params.id)
            .populate('creator')
            .then(event=>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(event);
            })
    })
    .post(authenticate.verifyUser,(req,res,next)=>{
            res.statusCode = 500;
            res.send('event is not valid on event');
    })
    .put(authenticate.verifyUser,(req,res,next)=>{
            Event.findByIdAndUpdate(req.params.id,{eventName:req.body.eventName,eventLocation:req.body.eventLocation,Description:req.body.Description})
            .then(event=>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(event);
            })
    })
    .delete(authenticate.verifyUser,(req,res,next)=>{
            Event.findByIdAndRemove(req.params.id)
            .then(()=>{
                res.statusCode = 200;
                res.send('Deleted');
            })
    });

module.exports = eventRouter;