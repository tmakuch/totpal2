const express = require("express");
const indexHtml = require("./index.html.js");
const app = express();

const data = {};

app.listen(3000, err => {
    if (err) throw err;
    console.log(`> http://localhost:3000`);
});

app.use("/:game", (req, res, next) => {
    req.game = req.params.game.replace(/[^0-9]+/g, "");
    if (!data[req.game]) {
        data[req.game] = [];
    }
    next();
});

app.get("/", (req, res) => {
    res.redirect(
        `/${Math.random()
            .toFixed(5)
            .substring(2)}`
    );
});
app.get("/:game", (req, res) => {
    res.set("Content-Type", "text/html").send(indexHtml);
});
