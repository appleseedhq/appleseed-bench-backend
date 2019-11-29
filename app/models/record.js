const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Record schema
 */

const RecordSchema = new Schema({
  submissionDatetimeUtc: { type: Date },
  benchmarkVersion: { type: Number, min: 1, index: true },
  sceneId: { type: String, default: '', index: true },
  cpuManufacturerId: { type: String, default: '', index: true },
  cpuModel: { type: String, default: '', index: true },
  renderTime: { type: Number, index: true }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

RecordSchema.method({});

/**
 * Statics
 */

RecordSchema.static({});

/**
 * Register
 */

mongoose.model('Record', RecordSchema);
