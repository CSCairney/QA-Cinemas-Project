const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//Routers imports
const moviesRouter = require('./routes/moviesRouter.js');
const paymentsRouter = require('./routes/paymentsRouter.js');
const bookingsRouter = require('./routes/bookingsRouter.js');
const discussionsRouter = require('./routes/discussionsRouter.js');

//Default paths for routers
app.use('/movies', moviesRouter);
app.use('/payments', paymentsRouter);
app.use('/bookings', bookingsRouter);
app.use('/discussions', discussionsRouter);

// Connection to the database
mongoose.connect('mongodb+srv://Admin:Admin1234@cluster0.syjcvks.mongodb.net/?retryWrites=true', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to QACinema database"))
    .catch(console.error);

// Listening to the port
const server = app.listen(3002, () =>
    console.log(`The server has been activated on ${server.address().port}`));

module.exports = app;
    