import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
    image: { type: String, required: true },
    price: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true }
})

export default productSchema;