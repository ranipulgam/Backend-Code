const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: String,
    location: String,
    date: Date
});

module.exports = mongoose.model('Event', eventSchema);
