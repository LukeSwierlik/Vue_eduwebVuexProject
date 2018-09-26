const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use( cors() );
app.use( bodyParser.json() );
app.use( express.static("public") );

// === Endpoint for Users
app.get("/users", function(req, res) {
    res.json( require("./data/users.json") );
});

app.post("/login", function(req, res) {
    console.log("Otrzymałem dane: \n" + JSON.stringify(req.body, null, 4));

    res.json({
        token: Math.random().toString(16).slice(2)
    });
});


// === Endpoint for Product
app.get("/product", function(req, res) {
    res.json( require("./data/product.json") );
});

app.post("/order", function(req, res) {
    res.json({
        success: true
    });
});


// === Endpoint for Quiz
app.get("/questions", function(req, res) {
    const questions = require("./data/questions.json")
        .map(q => ({
            id: q.id,
            question: q.question,
            answers: q.answers
        }));

    res.json(questions);
});

app.post("/check", function(req, res) {
    const questions = require("./data/questions.json");
    const answers = req.body.answers;

    let result = questions.map(question => {
        const answer = answers[question.id];

        return {
            id: question.id,
            correct: answer === question.correct,
            question: question.question,
            yourAnswer: question.answers[answer],
            correctAnswer: question.answers[question.correct]
        };
    });

    res.json(result);
});


// === Endpoint for RegisterForm
const emails = [
    "jan@kowalski.pl",
    "piotr@nowak.com"
];

app.post("/email", function(req, res) {

    res.json({
        unique: !emails.includes(req.body.email)
    });
});

app.listen(3000, () => console.log("Serwer został uruchomiony pod adresem http://localhost:3000"));
