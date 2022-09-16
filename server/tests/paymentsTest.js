const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
const mongoose = require("mongoose");
chai.use(chaiHttp);
const app = require("../index.js");
const { Payments } = require("../models/payments.js");

describe("Testing functions in the payments", function () {

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
        Payments.deleteMany({})
            .then(() => {
                Payments.create({
                    totalAmount : 10,
                    firstName: "Bob",
                    lastName: "Bobson",
                    cardNumber: 12345,
                    expiryMonth: 01,
                    expiryYear: 2022,
                    securityCode: 123
                })
                    .then((result) => {
                        id = result._id;
                        done();
                    })
                    .catch((err) => console.error(err));
            })
            .catch((err) => console.error(err));
    });

    it("Should return all payments with status 200", function (done) {
        chai.request(app).get("/payments/getAll")
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.have.lengthOf.above(0);
                expect(res.body[0]).to.include({ firstName: "Bob" });
                done();
            });
    });

    it("Should return one payment by ID with status 200", function (done) {
        chai.request(app).get(`/payments/getById/${id}`)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.include({ firstName: "Bob" });
                done();
            });
    });

    it("Should return error message when invalid ID is typed with status 404", function (done) {
        chai.request(app).get(`/payments/getById/112233`)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(404);
                expect(res.body).to.include({ message: 'No payment with id: 112233' });
                done();
            });
    });

    it("Should create a new payment with status 201", function (done) {
        const requestBody = {
            totalAmount : 10,
            firstName: "Rob",
            lastName: "Bobson",
            cardNumber: 12345,
            expiryMonth: 01,
            expiryYear: 2022,
            securityCode: 123
        };
        chai.request(app).post("/payments/create")
            .send(requestBody).end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.status).to.equal(201);
                chai.expect(res.body).to.include({ firstName: "Rob" });
                done();
            });
    });

    it("Should update the payment with a maching ID with status 201", function (done) {
        const requestBody = {
            totalAmount : 10,
            firstName: "Rob",
            lastName: "Bobson",
            cardNumber: 12345,
            expiryMonth: 01,
            expiryYear: 2022,
            securityCode: 123
        };
        chai.request(app).put(`/payments/update/${id}`)
            .send(requestBody).end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.status).to.equal(201);
                chai.expect(res.body).to.include({ firstName: "Rob" });
                done();
            });

    });

    it("Should return error message when invalid id is typed when updating with status 404", function (done) {
        chai.request(app).put(`/payments/update/112233`)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(404);
                expect(res.body).to.include({ message: 'No payment with id: 112233' });
                done();
            });
    });

    it("Should update the latest booking with status 201", function (done) {
        const requestBody = {
            totalAmount : 10,
            firstName: "Rob",
            lastName: "Bobson",
            cardNumber: 12345,
            expiryMonth: 01,
            expiryYear: 2022,
            securityCode: 123
        };
        chai.request(app).put(`/payments/updateLast`)
            .send(requestBody).end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.status).to.equal(201);
                chai.expect(res.body).to.include({ firstName: "Rob" });
                done();
            });

    });

    it("Should delete payment from database with status 201", function (done) {
        chai.request(app).delete(`/payments/delete/${id}`)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(201);
                expect(res.body).to.include({ message: "Payment deleted successfully!" });
                done();
            });
    });

    it("Should return error message when invalid ID is typed when deleting with status 404", function (done) {
        chai.request(app).delete(`/payments/delete/112233`)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(404);
                expect(res.body).to.include({ message: 'No payment with id: 112233' });
                done();
            });
    });

});