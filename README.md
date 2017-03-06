# fitr-server

Express/Mongodb based project.


#running the serve
npm start

#running test
gulp test



#routes

##User
POST /user/login
POST /user/register
GET /user/:userId/:exercises

##Exercises

GET /exercise/:exerciseId
PUT /exercise/:exerciseId
DELETE /exercise/:exerciseId
POST /exercise/
