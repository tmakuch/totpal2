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
small * {
    font-size: 0.8em;
    border: none;
}
</style>
`

const head = `
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${styles}
    </head>
`

app.listen(3000, err => {
    if (err) throw err
    console.log(`> http://localhost:3000`)
});

app.use('/:game', (req, res, next) => {
    req.game = req.params.game.replace(/[^0-9]+/g,'')
    if (!data[req.game]) {
        data[req.game] = []
    }
    next()
})

app.get('/', (req, res) => {
    res.redirect(`/${Math.random().toFixed(5).substring(2)}`);
});
app.get('/:game/pick', (req, res) => {
    const result = data[req.game][Math.floor(Math.random() * data[req.game].length)]
    res.send(`${head}<h1>${result}</h1><a href="/${req.game}?clear=y">clear</a>&nbsp;<a href="/${req.game}">back</a>`)
})
app.get('/:game', (req, res) => {
    if (req.query.entry) {
        data[req.game].push(req.query.entry);
        return res.redirect(`/${req.game}`);
    }
    if (req.query.clear) {
        data[req.game]=[]
        return res.redirect(`/${req.game}`);
    }
    res.send(`
    ${head}
    <h2>Two of these people are lying.</h2>
    <form method="GET">
    <input type="text" name="entry" autofocus>
    &nbsp;
    <input type="submit" value="add">
    </form>
    Added ${ data[req.game].length } articles
    <p>
    <a href="/${req.game}/pick">pick one</a>
    <a onclick=" navigator.clipboard.writeText('${req.headers.host}/${req.game}')">copy game link</a>
    </p>
    <br>
    <p><small><a href="https://www.youtube.com/watch?v=3yFEfOYTNoE">Learn the rules of the game</a></small></p>
    `)

});
