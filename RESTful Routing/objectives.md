#RESTful Routing
* Representational State Transfer

##Introduction 
* Define REST and explain why it matters - A pattern to define our routes
* List all 7 RESTful routes
* Show example of RESTful routing in practice

REST - a mapping between routes and CRUD

#Example a blog site
CREATE  
READ    /allBlogs
UPDATE  /updateBlog/:id
DESTROY /destroyBlog/:id


#The 7 Routes
Index   /dogs   GET
New     /dogs/new   GET
Create  /dogs   POST
Show    /dogs/:id   GET
Edit    /dogs/:id/edit  GET
Update  /dogs/id    PUT
Destroy /dogs/:id   DELETE

#Blog Index
* Setup Blogg App
* Create the Blog model 
* Add INDEX Route and templat 
* Add simple Nav bar

#Basic Layout
* Add HEader and Footer Partials
* Include Semantic UI
* Add a Simple Nav

#Putting the C in CRUD
* Add NEW route
* Add NEW Template
* Add CREATE route
* Add CREATE Template

#SHOWtime
* Add SHOW route
* Add SHOW template
* Add links to show page
* Style SHOW template

#Edit/Update
* Add EDIT route
* Add EDIT Form
* Add Update Route
* Add Udate Form
* Add Method-Override

#DESTROOYYYY!
* Add Destroy route
* Add Edit and Destroy links

#Final Updates
* Sanitize blog body
* Style Index
* Update REST Table
