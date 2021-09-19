var express = require('express');
var userRouter = express.Router();
const bodyParser = require('body-parser');
var User = require('../models/user');
var passport = require('passport');
var authenticate = require('../authenticate');


userRouter.use(bodyParser.json());
/*userRouter.route('/')
    .get(authenticate.verifyUser,(req,res,next)=>{
            User.findById(req.user._id)
            .then((details)=>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(details);
            })
    })
    .post(authenticate.verifyUser,(req,res,next)=>{
            res.statusCode = 500;
            res.send('POST is not valid on Users');
    })
    .put(authenticate.verifyUser,(req,res,next)=>{
            res.statusCode = 500;
            res.send('PUT is not valid on Users');
    })
    .delete(authenticate.verifyUser,(req,res,next)=>{
            res.statusCode = 500;
            res.send('DELETE is not valid on Users');
    });
userRouter.route('/:id')
    .get(authenticate.verifyUser,(req,res,next)=>{
        User.findById(req.params.id)
        .then((details)=>{
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(details);
        })
    })
    .post(authenticate.verifyUser,(req,res,next)=>{
        res.statusCode = 500;
        res.send('POST is not valid on User');
    })
    .put(authenticate.verifyUser,(req,res,next)=>{
        User.findByIdAndUpdate(req.user._id,req.body)
        .then((details)=>{
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(details);
        })
    })
    .delete(authenticate.verifyUser,(req,res,next)=>{
        User.findByIdAndDelete(req.user._id)
        .then(()=>{
            res.statusCode = 200;
            res.send('Profile Deleted');
        })
    });
*/
userRouter.post('/signup', (req, res, next) => {
        User.register(new User({firstname:req.body.firstname,lastname:req.body.lastname,username:req.body.username}),
            req.body.password, (err, user) => {
                if (err) {
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({ err: err });
                } else {
                    passport.authenticate('local')(req, res, () => {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json({ success: true, status: 'Registration Successful!' });
                    });
                }
            });
});
userRouter.post('/login', passport.authenticate('local'), (req, res) => {
        var token = authenticate.getToken({ _id: req.user._id });
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: true, token: token, status: 'You are successfully logged in!' });
});

module.exports = userRouter;