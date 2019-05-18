// start with requiring express and path
var express = require("express");
var path = require("path");
// express app
var app = express();
var PORT = process.env.PORT || 3000;
//using express app
app.use = (express.urlencoded({
    extended: true
}));
app.use(express.json());
// require the routes(make sure your path and names are right)
//require("./routes/apiRoutes")(app);
//require("./routes/htmlRoutes")(app);


// listener
app.listen(PORT,function(){
    console.log("App listening on PORT:  " + PORT);
});
