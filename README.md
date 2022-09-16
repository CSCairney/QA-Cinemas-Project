<!-- LOGO -->
<br />
<h1>
<p align="center">
  <img src="https://i.imgur.com/F0yLPXY.jpeg" alt="Logo" width="360" height="220">
  <br>
</h1>

# <p align="center">QA Cinema Project<p>

  A project that connects a front-end HTML page made with REACT to a back-end MongoDB database, using Express framework to create custom API.  
  
<b>App is hosted at [homepage](https://qacinemafront.nw.r.appspot.com/) using Google Cloud Platform</b>

## User stories and Sprints 

* [Jira](https://cscairney.atlassian.net/jira/software/projects/QCP/boards/7/roadmap) - Agile Project Management

## Prerequisites

* [Java](https://www.java.com/) - Programming Language 
* [Node.js](https://nodejs.org/en/) - Build Tool 
* [MongoDB](https://www.mongodb.com/) - Database 

## Installing

1. Fork this repository
2. Clone forked repository to your local device
3. Open a comand prompt/git bash 
4. Navigate to ./server location
5. Type ```npm i```, this will install server dependencies
6. Navigate to ./client location
7. Type ```npm i```, this will install client dependencies
8. To deploy production build type ```npm run build```

### Getting Started

1. Launch a project in comand prompt/git bash or in your local IDE 
2. Type ```npm start``` to run application
3. This will launch your local browser

  <img src="https://i.imgur.com/ACEF2uG.jpeg" alt="Movies screening" >
  <img src="https://i.imgur.com/tzDZrgj.jpeg" alt="Movies screening" > 


## Running the tests

1. Open your comand prompt/git bash 
2. Navigate to ./server location
3. To run tests type ```npm run test```
4. To check test coverage type ```npm run coverage```

### Integration Testing

Integration testing is the phase in software testing in which individual software modules are combined and tested as a group. Integration testing is conducted to evaluate the compliance of a system or component with specified functional requirements.

```
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
```

## Built With

* [Jira](https://mmkluska.atlassian.net/jira/software/projects/IMS/boards/2) - Agile Project Management
* [Node.js](https://nodejs.org/en/) - Build Tool

## Versioning

We use [GitHub](https://github.com/) for versioning.

## Authors

* **Charles Cairney - Scrum Master** - [CSCairney](https://github.com/CSCairneyg)
* **Abdirizak Osman - Project Owner** - [Rizak97](https://github.com/Rizak97/)
* **Sanchayan Arudchelvam** - [sanchayarun](https://github.com/sanchayarun/)
* **Alex Dinu** - [dnmihnea](https://github.com/dnmihnea/)
* **Luxshan Puvanendrarajah** - [LuxshanPuvanendrarajah](https://github.com/LuxshanPuvanendrarajah/)
* **Mateusz Kluska** - [MMkluska](https://github.com/MMkluska/)

## License

This project is licensed under the MIT license - see the [LICENSE.md](LICENSE.md) file for details 

*For help in [Choosing a license](https://choosealicense.com/)*

## Acknowledgments

* Many thanks to tutors at QA Academy
* Google search engine 
* Stack Overflow
