const express = require('express');
const connectDB = require('./config/db');
// const cors = require('cors');
require('dotenv').config();
const { chats } = require("./data/data"); // fakeDate
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

// middleware
app.use(express.json()); //to accept JSON data

// middleware
// app.use(cors());

// not use cors on client site(frontend), write down proxy server on package.json before dependencies
//"proxy": "http://127.0.0.1:5000",

// for invalid route send a proper message
app.use(notFound);
app.use(errorHandler);




app.get('/', (req, res) => {
    res.send(`API is running on PORT ${PORT}`)
});

app.use('/api/user', userRoutes)

















app.listen(PORT, console.log(`Server Started on PORT ${PORT}`));