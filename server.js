const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
// shows colors in console
const morgan = require('morgan');
// morgan for logging
const connectDB = require('./config/db');
const path = require('path');

dotenv.config({ path: './config/config.env' });

connectDB();

const transactions = require('./routes/transactions')

const app = express()

app.use(express.json());
app.use(express.static('./client/build'))

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));

}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})



app.use('/api/v1/transactions', transactions)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold))