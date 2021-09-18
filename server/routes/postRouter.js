var express = require('express');
var postRouter = express.Router();
const bodyParser = require('body-parser');
var Post = require('../models/posts');
var passport = require('passport');
var authenticate = require('../authenticate');

postRouter.use(bodyParser.json());
postRouter.route('/')
    .get(authenticate.verifyUser,(req,res,next)=>{
            Post.find({})
            .then(res=>{

            })
    })
    .post(authenticate.verifyUser,(req,res,next)=>{
            Post.create(req.body)
            .then(res=>{

            })
    })
    .put(authenticate.verifyUser,(req,res,next)=>{
            res.statusCode = 500;
            res.send('PUT is not valid on Posts');
    })
    .delete(authenticate.verifyUser,(req,res,next)=>{
            res.statusCode = 500;
            res.send('DELETE is not valid on Posts');
    });
postRouter.route('/:id')
    .get(authenticate.verifyUser,(req,res,next)=>{
            Post.findById(req.user._id)
            .then(res=>{

            })
    })
    .post(authenticate.verifyUser,(req,res,next)=>{
            res.statusCode = 500;
            res.send('POST is not valid on Post');
    })
    .put(authenticate.verifyUser,(req,res,next)=>{
            Post.findByIdAndUpdate(req.user._id,req.body)
            .then(res=>{

            })
    })
    .delete(authenticate.verifyUser,(req,res,next)=>{
            Post.findByIdAndDelete(req.user._id)
            .then(res=>{

            })
    });


module.exports = postRouter;