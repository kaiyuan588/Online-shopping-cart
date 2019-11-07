'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for sticky object.
 */
let StickySchema = new Schema({

    account: String,

    password: String,

    cart:[{
        name: String,
        price: Number
    }]
    
}, {
    versionKey: false
});

module.exports = mongoose.model('Stickies', StickySchema);