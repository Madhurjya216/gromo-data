let express = require("express");
let app = express();
let cors = require("cors");
let bondyParser = require("body-parser");
let product = require("./products.json");
let category = require("./categories.json");
let port = process.env.PORT || 9500;

app.use(cors());


app.get("/", (req, res) => {
    res.send("Server working find");
})

app.get("/productdata", (req, res) => {
    res.send(product);
});

app.get("/categorydata", (req, res) => {
    res.send(category);
});


app.listen(port, () => {
    console.log(`server is running in:${port}`);
})