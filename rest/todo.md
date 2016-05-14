REST client with email + pwd authN

TODO Server
- Provide auth/APP_NAME/login method to login with email + pwd
	1. Client: Enter your email and password into the login form.
 	2. Client: On form submit call $auth.login() with email and password.
 	3. Client: Send a POST request to /auth/login.
 	4. Server: Check if email exists, if not - return 401.
 	5. Server: Check if password is correct, if not - return 401.
	6. Server: Create a JSON Web Token and send it back to the client.
	7. Client: Parse the token and save it to Local Storage for subsequent use after page reload.
- Provide auth/APP_NAME/create_user endpoint to create a new user (with email and pwd), which are stored on the server
- Create a [JSON web token](https://jwt.io/#debugger) and return it to the client: `npm install jsonwebtoken`
- Provide api/APP_NAME/filename GET to read the database.json file
- Provide api/APP_NAME/filename UPDATE to update the database.json file. Requires valid JSON Web Token
	- See https://www.npmjs.com/package/express-jwt


TODO Client
- Use Aurelia-Auth (https://github.com/paulvanbladel/aurelia-auth) client to login with username and pwd
- Use Aurelia-API (https://github.com/SpoonX/aurelia-api) as a simple replacement for the fetch client?
- Convert the pwd using a one-directional hash (also for creating it)
- Provide access to the edit function
- Allow the user to update the database.json file, supplying the JSON web token in the update request
- 


Server implementation
- Create node+express service
- Create config.json file
	- secret: string
	- apps:	
		- APP_NAME:
			- users:
				- email
				- hashed pwd
				- role: string
			- folders:
				- path: string
				- create: string[] with roles that are allowed to create (if empty, anyone is allowed)
				- read: roles that are allowed to read
				- update
				- delete
- Server load config.json to create endpoints using express