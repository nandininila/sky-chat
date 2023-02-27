const express = require('express');
// const cors = require('cors');
require('dotenv').config();
const { chats } = require("./data/data"); // fakeDate

const app = express()
const PORT = process.env.PORT || 5000;

// middleware
// app.use(cors());

// not use cors on client site(frontend), write down proxy server on package.json before dependencies
//"proxy": "http://127.0.0.1:5000",


app.get('/', (req, res) => {
    res.send(`API is running on PORT ${PORT}`)
});

app.get('/api/chat', (req, res) => {
    res.send(chats);
});

//by id
app.get('/api/chat/:id', (req, res) => {
    // console.log(req.params.id);
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
});


app.listen(PORT, console.log(`Server Started on PORT ${PORT}`));