import mongoose from 'mongoose';
const { Schema } = mongoose;

const cartSchema = new Schema({
    email: { type: String, required: true },
    products: { type: Array, required: true },
    total: { type: Number, required: true }
},
    {
        timestamps: true
    }
)

export default cartSchema;