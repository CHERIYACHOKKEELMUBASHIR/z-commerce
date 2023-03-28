import mongoose from "mongoose";

const model = mongoose.model;
const schema = mongoose.Schema;

const productSchema = new schema({
    productname:String,
    description: {
        type: String
    },
    price: Number,
    category:String,
    imgToUrl:String,
    status: String
});

export default model('Product', productSchema);