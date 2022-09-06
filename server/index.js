const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


// Connection to the database
mongoose.connect('mongodb://127.0.0.1:27017/qacinema', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to movie Directory"))
.catch(console.error);

// Listening to the port
const server = app.listen(3002, () => console.log(`The server has been activated on ${server.address().port}`));