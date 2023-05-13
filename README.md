# BackendAdventures
Welcome to my ExpressMongoBackend repository! This is where I document my journey in learning backend development using Express.js and MongoDB.


# Setup: Installing MongoDB and Express.js

## MongoDB Installation Steps:

1. Visit the MongoDB website (`https://www.mongodb.com`) and navigate to the Downloads page.
2. Select the appropriate version of MongoDB for your operating system and download the installer.
3. Run the downloaded installer and follow the installation wizard's instructions.
4. During the installation process, choose the desired installation directory and ensure that the "Install MongoDB Compass" option is selected if you want to install the MongoDB GUI tool.
5. Complete the installation by clicking "Next" or "Finish" as prompted.
6. After installation, add the MongoDB bin directory to your system's PATH environment variable to access MongoDB from the command line.
7. To verify the installation, open a terminal/command prompt and run the command `mongo --version`. You should see the MongoDB version information if the installation was successful.

## Express.js Installation Steps:

1. Open a terminal or command prompt.
2. Create a new directory for your Express.js project: `mkdir my-express-project`
3. Navigate into the project directory: `cd my-express-project`
4. Initialize a new Node.js project: `npm init -y`
5. Install Express.js as a dependency: `npm install express`
6. Create a new file named `app.js` or `index.js` in your project directory.
7. Open the created file in a text editor and add the following code to set up a basic Express.js server:

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
