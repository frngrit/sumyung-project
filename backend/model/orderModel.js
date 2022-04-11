const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    order:{
        type: mongoose.Schema.Types.Array,
        required: [true, 'Please add order'],
    },
    slip:{
        type: mongoose.Schema.Types.String,
        required: [true, 'Please add slip payment'],
    },
    phonenumb:{
        type: mongoose.Schema.Types.String,
        required: [true, 'Please add slip phonenumber'],
    },
    contact:{
        type: mongoose.Schema.Types.String,
    },
    comment:{type: mongoose.Schema.Types.String,},
    location:{
        type: mongoose.Schema.Types.String,
        required: [true, 'Please add slip phonenumber'],
    },
    status:{
        type: mongoose.Schema.Types.String,
        default: 'pending',
    },
},{
    timestamps: true
})

module.exports = mongoose.model('Order', orderSchema)