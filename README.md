Flow:

1. installed express and nodemon "npm install express && npm install --save-dev nodemon"

2.0 created a src folder and make a server.js file

2.1 created a express app

2.2 created a port

2.3 created a get route

2.4 listen the database connection

3. As we are using "const express = require("express")" in our server.js file, we need to change "type": "module" in our package.json file which is the new way of importing modules in nodejs.

4.0 created a route Folder and make a movieRoute.js file

4.1 created a router

4.2 created a route

4.3 export the router

4.4 import the movieRoute

4.5 use the movieRoute

4.6 created other route also

4.7 install prisma orm "npx prisma init" and after that "npm install prisma --save-dev" and "npm i @prisma/client" for autocompletion when working with different tables

5.0 connect with neondb database and create a project in the neondb database and copy the connection string in the env file "DATABASE_URL"

6.0 install the dotenv "npm install dotenv"

6.1 import the dotenv

6.2 use the dotenv

6.3 created a database connection in db.js file in config folder

6.4 if the app is in production mode, then we need to log the queries and errors

6.5 connect with database

6.6 disconnect with database

6.7 export the prisma, connectDB and disconnectDB

6.8 import the prisma, connectDB and disconnectDB

6.9 connect with database

7.0 creating a user model

7.1 now run in the terminal to migrate users table in NeonDB database "npx prisma migrate dev --name add_users_table". But if u want to check in prisma studio run "npx prisma studio" it will also show the users table in the prisma studio database.

7.2 Prisma doesn't give you a generic database client. Instead, it generates a type-safe client that knows your exact schema. So run "npx prisma generate" to generate the client.

7.3 creating a movie model

7.4 Creating a watch list model

7.5 creating an enum for WatchListStatus

7.6 creating relationships as the WatchList model both relates to Movie and User models. Cascade means delete the watchlist if the movie or user is deleted. During creating the user it shows error because we didn't create the Opposite relation field in the User model.

7.7 relate with the WatchList model as it is showing error

7.8

7.9

7.10 as there is a createdBy field which is also a relational data with user

7.11

7.12 now run "npx prisma migrate dev --name add_other_tables" and "npx prisma generate"

8.0 creating a authentication system (register) so create a authRoute.js file

8.0.1

8.0.2

8.1 created a controller folder with a authController.js file

8.2 created a register function

8.3 export the register function

8.4

8.5 Body parsing middlewares

8.6 for hashing password first install "npm i bcryptjs"
8.7 create user

8.8 save the data with the status code

9.0 creating a login function

9.1 creating login routes

10.0 add jwt secret in cookies during register and login. so to create the token run "npm i jsonwebtoken" then run in the terminal "openssl rand -base64 32" and save it in the env file

10.1 create a utils folder (for reusable function) and created reusable generateToken function and use it in register and login

10.2 get the token by call the generateToken function

10.3 send the token

10.4 get the token by call the generateToken function also in login

10.5 send the token

10.6 to securely set the jwt token is the HTTP only so pass the second parameter which is res

10.7 then set the cookie securely also run "npm install cookie-parser"

10.8 add the cookieParser

11.0 implementing manual logout

11.1 creating logut routes

12.0 my requirement is to seed my database with users and movies

12.1 to run the script add seeding script in package.json "seed:movies": "node prisma/seed/seed.js" then run in the terminal "npm run seed:movies"

13.0 My requirements is to create a watch list route so create a watchListRoute.js file and write the code like this

13.1 create a watchListController.js file in controller folder and write the code like this

13.2 use the watchListRoutes

13.3 adding a unique constraint to prevent duplicate entries in the watchlist for the same user and movie combination. This ensures that a user cannot add the same movie to their watchlist multiple times.

13.4 now run "npx prisma migrate dev --name add_constraints" and "npx prisma generate"

13.5 Check movies exist in the watchlist e.g Result: { id: "1", userId: "user-123", movieId: "movie-456", status: "PLANNED"}. isMovieInTheWatchlist = truthy → Movie already in watchlist → Block duplicate entry

13.6 If the movie is already in the watchlist, return an error response to prevent duplicate

13.7 If the movie is not in the watchlist

13.8 Now to Check pass the following data

14.0 created a middleware folder and make a authMiddleware.js file. Middleware in Express (and web frameworks in general) are functions that run between the incoming request and your route handler. They process the request before it reaches your controller.

14.1 read the token from the request

14.2 varify the token and extract the user id

14.3 use the middleware on specific protected route

14.4 Now from this stage using thunderclient first login or register with the user and then copy the token and paste it in the header of thunderclient http://localhost:5000/watchlist route "Key: Authorization Value: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ4ZWJhODA4LTQ0YWUtNGZkNC04ZTIzLWNkNGVhNmI4NDlmMCIsImlhdCI6MTc4MTEwMDIwNCwiZXhwIjoxNzgxNzA1MDA0fQ.fH8SanmV2dKlPMKTfv3KlcsSRPWsiB4urMMcK7DumWY". Now copy any "movieId": "01KTNGFVB9APHBQAAMRRF9ZHNW", "status": "PLANNED", "note": "Good", "rating": 9 and paste it in the body of thunderclient http://localhost:5000/watchlist route and send, the data will be saved in the watchlist in the database. But if u untick the Header from the thunderclient and send the same data, it will show error because the route is protected and we need to pass the token in the header to access the route.

15.0 my requirements is delete the movie from the watchlist

15.1 create the watchList delete route

16.0 my requirement is update the movie from the watchlist

16.1 create the route

<!-- todo: start tutorial pending zod validation from 2:11:00, github repo https://github.com/machadop1407/NodeJS-ExpressJS-BackendCourse -->
