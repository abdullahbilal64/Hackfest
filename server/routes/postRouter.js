var express = require('express');
var postRouter = express.Router();
const bodyParser = require('body-parser');
var Post = require('../models/posts');
var passport = require('passport');
var authenticate = require('../authenticate');
const { request } = require('express');
const upload = require('./uploadRouter');

postRouter.use(bodyParser.json());
postRouter.route('/')
    .get(authenticate.verifyUser,(req,res,next)=>{
            Post.find({})
            .populate('from')
            .then(details=>{
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(details);
            })
            .catch((err) => next(err));
    })
    .post(authenticate.verifyUser,upload.any('images'),(req,res,next)=>{
        var Data = new Array();
        for(let i=0;i<req.files.length;i++)
        {
            Data[i] = req.files[i].originalname;
        }
            Post.create({from:req.user._id,text:req.body.text,image:Data})
            .then(details=>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(details);
            })
            .catch((err) => next(err));
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
    .get((req,res,next)=>{
            Post.findById(req.params.id)
            .populate('from')
            .then(details=>{
                res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(details);
            })
            .catch((err) => next(err));
    })
    .post(authenticate.verifyUser,(req,res,next)=>{
            res.statusCode = 500;
            res.send('POST is not valid on Post');
    })
    .put(authenticate.verifyUser,(req,res,next)=>{
            Post.findByIdAndUpdate(req.user._id,req.body)
            .then(res=>{
                res.statusCode(200);
            })
    })
    .delete(authenticate.verifyUser,(req,res,next)=>{
            Post.findByIdAndDelete(req.user._id)
            .then(res=>{
                res.statusCode = 200;
                res.send('Deleted');
            })
    });

postRouter.route('/:id/comment')
    .get(authenticate.verifyUser,(req,res,next)=>{
        res.statusCode = 500;
        res.send('POST is not valid on Comment');
    })
    .post(authenticate.verifyUser,upload.any('images'),(req,res,next)=>{
        var Data = new Array();
        for(let i=0;i<req.files.length;i++)
        {
            Data[i] = req.files[i].originalname;
        }
        Post.findById({_id: req.params.id})
        .then(details=>{
            details.comments.push({from:req.user._id,text:req.body.text,image:Data})
            details.save().then(details=>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(details);
            });
        })
        .catch((err) => next(err));
    })
    .put(authenticate.verifyUser,(req,res,next)=>{
        res.statusCode = 500;
    })
    .delete(authenticate.verifyUser,(req,res,next)=>{
        Post.findByIdAndDelete({_id: req.params.id})
        .then(details=>{
            res.statusCode = 200;
            res.send('Deleted');
        })
    });
postRouter.route('/:id/comment/:cid')
    .get(authenticate.verifyUser,(req,res,next)=>{
        res.statusCode = 500;
        res.send('POST is not valid on Comment');
    })
    .post(authenticate.verifyUser,(req,res,next)=>{
        res.statusCode = 500;
        res.send('POST is not valid on Comment');
    })
    .put(authenticate.verifyUser,(req,res,next)=>{
        res.statusCode = 500;
        res.send('POST is not valid on Comment');
    })
    .delete(authenticate.verifyUser,(req,res,next)=>{
        res.statusCode = 500;
        res.send('Delete is not valid on Comment');
    })

module.exports = postRouter;