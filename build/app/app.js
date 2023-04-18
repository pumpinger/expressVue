"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// Create a new express application instance
const app = express();
app.use('/static', express.static('./dist'));
app.get('/h', (req, res) => {
    res.send('Hello World2!');
});
app.get('/json', (req, res) => {
    res.json({ name: 'json' });
});
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
