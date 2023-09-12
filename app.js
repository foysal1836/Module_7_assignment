// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const validator = require('validator');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
}));
app.use(mongoSanitize());

// Undefined route handler
app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Not found' });
});

module.exports = app;
