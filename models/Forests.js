const mongoose = require('mongoose'); 

const schema = new mongoose.schema({
    Climate: {
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

module.exports = mongoose.model('Forests', schema); 