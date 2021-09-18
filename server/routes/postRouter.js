var express = require('express');
var postRouter = express.Router();
const bodyParser = require('body-parser');
var Post = require('../models/posts');
var passport = require('passport');
var authenticate = require('../authenticate');
const { request } = require('express');

postRouter.use(bodyParser.json());
postRouter.route('/')
    .get(authenticate.verifyUser,(req,res,next)=>{
            Post.find({})
            .populate('post.user')
            .then(details=>{
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(details);
            })
            .catch((err) => next(err));
    })
    .post(authenticate.verifyUser,(req,res,next)=>{
            Post.create(req.body)
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
    .get(authenticate.verifyUser,(req,res,next)=>{
            Post.findById(req.user._id)
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

            })
    });

postRouter.route('/:id/comment')
    .get(authenticate.verifyUser,(req,res,next)=>{
        Post.findById({_id: req.params.id})
        .populate('comment.from')
        .then(details=>{
                res.statusCode(200);
                res.setHeader('Content-Type', 'application/json');
                res.json(details.comment);
        })
        .catch((err) => next(err));
    })
    .post(authenticate.verifyUser,(req,res,next)=>{
        Post.findById({_id: req.params.id})
        .then(details=>{
            res.statusCode = 200;
            details.comment.push(req.body.comment);
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
        Post.findById({_id: req.params.id})
        .then(details=>{
            res.statusCode = 200;
            details.comment.id(req.params.cid).remove();
            details.save().then(details=>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(details);
            });
        })
    })

module.exports = postRouter;