var test = require('tape')

var server = require('../server.js')

test('testing WellbeingTracker', function (t) {
  t.ok(true)
  t.end()
})

test('show db obj', function (t){
  request(server)
  .get('http://localhost:9966/v1/entries')
  .expect(200)
  .end(function(err, res){
    t.false(err, "no error")
    console.log('err: ', err, "res: ", res)
    t.end()
  })
})
