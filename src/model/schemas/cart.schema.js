import mongoose from 'mongoose';
const { Schema } = mongoose;

export default new Schema({
    email: { type: String, required: true },
    products: { type: Array, required: true },
    total: { type: Number, required: true },
},
    {
        timestamps: true
    }
)