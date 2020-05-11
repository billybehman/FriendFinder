var express = require("express");

var app = express();

var htmleRouter = require("./app/routing/htmlRoutes");

var apiRouter = require("./app/routing/apiRoutes")

var PORT = process.env.PORT || 3000;



app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("app/public"));

app.use(htmleRouter)

app.use(apiRouter)




app.listen(PORT);