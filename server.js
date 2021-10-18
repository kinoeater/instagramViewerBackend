const express = require("express");
const app = express();
const dotenv = require("dotenv");
const routers = require("./routers/index");
const path = require("path");


// dontenv path
dotenv.config({
    path: "./config/env/config.env",
  });
  // define Port to be listened
  const PORT = process.env.PORT; // başka bir yerde 5000 portu uygun değise enviromental value ya göre değişir port number

  

//That's for to get the json objects from the body.json() or req.json()
// before that body parser was being used
app.use(express.json());

// Routes Middleware
app.use("/", routers);


app.listen(PORT, () => {
    console.log(`App started on ${PORT}: ${process.env.NODE_ENV}`);
  });
  