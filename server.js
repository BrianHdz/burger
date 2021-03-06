const express = require("express");
var PORT = process.env.PORT || 3000;
// var burger = require("./models/burger.js");
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
// ***************Add the css file here later**********
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Importing routes to server.
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
