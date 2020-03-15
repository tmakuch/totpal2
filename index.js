const express = require('express');
const app = express();

const data = {}

const styles = `
<style>
* {
    font-family: sans-serif;
    text-align: center;
    margin: 1em auto;
    padding: 0.5em;
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
    res.send(`${styles}
    <form method="GET">
        <input type="text" name="entry" autofocus><input type="submit" value="add">
    </form>
    <p>
        <a href="/${req.params.game}/pick">pick one</a>
    </p>
    `)

});
