var $ = require('jquery')
var request = require('superagent')

$(document).ready(function(){
  $('submit').click(function(){
    request
      .get('/data/db.json')
      .end(function(err, res){
        console.log("err:", err, "res: ", res.body)
        res.json()
      })
  })
})


