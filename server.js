const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/bulb-on'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/bulb-on/index.html'));
});

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });