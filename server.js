/* eslint-disable no-console */
const express = require('express');

const app = express();

// Import Routes

const dotenv = require('dotenv');
const morgan = require('morgan');
// const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const postRoute = require('./routes/post');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');

const docsRoute = require('./routes/docs');
const connectDB = require('./config/db');

dotenv.config();

// Norgan
app.use(morgan('tiny'));

// Connect to DB
connectDB();

const port = process.env.PORT || 8000;

// Middleware
// app.use(express.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
// app.use(cors());
// Route middlewares
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/v1', docsRoute);
app.use('/api/post', postRoute);
// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app.listen(port, () => console.log('Server up and running'));
