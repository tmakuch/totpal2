const express = require('express');
const app = express();

const data = {}

const styles = `
<style>
@import url('https://fonts.googleapis.com/css?family=Crafty+Girls&display=swap');
* {
    font-family: 'Crafty Girls', cursive;
    font-size: 15pt;
    text-align: center;
    margin: 1em auto;
    padding: 0.5em;
    color:#333;
}
input, a {
    background: #fff;
    border: 1px solid #555;
    text-decoration: none;
    cursor: pointer;
}
</style>
`

app.listen(3000, err => {
    if (err) throw err
    console.log(`> Ready On Server http://localhost:3000`)
});

app.use('/:game', (req, res, next) => {
    if (!data[req.params.game]) {
        data[req.params.game] = []
    }
    next()
})
app.get('/', (req, res) => {
    res.redirect(`/${Math.random().toFixed(5).substring(2)}`);
});
app.get('/:game/pick', (req, res) => {
    const result = data[req.params.game][Math.floor(Math.random() * data[req.params.game].length)]
    res.send(`${styles}<h1>${result}</h1><a href="/">new</a><a href="/${req.params.game}">back</a>`)
})
app.get('/:game', (req, res) => {
    if (req.query.entry) {
        data[req.params.game].push(req.query.entry);
        return res.redirect(`/${req.params.game}`);
    }
    res.send(`
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TOTPAL</title>
        ${styles}
    </head>
    <h2>Two of these people are lying.</h2>
    <form method="GET">
        <input type="text" name="entry" autofocus>
        <br>
        <input type="submit" value="add">
    </form>
    <p>
        <a href="/${req.params.game}/pick">pick one</a>
    </p>
    `)

});
