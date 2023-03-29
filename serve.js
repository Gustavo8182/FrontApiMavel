//Install express server
const express = require('express');
const path = require('path');
const app = express();
const nomeApp = process.env.npm_package_name;

// Serve only the static files form the dist directory
app.use(express.static(`${__dirname}/dist/${nomeApp}`));

app.get('/*', (req, res) =>
    res.sendFile(path.join(`${__dirname}/dist/${nomeApp}/index.html`)),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
