
const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const EventSchema = new Schema({
    sport: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    eventdetail: {
        type: String,
        required: true
    },
    runners: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const EventModel = mongoose.model('event', EventSchema); 
module.exports = EventModel;