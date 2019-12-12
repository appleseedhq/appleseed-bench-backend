const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Record schema
 */

const RecordSchema = new Schema(
  {
    submissionDateTimeUtc: { type: Date },
    benchmarkVersion: { type: Number, min: 1, index: true },
    benchmarkSceneId: { type: String, index: true },
    cpuModel: { type: String, index: true },
    cpuCoreCount: { type: Number, index: true },
    cpuThreadCount: { type: Number, index: true },
    renderThreadCount: { type: Number, index: true },
    operatingSystem: { type: String, index: true },
    renderTime: { type: Number },
  },
  {
    versionKey: false,
  },
);

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
