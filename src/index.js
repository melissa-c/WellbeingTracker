var $ = require('jquery')
var request = require('superagent')

$(document).ready(function(){
  $('submit').click(function(){
    request
      .post('/data/db.json')
      .send({req.body})
  })
})
