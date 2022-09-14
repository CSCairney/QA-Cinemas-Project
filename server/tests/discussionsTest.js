const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
const mongoose = require("mongoose");
chai.use(chaiHttp);
const app = require("../index.js");
const { Discussions } = require("../models/discussions.js");

describe("Testing functions in the discussions", function () {

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
        Discussions.deleteMany({})
            .then(() => {
                Discussions.create({
                    username: "Bob",
                    subjectMovie: "Thor",
                    rating: "1",
                    message: "test"
                })
                    .then((result) => {
                        id = result._id;
                        done();
                    })
                    .catch((err) => console.error(err));
            })
            .catch((err) => console.error(err));
    });

    it("Should return all discussions with status 200", function (done) {
        chai.request(app).get("/discussions/getAll")
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.have.lengthOf.above(0);
                expect(res.body[0]).to.include({ username: "Bob" });
                done();
            });
    });

    it("Should return one discussion by ID with status 200", function (done) {
        chai.request(app).get(`/discussions/getById/${id}`)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.include({ username: "Bob" });
                done();
            });
    });

    it("Should return error message when invalid ID is typed with status 404", function (done) {
        chai.request(app).get(`/discussions/getById/112233`)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(404);
                expect(res.body).to.include({ message: 'No discussion with id: 112233' });
                done();
            });
    });

    it("Should return one discussion by title with status 200", function (done) {
        chai.request(app).get('/discussions/getByUser/Bob')
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.include({ username: "Bob" });
                done();
            });
    });

    it("Should return error message when invalid title is typed with status 404", function (done) {
        chai.request(app).get(`/discussions/getByUser/112233`)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(404);
                expect(res.body).to.include({ message: 'No user with name: 112233' });
                done();
            });
    });

    it("Should create a new discussion with status 201", function (done) {
        const requestBody = {
            username: "Rob",
            subjectMovie: "Thor",
            rating: "1",
            message: "test"
        };
        chai.request(app).post("/discussions/create")
            .send(requestBody).end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.status).to.equal(201);
                chai.expect(res.body).to.include({ username: "Rob" });
                done();
            });
    });

    it("Should update the discussion with a maching ID with status 201", function (done) {
        const requestBody = {
            username: "Rob",
            subjectMovie: "Thor",
            rating: "1",
            message: "test"
        };
        chai.request(app).put(`/discussions/update/${id}`)
            .send(requestBody).end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.status).to.equal(201);
                chai.expect(res.body).to.include({ username: "Rob" });
                done();
            });

    });

    it("Should return error message when invalid id is typed when updating with status 404", function (done) {
        chai.request(app).put(`/discussions/update/112233`)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(404);
                expect(res.body).to.include({ message: 'No discussion with id: 112233' });
                done();
            });
    });

    it("Should delete discussion from database with status 201", function (done) {
        chai.request(app).delete(`/discussions/delete/${id}`)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(201);
                expect(res.body).to.include({ message: "Discussion deleted successfully!" });
                done();
            });
    });

    it("Should return error message when invalid ID is typed when deleting with status 404", function (done) {
        chai.request(app).delete(`/discussions/delete/112233`)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(404);
                expect(res.body).to.include({ message: 'No discussion with id: 112233' });
                done();
            });
    });

});