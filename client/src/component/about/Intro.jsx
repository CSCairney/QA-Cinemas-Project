import "./about.css"
import Button from 'react-bootstrap/Button';

const Intro = () => {
    return (
        <>
            <div className="row header">
                <div className="col-md-9">
                    <h1 className="title"> About Us </h1>
                    <hr />
                    <p>
                        Join us on our journey to be at the forefront of big screen entertainment! <br />
                        At QA Cinemas, we are determined to make your cinematic experiences extraordinary, from special offers to cutting edge techonology.
                    </p>
                    <p>
                        HOW WELL DID WE DO? <br />
                        During the development stage of the project, The Scrum framework was implemented to ensure client satisfaction and achieve aims and objectives. <br />


                    </p>
                    <p>
                        So what exactly is SCRUM? <br />
                        In a nutshell, Scrum requires a Scrum Master to foster an environment where:
                        <ul>
                            <li>A Product Owner orders the work for a complex problem into a Product Backlog.</li>
                            <li>The Scrum Team turns a selection of the work into an Increment of value during a Sprint.</li>
                            <li>The Scrum Team and its stakeholders inspect the results and adjust for the next Sprint.</li>
                            <li>Repeat</li> 
                            
                        </ul>
                        <div className= "button">
                        <a  href='https://www.scrum.org/' target="_blank" rel="noopener noreferrer"><center><Button variant="secondary">Find out more</Button></center></a>
                        </div>
                        
                        
                    </p>

               
                </div>
                <div className="col-md-3">
                    <br />
                </div>
                {/* <hr /> */}
            </div>
        </>
    );
};

export default Intro;