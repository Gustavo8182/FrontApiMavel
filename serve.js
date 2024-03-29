const express = require('express');
const path = require('path');
const app = express();
const nomeApp ="front-api-marvel";

app.use(express.static(`${__dirname}/dist/${nomeApp}`));

app.get('/*', (req, res) =>
    res.sendFile(path.join(`${__dirname}/dist/${nomeApp}/index.html`)),
);

app.listen(process.env.PORT || 8080);
