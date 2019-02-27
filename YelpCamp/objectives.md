#YelpCamp

* Add landing page
* Add Campgrounds Page that list all campgrounds

Each Campground has:
* Name 
* Image

[
    {name: "...", image: "..."
]
--------------------------

#Layout and Basic Styling
* Create our header and footer partials 
* Add in Bootstrap

#Creating New Campgrounds 
* Setup new campground POST Route
* Add in body parder
* Setup to show form
* Add basic unstyled form

---------------------------
#Style the campgrounds page
* Add a better header/title
* Make campgrounddisplay in grid

---------------------------
#Style the Navbar and Form
* Add a navbar to all templates 
* Style the new campground form

---------------------------
#Add Mongoose
* Install and confiigure mongoose
* Setp campground model
* Use campground model insite of our routes

---------------------------
#Show Page
* Review the RESTful routes we've seen so far
* Add a description to our campground model
* Show db.collection.drop()
* Add a show route/template

RESTFUL ROUTES

name        url         verb        Desc.
=======================================
INDEX       /dogs       GET     Display a list of all dogs
NEW         /dogs/new   GET     Displays form to make a new dogs
CREATE      /dogs       POST    Add new dog to DB
SHOW        /dogs/:id   GET     Shows info about one dog

#Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require Everything correctly

#Add Seeds File
* Add a seeds.js file
* Run the seeds file everytime the server starts

#add the Comment model
* Make our errors go away
* Display Comments on campground show page

#Comment New/Create
* Discuss nested routes
* Add the comment nw and create routes
* Add the new comment form 

#Style Show Page
* Add sidebar to show page
* Style Comments

#Finish Styling Show Page
* Add public directory
* Add Custom Stylsheet

#Auth Pt. 1 - Add User Model 
* Install all packages needed for auth
* Define User model

#Auth Pt. 2 - Register
* Configure Passport 
* Add Register routes
* Add register template

#Auth Pt. 3 - Login
* Add login routes
* Add login template

#Auth Pt. 4 - Logout/Navbar
* Add logout routePrevent user from adding a comment if not signed in
* Add Logout route
* Add links to nav bar

#Auth Pt. 5 Show/Hide Links 
* Show/hide auth links in navbar correctly

#Refactor the routes
* Use Express router to reorganize all a routes

#Users + Comments
* Associate users and comments
* Save Author's name to a comment automatically

#Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username + ID to newly created campground

#Editing Campgrounds
* Add Method-Override
* Add Edit Route for campgrounds
* Add Link to Edit Page
* Add Update Route
* Fix $set problem

#Deleting Campgrounds
* Add Destroy route
* Add Delete Button

#Authorization Pt. 1
* User can only edit his/her campground's
* User can only delete his/her campground's
* Hide/Show edit and delete buttons

#Editing Comments
* Add Edit route for comments
* Add Edit button 
* Add Update route

Campground Edit Route: <!--/campgrounds/:id/edit-->
Comment Edit Route: <!--/campgrounds/:id/comments/:comment_id/edit-->

#Deleting comments
* Add Destroy route
* Add Delete button

Campground Destroy Route: /campgrounds/:id
Comment Destroy Route: /campground/:id/comments/:comment_id

#Authorization Pt. 2
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor middleware

#Adding in Flash
* Install and configure connect-flash
* Add bootstrap alerts to header
