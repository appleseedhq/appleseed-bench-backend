const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Record schema
 */

const RecordSchema = new Schema(
  {
    submissionDateTimeUtc: { type: Date },
    benchmarkVersion: { type: Number, min: 1 },
    benchmarkSceneId: { type: String },
    cpuModel: { type: String },
    renderTime: { type: Number },
  },
  {
    versionKey: false,
  },
);

RecordSchema.index({ benchmarkVersion: 1, benchmarkSceneId: 1, cpuModel: 1 });

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
