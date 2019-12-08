const mongoose = require('mongoose'); 

const schema = new mongoose.Schema({
    Location: {
        type: String, 
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
    Name: {
        type: String, 
        required: true
    }

});

module.exports = mongoose.model('Lakes', schema); 