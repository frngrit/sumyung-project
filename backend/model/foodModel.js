const mongoose = require('mongoose')
const FoodSchema = mongoose.Schema({
    samyung:{
        type: String,
        required: true
    },
    bacon:{
        type: String,
        required: true
    },
    cheeseball:{
        type: String,
        required: true
    },
    isOpen:{
        type: Boolean,
        required: true
    },
    username:{
        type: String,
    },
    password:{
        type: String,
    },
},{
    timestamps: true
})

module.exports = mongoose.model('Foods', FoodSchema)