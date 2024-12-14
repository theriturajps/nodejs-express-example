# Node.js Express Example

This repository contains a basic example of an Express application for beginners. It provides the fundamental structure and files you need to get started with Node.js and Express quickly. You can download or clone this folder and start working with it right away.

## Features
- A basic Express setup with routes
- Example of serving static files
- Simple middleware to log requests
- A sample GET route to test the server

## Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/en/) (version 14 or higher)

### Installation

1. **Clone or Download** this repository to your local machine:

   ```bash
   git clone https://github.com/theriturajps/nodejs-express-example.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd nodejs-express-example
   ```

3. **Install dependencies**:

   Run the following command to install the required npm packages:

   ```bash
   npm install
   ```

4. **Start the server**:

   After installation, start the Express server by running:

   ```bash
   npm start
   ```

   This will start the server on `http://localhost:3000`.

### Testing

- Open your browser and go to `http://localhost:3000` to see the application in action.
- You should see a simple message like `"Welcome to the Express Example!"`.

## Folder Structure

```
nodejs-express-example/
├── node_modules/   
├── public/      
│└── index.html
├── src/
│├── routes/     
││	└── routeController.js
│├── controllers/
││	└── indexRoutes.js
│└── app.js          
├── package.json   
├── server.js 
└── README.md       
```

## Next Steps

Once you've got the basic Express app running, you can start:

- Adding more routes and route handlers
- Handling POST requests with `express.json()`
- Use middleware to manage user authentication
- Connecting the app to a database like MongoDB

## License

This project is open-source and available under the [MIT License](LICENSE).