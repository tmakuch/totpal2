module.exports = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="manifest" href="manifest.json" crossorigin="use-credentials" />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="mobile-web-app-capable" content="yes" />
    <title>Two of those are lying - article picker</title>
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
  </head>
  <body>
    <h2>Two of these people are lying.</h2>
    Now zh test
<!--    <form method="GET">-->
<!--      <input type="text" name="entry" autofocus>-->
<!--      &nbsp;-->
<!--      <input type="submit" value="add">-->
<!--    </form>-->
<!--    Added {data[req.game].length} articles-->
<!--    <p>-->
<!--      <a href="/{req.game}/pick">pick one</a>-->
<!--      <a onclick=" navigator.clipboard.writeText('{req.headers.host}/{-->
<!--          req.game-->
<!--      }')">copy game link</a>-->
<!--    </p>-->
<!--    <br>-->
<!--    <p><small><a href="https://www.youtube.com/watch?v=3yFEfOYTNoE">Learn the rules of the game</a></small></p>-->
  </body>
</html>`;