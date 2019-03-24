const express = require('express');
const cfg = require('../config/default');

const app = express();


app.listen(cfg.server.port, () => {
    console.log("Server listening on " + cfg.server.port);
});