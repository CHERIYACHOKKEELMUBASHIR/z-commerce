import mongoose from "mongoose";

const model = mongoose.model;
const schema = mongoose.Schema;

const userSchema = new schema({
    name: {
        type: String
    },
    type: String,
    password: String
});

export default model('User', userSchema);