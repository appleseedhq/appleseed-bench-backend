'use strict';

const home = require('../app/controllers/home');
const record = require('../app/controllers/record');

const Utils = require('./utils');

module.exports = function(app, config) {
  const utils = new Utils(config);

  app.get('/', home.index);

  app.get('/results', utils.APIKeyChecker, record.list);
  app.post('/submit', utils.APIKeyChecker, record.create);

  /**
   * Error handling
   */

  app.use(function(err, req, res, next) {
    // treat as 404
    if (err.message && (~err.message.indexOf('not found') || ~err.message.indexOf('Cast to ObjectId failed'))) {
      return next();
    }
    console.error(err.stack);
    // error page
    res.status(500).render('500', { error: err.stack });
  });

  // assume 404 since no middleware responded
  app.use(function(req, res) {
    res.status(404).render('404', {
      url: req.originalUrl,
      error: 'Not found',
    });
  });
};
