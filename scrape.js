var express =require('express')
var fs = require ('fs')
var request = require('request')
var app = express()


var symptomsData = {'date: '', 'symptoms': '', additional-info':''}
app.get('/', function(req, res){
url =
request(url, function( err, res, html)){
  if(!err)

    var $ = cheerio.load(html)
  var date, symptoms, additional-info
  var symptomsData = {'entries':'date: '', 'symptoms': '', additional-info':''}
  $.('date').filter(function(){
    var data = $(this)
    symptomsData.date =data
   })
  $.('symptoms').filter(function(){
    var data = $(this)
    symptomsData.symptoms =data
   })
  $.('additional-info').filter(function(){
    var data = $(this)
    symptomsData.additional-info =data
   })
}


})

