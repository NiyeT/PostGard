const express = require('express')
const app = express()

app.get('/', function (req, res) {
  var query=req.query;
  var image=query.image;
  

  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
