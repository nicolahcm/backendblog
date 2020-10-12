'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PostSchema = new Schema({
    title: {
        type: String,
        required: 'Kindly enter the title'
    },

    body: {
        type: String,
        required: 'Kindly enter the body'
    },

    Created_date: {
        type: Date,
        default: Date.now
    },

    public: {
        type: Boolean,
        default: true
    },

    featured: {
        type: Boolean,
        default: false
    },

});

module.exports = mongoose.model('Posts', PostSchema);