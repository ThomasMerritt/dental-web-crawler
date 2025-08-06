import mongoose from 'mongoose';
import { config } from '../utils/config.js';

export const connect = async () => {
    try {
        await mongoose.connect(config.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1).then(() => {
            process.exit(1);
        })
    }
}