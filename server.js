const express = require("express");
const mongoose = require("mongoose");
const exh = require("express-handlebars");

const PORT = process.env.PORT || 3000;
const app = express();

let routes = require("./routes");
app.use(routes);

app.engine("handlebars", exh({
    defaultLayout: "main"
}))
app.set("view engine", "handlebars")

app.use(express.json());
app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});