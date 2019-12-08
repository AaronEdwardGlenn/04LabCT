const mongoose = require('mongoose'); 

const schema = new mongoose.Schema({
    Elevation: {
        type: Number, 
        required: true
    },
    Flora: {
        type: String, 
        required: true
    },
    Fauna: {
        type: String, 
        required: true
    },
    Examples: {
        type: String, 
        required: true
    }
});

module.exports = mongoose.model('Mountains', schema); 
