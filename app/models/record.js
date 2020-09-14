const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Record schema
 */

const RecordSchema = new Schema(
  {
    submissionDateTimeUtc: { type: Date, required: true },
    benchmarkVersion: { type: Number, required: true, index: true, min: 1 },
    benchmarkSceneId: { type: String, required: true, index: true },
    cpuModel: { type: String, required: true, index: true },
    cpuCoreCount: { type: Number, required: true, index: true },
    cpuThreadCount: { type: Number, required: true, index: true },
    renderThreadCount: { type: Number, required: true, index: true },
    operatingSystem: { type: String, required: true, index: true },
    renderTime: { type: Number, required: true },
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
