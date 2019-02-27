var express = require("express"),
    app = express(),
    bodyParser =require("body-parser"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override"),
    expressSanitizer = require("express-sanitizer");
  
//App config  
mongoose.connect("mongodb://localhost/restful_blog_app",{useMongoClient: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

//Mongoos/model config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created:{type:Date, default:Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

/*
Blog.create({
    title: "Test Blog",
    image:"https://farm9.staticflickr.com/8609/16169099399_bd393db803.jpg",
    body:"This is a test blog, with a cat for the picture!"
});
*/

//RESTful Routes
app.get("/", function(req, res){
    res.redirect("/blogs");
});

//INDEX Route
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
       if(err){
           console.log(err);
       } else{
           res.render("index", {blogs: blogs});
       }
    });
});

//NEW route
app.get("/blogs/new", function(req, res){
    res.render("new");
});

//CREATE route
app.post("/blogs", function(req, res){
   //create blog
   req.body.blog.body = req.sanitize(req.body.blog.body);
   
   Blog.create(req.body.blog, function(err, newBlog){
       if(err){
           res.render("new");
       }else{
           //redirect
           res.redirect("/blogs");
       }
   });
});

//SHOW route
app.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        }else{
            res.render("show", {blog:foundBlog});
        }
    })
});

//EDIT route
app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        }else{
            res.render("edit", {blog:foundBlog});
        }
    });
});

//UPDATE route
app.put("/blogs/:id", function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err){
            res.redirect("/blogs");
        } else{
            res.redirect("/blogs/"+req.params.id);
        }
    });
});

//DELETE Route
app.delete("/blogs/:id", function(req, res){
    //Destroy the blog 
    Blog.findByIdAndRemove(req.params.id, function(err){
       if(err){
           res.redirect("/blogs");
       } else{
           res.redirect("/blogs");
       }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Blog server is running");
});