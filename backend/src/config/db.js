const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected successfully `);
    } catch (error) {
        console.error(`database not connect`, error.message);
    }
};

module.exports = connectDB;
