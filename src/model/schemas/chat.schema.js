import mongoose from 'mongoose';
const { Schema } = mongoose;

const chatSchema = new Schema({
    email: { type: String, required: true },
    type: { type: String, enum: ['usuario', 'sistema'], required: true },
    message: { type: String, required: true },
},
    {
        timestamps: true
    }
)

export default chatSchema;