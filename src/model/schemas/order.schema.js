import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderSchema = new Schema({
    email: { type: String, required: true },
    products: { type: Array, required: true },
    total: { type: Number, required: true },
    status: { type: String, default: 'generada' },
    orderNumber: { type: Number, required: true }
},
    {
        timestamps: true
    }
)

export default orderSchema;