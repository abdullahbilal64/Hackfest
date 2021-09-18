const express = require('express');
const bodyParser = require('body-parser');
const authenticate = require('../authenticate');
const multer = require('multer');
var uploadRouter = express.Router();
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images')
    },
    filename:(req,file,cb)=>{
        cb(null, file.originalname)
    }
});
const imageFileFilter = (req,file,cb)=>{
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/))
    {
        return cb(new Error('You can upload only image files!'),false);
    }
    cb(null,true);
};

const upload = multer({storage:storage,fileFilter:imageFileFilter});

module.exports = upload;
