var express = require('express')
var router = express.Router();
var fs = require('fs')

var entries ={}

/*Get entries list*/
router.get('/', function(req,res) {
//read
fs.readFile(__dirname + '/../../data/db.json', 'utf8', function(err,data){
  console.log("err", err, "data", data)
  entries = JSON.parse(data)
  res.status(200).json(entries);
  res.send(entries)
  })

})
module.exports = router
