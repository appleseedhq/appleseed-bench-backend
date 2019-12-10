/*!
 * Module dependencies.
 */

exports.index = function(req, res) {
  res.render('home/index', {
    title: 'Backend for appleseed.bench',
  });
};
