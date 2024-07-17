const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require("cors");
const { connectDB } = require('./db');
connectDB();

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRouter = require('./routes/user.route');

app.use('/user', userRouter);

http.listen(4000, function () {
    console.log('listening on *:4000');
})