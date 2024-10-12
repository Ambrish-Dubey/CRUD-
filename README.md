# CRUD Operations with Express.js, MongoDB, and Node.js

This repository contains a basic implementation of CRUD (Create, Read, Update, Delete) operations using Express.js, MongoDB, and Node.js.

NOTE:- I've used POSTMAN for api testing, alternatively we can use frontend templates/view files and forms too 

## Pre-requisites:-
* Should have created a db on mongodb compass named as crud and collection's name should be tasks
* Should have installed postman

# Steps to run the file

## A. Copy paste these in the TERMINAL:-
1. npm i express
2. npm i mongoose
3. npm i nodemon
4. npm i body-parser
5. npm i dotenv
6. npm i ejs (optional)
7. npm list (lists all the above mentioned installations or check dependencies inside package.json file)
8. npm run dev (to run the file)

## B. set properties inside the package.json file:-
1. Add the property:- "type":"module" (for es6 syntax)
2. Replace the test property inside the scripts property with "dev":"nodemon index.js" (index.js is the main file name)


# Steps to close the file
1. Control C (ctrl + c) on the TERMINAL

# Mandatory Model schema for the client user as ive used POSTMAN:-
{"title":"any task title","description":"anything","status":"completed"} //This is given in the userModel.js file

# For creating a task:-
Steps:-
1. Go to the url:- http://localhost:5001/api/task/create (mentioned in the userRoutes.js file) on POSTMAN and paste it
2. Use the POST method since its what wer'e posting respecting the routes
3. Click on body then raw and write your data based on the model schema mentioned above
4. You can check your entries on mongodb gui i.e compass

# For reading all task:-
Steps:-
1. Go to the url:- http://localhost:5001/api/task/getall on POSTMAN and paste it
2. Use the GET method respecting the routesa and send


# For updating a task:-
Steps:-
1. Go to the url:- http://localhost:5001/api/task/update/anyID on POSTMAN and paste it
2. Use the PUT method
3. Click on body then raw and update your data based on the model schema
4. You can check your updated entries on mongodb gui i.e compass

# For deleting a task:-
Steps:-
1. Go to the url:- http://localhost:5001/api/task/delete/taskName on POSTMAN and paste it
2. Use the DELETE method
3. You can check your entries are deleted on mongodb gui i.e compass or using the fetch url
#   C R U D - 
 
 #   C R U D - 
 
 # CRUD-
