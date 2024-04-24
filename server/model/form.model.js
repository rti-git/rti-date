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
    }
});

const form = mongoose.model("rti", formSchema, "form");

export default form;
