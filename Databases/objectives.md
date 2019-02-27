#Databases

## Intro to Databases
* What is a database?
*   A collection of information/data.
*   Has an interface
* SQL(relational) vs NoSQL(non-relational)
* We will be using a non-relatiional database

-------------------------
# Intro to MongoDB
* What is MongoDB
* Why are we using it 
* Let's install it


* Installing MongoDB on a Cloud9 workspace
* To install MongoDB in your workspace, you can open a terminal and run the following command:

* sudo apt-get install -y mongodb-org
* Running MongoDB on a Cloud9 workspace
* MongoDB is preinstalled in your workspace. To run MongoDB, run the following below (passing the correct parameters to it). Mongodb data will be stored in the folder data.

* $ mkdir data
* $ echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
* $ chmod a+x mongod
* You can start mongodb by running the mongod script on your project root:

* $ ./mongod 

-------------------------
# Our First Mongo Commands
* mongod - Starts the Mongo database
* mongo - opens Mongo shell
* help
* show dbs - show databases names
* use - set current database
* insert
* find
* update
* remove

* CRUD - Create Read Update Destroy

<Database>.<Collection>.<command>()

#Mongoose
* What is Mongoose?
* Why are we using it?
* Interact with a Mongo Database using Mongoose
