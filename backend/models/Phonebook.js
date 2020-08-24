const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let phoneSchema = new Schema({
    name: {
        type: String
    },
    mobileNo: {
        type: Number,
        required: true,
        validate: {
            validator: function(v) {
                return /^(?:\+88|01)?(?:\d{11}|\d{13})$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
    }
}, {
    collection: 'phonebook'
})

module.exports = mongoose.model('Phonebook', phoneSchema)