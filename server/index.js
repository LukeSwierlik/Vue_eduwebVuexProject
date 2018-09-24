const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use( cors() );
app.use( bodyParser.json() );
app.use( express.static("public") );

// Endpoint for Users
app.get("/users", function(req, res) {

    res.json( require("./data/users.json") );

});

app.post("/login", function(req, res) {

    console.log("Otrzymałem dane: \n" + JSON.stringify(req.body, null, 4));

    res.json({
        token: Math.random().toString(16).slice(2)
    });

});


// Endpoint for Product
app.get("/product", function(req, res) {

    res.json( require("./data/product.json") );

});

app.post("/order", function(req, res) {

    res.json({
        success: true
    });

});

app.listen(3000, () => console.log("Serwer został uruchomiony pod adresem http://localhost:3000"));
