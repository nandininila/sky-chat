const mongoose = require('mongoose');

mongoose.set('strictQuery', false); // for warning

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch (error) {
        console.error(`error: ${error.message}`);
        process.exit();
    }
};

module.exports = connectDB;