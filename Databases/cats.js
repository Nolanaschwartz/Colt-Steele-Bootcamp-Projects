var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app", {useMongoClient:true});

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to the DB

/*
var george = new Cat({
    name: "George",
    age: 11,
    temperament: "Grouchy"
});

var george = new Cat({
    name: "Mrs. Norris",
    age: 7,
    temperament: "Evil"
});

george.save(function(err, cat){
    if(err){
        console.log("Something went wrong");
    } else{
        console.log("Saved cat to DB");
        console.log(cat);
    }
});
*/

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Nice"
}, function(err, cat){
    if(err){
        console.log(err);
    } else{
        console.log(cat);
    }
});


//retreve all cats from the DB and Console.log each one
Cat.find({}, function(err, cats){
    if(err){
        console.log("Error");
        console.log(err);
    } else{
        console.log("All the cats");
        console.log(cats);
    }
});
