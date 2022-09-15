const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
const mongoose = require("mongoose");
chai.use(chaiHttp);
const app = require("../index.js");
const { Bookings } = require("../models/bookings.js");

describe("Testing functions in the bookings", function () {

    this.beforeAll(async () => {
        await mongoose.connection.close();
        await mongoose.connect('mongodb://127.0.0.1:27017/qacinematest', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(() => console.log("Connected to QACinema test database"))
            .catch(console.error);
    });

    let id;
    beforeEach((done) => {
        Bookings.deleteMany({})
            .then(() => {
                Bookings.create({
                    movieTitle: "Thor",
                    date: "2022-01-01T00:00:00.000Z",
                    time: "12",
                    name: "rob",
                    email: "rob@rob.com",
                    seats: "1"
                })
                    .then((result) => {
                        id = result._id;
                        done();
                    })
                    .catch((err) => console.error(err));
            })
            .catch((err) => console.error(err));
    });

    it("Should return all bookings with status 200", function (done) {
        chai.request(app).get("/bookings/getAll")
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.have.lengthOf.above(0);
                expect(res.body[0]).to.include({ movieTitle: "Thor" });
                done();
            });
    });

    it("Should return one booking by ID with status 200", function (done) {
        chai.request(app).get(`/bookings/getById/${id}`)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.include({ movieTitle: "Thor" });
                done();
            });
    });

    it("Should return error message when invalid ID is typed with status 404", function (done) {
        chai.request(app).get(`/bookings/getById/112233`)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(404);
                expect(res.body).to.include({ message: 'No booking with id: 112233' });
                done();
            });
    });

    it("Should create a new booking with status 201", function (done) {
        const requestBody = {
            movieTitle: "Thor 2",
            date: "2022-01-01T00:00:00.000Z",
            time: "12",
            name: "rob",
            email: "rob@rob.com",
            seats: "1"
        };
        chai.request(app).post("/bookings/create")
            .send(requestBody).end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.status).to.equal(201);
                chai.expect(res.body).to.include({ movieTitle: "Thor 2" });
                done();
            });
    });

    it("Should update the booking with a maching ID with status 201", function (done) {
        const requestBody = {
            movieTitle: "Thor 2",
            date: "2022-01-01T00:00:00.000Z",
            time: "12",
            name: "rob",
            email: "rob@rob.com",
            seats: "1"
        };
        chai.request(app).put(`/bookings/update/${id}`)
            .send(requestBody).end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.status).to.equal(201);
                chai.expect(res.body).to.include({ movieTitle: "Thor 2" });
                done();
            });

    });

    it("Should return error message when invalid id is typed when updating with status 404", function (done) {
        chai.request(app).put(`/bookings/update/112233`)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(404);
                expect(res.body).to.include({ message: 'No booking with id: 112233' });
                done();
            });
    });

    it("Should update the latest booking with status 201", function (done) {
        const requestBody = {
            movieTitle: "Thor 2",
            date: "2022-01-01T00:00:00.000Z",
            time: "12",
            name: "rob",
            email: "rob@rob.com",
            seats: "1"
        };
        chai.request(app).put(`/bookings/updateLast`)
            .send(requestBody).end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.status).to.equal(201);
                chai.expect(res.body).to.include({ movieTitle: "Thor 2" });
                done();
            });

    });

    it("Should delete booking from database with status 201", function (done) {
        chai.request(app).delete(`/bookings/delete/${id}`)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(201);
                expect(res.body).to.include({ message: "Booking deleted successfully!" });
                done();
            });
    });

    it("Should return error message when invalid ID is typed when deleting with status 404", function (done) {
        chai.request(app).delete(`/bookings/delete/112233`)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(404);
                expect(res.body).to.include({ message: 'No booking with id: 112233' });
                done();
            });
    });

});