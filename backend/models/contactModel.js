const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"User"
    },
    name: {
        type: String,
        required: [true, "Please enter the contact name"]
    },
    email: {
        type: String,
        required: [true, "Please enter the contact email address"]
    },
    phone: {
        type: String,
        required: [true, "Please enter the contact phone number"]
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("Contact", ContactSchema);