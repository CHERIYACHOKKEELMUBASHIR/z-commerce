import mongoose from "mongoose";

const model = mongoose.model;
const schema = mongoose.Schema;

const cartSchema = new schema({
    name:String,
    gstprice:Number,
    totalprice: Number,
    price: Number,
    discount:Number,
    discription:String,    
});

export default model('Cart', cartSchema);