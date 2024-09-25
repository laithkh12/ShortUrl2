const mongoose = require('mongoose');
const shortId = require('shortid');

/**
 * @typedef ShortUrl
 * @type {Object}
 * @property {string} full - The original full URL that needs to be shortened.
 * @property {string} short - The generated short URL, which is unique for each entry.
 * @property {number} clicks - The number of times the short URL has been clicked.
 */

/**
 * Schema for storing short URLs in the database.
 * @type {mongoose.Schema}
 */
const shortUrlSchema = new mongoose.Schema({
    /**
     * The original full URL that needs to be shortened.
     * @type {String}
     * @required
     */
    full: {
        type: String,
        required: true,
    },
    /**
     * The generated short URL.
     * This field is automatically generated using the shortId library.
     * @type {String}
     * @required
     * @default shortId.generate
     */
    short: {
        type: String,
        required: true,
        default: shortId.generate
    },
    /**
     * The number of times the short URL has been clicked.
     * @type {Number}
     * @required
     * @default 0
     */
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
});

/**
 * Model for the ShortUrl schema.
 * @type {mongoose.Model<ShortUrl>}
 */
module.exports = mongoose.model('ShortUrl', shortUrlSchema);
