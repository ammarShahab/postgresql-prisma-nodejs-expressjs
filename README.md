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

8.0 creating a authentication system so create a authRoute.js file

8.0.1

8.0.2

8.1 created a controller folder with a authController.js file

8.2 created a register function

8.3 export the register function

8.4

8.5 Body parsing middlewares

8.6 for hashing password first install "npm i bcrypt"

8.7 create user

8.8 save the data with the status code

<!-- todo: start tutorial from 1:14:10 -->
