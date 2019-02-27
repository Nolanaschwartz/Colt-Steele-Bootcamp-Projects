var express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    User = require("./models/user");
    
mongoose.connect("mongodb://localhost/auth_demo_app", {useMongoClient: true});
mongoose.Promise = global.Promise;
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(require("express-session")({
    secret: "Casper is the best and cutest cat in the world",
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//===========
// Routes
//===========

app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret", isLoggedIn, function(req, res){
    res.render("secret");
});

//Auth Routes

//Show Sign up form
app.get("/register", function(req, res){
    res.render("register");
});

//Handling user sign up
app.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        } else {
            passport.authenticate("local")(req, res, function(){
                res.redirect("/secret");
            });
        }
    });
});

//Login routes
app.get("/login", function(req, res) {
    res.render("login");
});


//login logic
//middleware
app.post("/login",passport.authenticate("local",{
    successRedirect:"/secret",
    failureRedirect:"/login"
}), function(req, res){
    
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


app.listen(process.env.PORT, process.env.IP, function(req, res){
    console.log("Server has started");
});