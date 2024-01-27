var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
const urlDB="mongodb+srv://manhbqph28509:MqSLlCWX57lNo0hP@cluster0.wmyzytz.mongodb.net/?retryWrites=true&w=majority"
var mongoose = require('mongoose')
const {Schema, SchemaType} = require("mongoose");
mongoose.connect(urlDB,{ });
const db = mongoose.connection;
db.on('error', console.error.bind(console,'Lôi kết nối MongoDB'));
db.once('open',function (){
  console.log('Kết nối thành công');
});
var car = new mongoose.Schema({
  name:String,
  brand: String,
  price: String
});
const Car= mongoose.model('lab3_4', car);
router.get('/showListJson',function (req, res){
  var students = Car.find({}).then((data)=>{
    res.send(data);
  }).catch(error =>{
    res.send('Thất bại'+error.message)
  })
});

module.exports = router;
