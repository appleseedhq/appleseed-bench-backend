module.exports = function exports(config) {
  this.APIKeyChecker = (request, response, next) => {
    if (request.query.apiKey === config.apiKey || request.body.apiKey === config.apiKey) {
      return next();
    }

    response.sendStatus(401);
    return false;
  };
};
