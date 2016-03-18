var express = require('express')
var router = express.Router();
var fs = require('fs')
var h = require('hyperscript')
var bodyParser = require('body-parser')

var entries =[]
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

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

router.post('/', function(req,res) {
  var newEntry = req.body
  res.send(entries)
  entries.push(newEntry)
  fs.writeFile(__dirname + '/../../data/db.json', JSON.stringify (entries))
  res.json(newEntry)
})

module.exports = router
