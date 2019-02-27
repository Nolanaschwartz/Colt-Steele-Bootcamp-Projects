var express  = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
   res.send("Hi there!"); 
});

// "/bye" => "Goodbye"
app.get("/bye", function(req, res){
   res.send("Bye!"); 
});
// "/dog" => "Meow!"

app.get("/dog", function(req, res){
    console.log("made a request to dog.");
    res.send("MEOW!"); 
});

// Route to any non-existing route
app.get("*", function(req, res){
    res.send("You are a star!");
});

// tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});