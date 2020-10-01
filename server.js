const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const { join } = require("path");
const herokuProxy = require('heroku-proxy');

const app = express();

const port = process.env.SERVER_PORT || 3000;

app.use(morgan("dev"));
app.use(helmet());
app.use(express.static(join(__dirname, "build")));
app.use(herokuProxy({
  hostname: 'localhost',
  port    : 3000,
  prefix  : 'heroku-api',
  protocol: 'http'
}));

app.listen(port, () => console.log(`Server listening on port ${port}`));
