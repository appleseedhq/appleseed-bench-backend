'use strict';

/**
 * Module dependencies.
 */

const home = require('../app/controllers/home');

module.exports = function(app, _passport, mongoose) {
  const Record = mongoose.model('Record');

  app.get('/', home.index);

  app.get('/record', async (_request, response) => {
    try {
      var result = await Record.find().exec();
      response.send(result);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.post('/record', async (request, response) => {
    try {
      const record = Record(request.body);
      const result = await record.save();

      response.send(result);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  /**
   * Error handling
   */

  app.use(function(err, req, res, next) {
    // treat as 404
    if (
      err.message &&
      (~err.message.indexOf('not found') ||
        ~err.message.indexOf('Cast to ObjectId failed'))
    ) {
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
      error: 'Not found'
    });
  });
};
