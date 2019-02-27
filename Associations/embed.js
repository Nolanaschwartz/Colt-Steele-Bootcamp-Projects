var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo",{useMongoClient: true});

//POST- title, content
var postSchema = new mongoose.Schema({
  title:String,
  content:String
});

var Post =mongoose.model("post", postSchema);

//User -email, name
var userSchema = new mongoose.Schema({
  email:String,
  name:String,
  posts:[postSchema]
});

var User = mongoose.model("user", userSchema);

// var newUser = new User({
//     email:"Ron@hogwarts.edu",
//     name:"Ron Weasley"
// });

// newUser.posts.push({
//     title:"How to brew polyjuice potion",
//     content: "Learn this in potions class!"
// });

// newUser.save(function(err, user){
//   if(err){
//       console.log(err);
//   } else {
//       console.log(user);
//   }
// });

// var newPost =new Post({
//     title:"Reflections on Apples",
//     content:"They are pretty healthy"
// });

// newPost.save(function(err, post){
//   if(err){
//       console.log(err);
//   } else{
//       console.log(post)
//   }
// });

User.findOne({name:"Ron Weasley"}, function(err, user){
    if(err){
        //console.log(err);
    }else {
        
        user.posts.push({
           title:"3 things I really hate",
           content:"Voldemort, Voldemort, Snape"
        });
        
        user.save(function(err, user){
            if(err){
                console.log(err);
            }else{
                console.log(user);
            }
        });
    }
});