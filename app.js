var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/",function(req,res){
    res.render("home");
});


app.listen(5500, function() {
    console.log("port is starting at 5500");
    console.log("server started")
})

