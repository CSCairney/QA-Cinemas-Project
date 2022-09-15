import { Component } from "react";

import abdi from './images/Abdi.png'
import Charles from './images/Charles.png'
import Luxshan from './images/Luxshan.jpeg'
import Mateusz from './images/matt.png'
import Alex from './images/Alex.png'
import Sanchay from './images/Sanchay.jpeg'
import "./DevTeam.css"


const DevTeam = () => {
  return (
    <>
      <section id="team" className="pb-5">
        <div className="container">
          <h5 className="section-title h1">OUR TEAM</h5>
          <div className="row">

            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="image-flip" >
                <div className="mainflip flip-0">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p><img className="Abdimg " src={abdi} alt="card image" /></p>
                        <h4 className="subhead">Abdi Osman</h4>
                        <p className="subhead">Product Owner</p>

                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Meet Abdi</h4>
                        <p className="card-text">I am a film enthusiast and have really enjoyed developing QA Cinemas with my fab dev team!
                          I will be monitoring the site's performance closely with my team and can't wait to hear some of your feedback!</p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="https://github.com/rizak97">
                              <i className="fa fa-github icons"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/abdirizak97">
                              <i className="fa fa-linkedin"></i>
                            </a>
                          </li>



                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="image-flip" >
                <div className="mainflip flip-0">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p><img className="Abdimg " src={Charles} alt="card image" /></p>
                        <h4 className="subhead">Charles Cairney</h4>
                        <p className="subhead">Scrum Master</p>

                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Meet Charles</h4>
                        <p className="card-text">I am a film enthusiast and have really enjoyed developing QA Cinemas with my fab dev team!
                          I will be monitoring the site's performance closely with my team and can't wait to hear some of your feedback!</p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="https://github.com/CSCairney">
                              <i className="fa fa-github"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/charlescairney/">
                              <i className="fa fa-linkedin"></i>
                            </a>
                          </li>



                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="image-flip" >
                <div className="mainflip flip-0">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p><img className="Abdimg " src={Luxshan} alt="card image" /></p>
                        <h4 className="subhead">Luxshan Puvan </h4>
                        <p className="subhead">Full Stack Developer</p>

                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Meet Luxshan</h4>
                        <p className="card-text">I am a film enthusiast and have really enjoyed developing QA Cinemas with my fab dev team!
                          I will be monitoring the site's performance closely with my team and can't wait to hear some of your feedback!</p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="https://github.com/LuxshanPuvanendrarajah">
                              <i className="fa fa-github"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/luxshanp/">
                              <i className="fa fa-linkedin"></i>
                            </a>
                          </li>



                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="image-flip" >
                <div className="mainflip flip-0">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p><img className="Abdimg " src={Mateusz} alt="card image" /></p>
                        <h4 className="subhead">Mateusz Kluska</h4>
                        <p className="subhead">Full Stack Developer</p>

                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Meet Mateusz</h4>
                        <p className="card-text">I am a film enthusiast and have really enjoyed developing QA Cinemas with my fab dev team!
                          I will be monitoring the site's performance closely with my team and can't wait to hear some of your feedback!</p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="https://github.com/MMkluska">
                              <i className="fa fa-github"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/mmkluska/">
                              <i className="fa fa-linkedin"></i>
                            </a>
                          </li>



                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="image-flip" >
                <div className="mainflip flip-0">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p><img className="Abdimg " src={Alex} alt="card image" /></p>
                        <h4 className="subhead">Alex Dinu</h4>
                        <p className="subhead">Full Stack Developer</p>

                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Meet Alex</h4>
                        <p className="card-text">I am a film enthusiast and have really enjoyed developing QA Cinemas with my fab dev team!
                          I will be monitoring the site's performance closely with my team and can't wait to hear some of your feedback!</p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="https://github.com/dnmihnea">
                              <i className="fa fa-github"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/mihnea-alexandru-dinu-140029153/">
                              <i className="fa fa-linkedin"></i>
                            </a>
                          </li>



                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="image-flip" >
                <div className="mainflip flip-0">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p><img className="Abdimg " src={Sanchay} alt="card image" /></p>
                        <h4 className="subhead">Sanchay Arudchelvam</h4>
                        <p className="subhead">Full Stack Developer</p>

                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Meet Sanchay</h4>
                        <p className="card-text">I am a film enthusiast and have really enjoyed developing QA Cinemas with my fab dev team!
                          I will be monitoring the site's performance closely with my team and can't wait to hear some of your feedback!</p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="https://github.com/sanchayarun">
                              <i className="fa fa-github"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/sanchayan-arudchelvam/">
                              <i className="fa fa-linkedin"></i>
                            </a>
                          </li>



                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>


    </>)
};
export default DevTeam;
