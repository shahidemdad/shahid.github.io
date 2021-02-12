const express = require('express');
const game = require('./data/game');
const port = 5000;
const app = express();

app.get('/game',(req, res )=> {
    // console.log('requesting game');
    res.json(game);
});


app.listen(port, () => console.log(`Listening on port ${port}`));
