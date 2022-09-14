const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
const { default: mongoose } = require("mongoose");
chai.use(chaiHttp);
const app = require("../index.js");
const { Movies } = require("../models/movies.js");

describe("Testing functions in the movies", function () {

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
        Movies.deleteMany({})
            .then(() => {
                Movies.create({
                    title: "Thor",
                    release_date: "2011-01-01T00:00:00.000Z",
                    directors: ["Kenneth Branagh"],
                    actors: ["Chris Hemsworth"],
                    showingDates: ["01"],
                    showingTimes: ["12"],
                    duration: "114",
                    rating: "U"
                })
                    .then((result) => {
                        id = result._id;
                        done();
                    })
                    .catch((err) => console.error(err));
            })
            .catch((err) => console.error(err));
    });

    it("Should return all movies with status 200", function (done) {
        chai.request(app).get("/movies/getAll")
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.have.lengthOf.above(0);
                expect(res.body[0]).to.include({ title: "Thor" });
                done();
            });
    });

    it("Should return one movie by ID with status 200", function (done) {
        chai.request(app).get(`/movies/getById/${id}`)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.include({ title: "Thor" });
                done();
            });
    });

    it("Should return error message when invalid ID is typed with status 404", function (done) {
        chai.request(app).get(`/movies/getById/112233`)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(404);
                expect(res.body).to.include({ message: 'No movie with id: 112233' });
                done();
            });
    });

    it("Should return one movie by title with status 200", function (done) {
        chai.request(app).get('/movies/getByTitle/Thor')
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.include({ title: "Thor" });
                done();
            });
    });

    it("Should return error message when invalid title is typed with status 404", function (done) {
        chai.request(app).get(`/movies/getByTitle/112233`)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(404);
                expect(res.body).to.include({ message: 'No movie with title: 112233' });
                done();
            });
    });

    it("Should return one movie query with status 200", function (done) {
        chai.request(app).get('/movies/getByQuery/t')
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body[0]).to.include({ title: "Thor" });
                done();
            });
    });

    it("Should return error message when no maching results are found  with status 404", function (done) {
        chai.request(app).get(`/movies/getByQuery/112233`)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(404);
                expect(res.body).to.include({ message: 'No document in movies collection containing: 112233' });
                done();
            });
    });

    it("Should return last movie added with status 200", function (done) {
        chai.request(app).get('/movies/getByLatest/1')
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body[0]).to.include({ title: "Thor" });
                done();
            });
    });

    it("Should create a new movie with status 201", function (done) {
        const requestBody = {
            title: "Thor 2",
            release_date: "2013-01-01T00:00:00.000Z",
            directors: ["Alan Taylor"],
            actors: ["Chris Hemsworth"],
            showingDates: ["01"],
            showingTimes: ["12"],
            duration: "112",
            rating: "U"
        };
        chai.request(app).post("/movies/create")
            .send(requestBody).end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.status).to.equal(201);
                chai.expect(res.body).to.include({ title: "Thor 2" });
                done();
            });
    });

    it("Should update the movie with a maching ID with status 201", function (done) {
        const requestBody = {
            title: "Thor 2",
            release_date: "2013-01-01T00:00:00.000Z",
            directors: ["Alan Taylor"],
            actors: ["Chris Hemsworth"],
            showingDates: ["01"],
            showingTimes: ["12"],
            duration: "112",
            rating: "U"
        };
        chai.request(app).put(`/movies/update/${id}`)
            .send(requestBody).end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.status).to.equal(201);
                chai.expect(res.body).to.include({ title: "Thor 2" });
                done();
            });

    });

    it("Should return error message when invalid ID is typed when updating with status 404", function (done) {
        chai.request(app).put(`/movies/update/112233`)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(404);
                expect(res.body).to.include({ message: 'No movie with id: 112233' });
                done();
            });
    });

    it("Should delete movie from database with status 201", function (done) {
        chai.request(app).delete(`/movies/delete/${id}`)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(201);
                expect(res.body).to.include({ message: "Movie deleted successfully!" });
                done();
            });
    });

    it("Should return error message when invalid ID is typed when deleting with status 404", function (done) {
        chai.request(app).delete(`/movies/delete/112233`)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(404);
                expect(res.body).to.include({ message: 'No movie with id: 112233' });
                done();
            });
    });

});