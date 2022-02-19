// // import express from "express";
// var express = require('express');
// var bodyParser = require('body-parser');
// var cors = require('cors');
// const { getStudents } = require('../controllers/studentController');
// var app = express();
// app.use(cors());

// // const router = express.Router();
// app.use('view engine', 'ejs'); 
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
// // router.route('/').get((req,res)=>{res.send(500);});
// // router.post('/', createPost);

// // export default router;
// module.exports = router;


var express = require('express');
const { getStudents } = require('../controllers/studentController');
var router = express.Router();
// var app = require('../../ApplicationInstance');


router.route('/').get((req,res)=>{res.send(500);});

module.exports = router;