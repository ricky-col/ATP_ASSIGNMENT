# Now we will start Week 3
# Rest API's in MERN Stack
## Representational State Transfer (REST) is the most popular way to define API's now a days.
* REST is an architectural style for designing networked applications.
* It relies on a stateless, client-server, cacheable communications protocol -- and in virtually

## REST API Endpoints
### usr format 
- http://api.example.com/resources/
- http://api.example.com/resources/id
* Base URL: http://api.example.com/
* Resource: resources/
* Resource ID: id
* Endpoing path: /resources/id

## REST ENDPOINTS rules
* 1. Use Nouns to represent resources (not verbs)
- Example:
    - GET /users (correct)
    - POST /users (correct)
    - GET /getUsers (incorrect)
    - POST /createUser (incorrect)
* 2. use plural nouns for resource names
- Example:
    - GET /users (correct)
    - POST /users (correct)
    - GET /user (incorrect)
    - POST /user (incorrect)
* 3. Use Lowercase letters
- Example:
    - GET /users (correct)
    - POST /users-profiles (correct)
    - GET /Users (incorrect)
    - POST /Users (incorrect)
    - GET /USERS (incorrect)
* 4. Use hyphens (-) to improve readability
- Example:
    - GET /users-profiles (correct)
    - GET /users_profiles (incorrect)
    - GET /usersprofiles (incorrect)

## to automate the restarting of server use nodemon
- npm install -g nodemon
- nodemon server.js

## most important status codes
* 200 OK: The request was successful, and the server returned the requested data.
* 201 Created: The request was successful, and a new resource was created..
* 400 Bad Request: The server could not understand the request due to invalid syntax.
* 401 Unauthorized: The client must authenticate itself to get the requested response.
* 403 Forbidden: The client does not have access rights to the content.

## Middleware in Express.js
* Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
* Middleware functions can perform the following tasks:
- Execute any code.
- Make changes to the request and response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.
* If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
