// dependencies
var express = require("express");

// express config
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// router 
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// listener
app.listen(PORT, function (){
    console.log("App listening in on PORT: " + PORT);
});