/* eslint-disable no-console */
'use strict';

require('dotenv').config();

const fs = require('fs');
const join = require('path').join;
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./config');

const models = join(__dirname, 'app/models');
const port = process.env.PORT || 3000;

const app = express();
const connection = connect();

/**
 * Expose
 */

module.exports = {
  app,
  connection,
};

// Bootstrap models
fs.readdirSync(models)
  .filter(file => ~file.indexOf('.js'))
  .forEach(file => require(join(models, file)));

// Bootstrap routes
require('./config/passport')(passport);
require('./config/express')(app, passport);
require('./config/routes')(app);

connection
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);

function listen() {
  if (app.get('env') === 'test') {
    return;
  }

  app.listen(port);

  console.log(`Express app started on port ${port}`);
  console.log(`Mongose status: ${mongoose.connection.readyState === 1 ? 'OK' : 'NOTOK'}`);
}

function connect() {
  var options = { keepAlive: 1, useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true };
  mongoose.connect(config.db, options);

  return mongoose.connection;
}
