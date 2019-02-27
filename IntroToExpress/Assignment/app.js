var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hello there welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    console.log(req.params);
    
    var Zoo = {
        pig: "Oink",
        cow:"Moo",
        dog:"Woof Woof!",
        crow: "Cah Cah",
        fox:"...What does the fox say?"
    };
    
    var animalSays = "";
    if(Zoo[animal]){
        animalSays =Zoo[animal];
    }
    
    if(animalSays === ""){
        res.send("Sorry, page not found... What are you doing with your life");
    } else{
        res.send("The " + animal + " says '" + animalSays + "'");     
    }
   
});

app.get("/repeat/:word/:count", function(req, res){
   console.log(req.params);
   var message = req.params.word;
   var repString = "";
   var time = Number(req.params.count)
   
   for( var i = 0; i < time; i++) {
        repString += message + " ";
   }
 
   res.send(repString);
});

// Route to any non-existing route
app.get("*", function(req, res){
    res.send("Sorry, page not found... What are you doing with your life");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});