import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    mesg: {
        type: String
    },
    religiousPlace: {
        type: String
    },
    phone: {
        type: Number
    },
    birthdate: {
        type: Date
    },
    location: {
        type: String
    },
    area: {
        type: String
    },
});

const form = mongoose.model("rti", formSchema, "form");

export default form;
