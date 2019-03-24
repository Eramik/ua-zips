const path = require('path');
const express = require('express');
const cfg = require('../config/default');

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(cfg.server.port, () => {
    console.log('Server listening on ' + cfg.server.port);
});