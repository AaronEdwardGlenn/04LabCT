const mongoose = require('mongoose'); 

const schema = new mongoose.Schema({
    Hemesphere: {
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

module.exports = mongoose.model('Oceans', schema); 