/**
 * Expose
 */

module.exports = {
  db: process.env.MONGODB_URL || 'mongodb://localhost:27017/appleseed_bench_backend',
  apiKey: process.env.API_KEY || '',
};
