let express = require('express');
let app = express();
//console.log("Hello world");
app.get("views/index.html", function(req, res) {
    res.sendFile(__dirname + "/views/index.html")
});




































 module.exports = app;
