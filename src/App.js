const express = require("express");
const morgan = require("morgan")
const router = require('./routes')
const cors = require('cors')

const app = express();

app.use(morgan('dev'));
app.use(cors({
  origin: 'http://127.0.0.1:5500',
  exposedHeaders: 'Authorization'
}));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
app.use(router)

// Error catching endware.

module.exports = app;

