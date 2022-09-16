import React from "react";
import "./GettingThere.css"
import shop from './shopfront.jpeg'

const Directions = () => {
    return (
        <>
            <section class="about-us py-5 " id="about-us">
                <div class="container mt-5">
                    <div class="row">
                        <h1 class='Subtitle'>Getting There</h1> <hr />
                        <div className="title">
                            <div className="address">


                                <p className="addy">
                                    <h3 className="div-header"><strong> Address</strong></h3> <br /> <br />
                                    QA Cinema WhiteCity
                                    <br />
                                    We're located on Level 2, above the Food Court!
                                    <br />
                                    Westfield London
                                    <br />
                                    Ariel Way
                                    <br />
                                    London
                                    <br />
                                    W12 7GF
                                    <br />
                                    {/* <button type="button" className="contactbtn">Contact Us</button> */}
                                </p>



                                {/* <button type="button" className="contactbtn">Contact Us</button> */}

                            </div>
                            <div className="shop">
                                <img classNameName="shopimg" src={shop} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="directions">
                    <div className="location">
                        <h3>How to get here</h3>
                        <br />


                        <p>
                            We're located on Level 2, above the Food Court! <br /> <br />
                            <strong className="subheading">DIRECTIONS:</strong> <br />
                            <strong className="car"> By Car: </strong>
                            Located in Westfield London, Vue Westfield is easily accessible by
                            the M4, M40 and M25. <br />
                            <strong className="parking"> Parking:</strong> Once you reach the car park, Westfield's vehicle management
                            system will let you know whether a space is vacant (green light),
                            occupied (red light), exclusively for blue badge holders (blue
                            light) or parents with prams (orange light). And, for electric car
                            users, there have 30 charging points to help get you home
                            <h5 className="parking"> By Public Transport</h5> <br />
                            <strong className="parking">By Train: </strong> The nearest tube stations are Shepherd's Bush and White
                            City, both on the Central London, and Shepherd's Bush Market and
                            Wood Lane Station on the Hammersmith & City Line. All of these
                            stations are about a five minute walk away. <br />
                            <strong className="parking">By Bus: </strong>White City bus station is only about 70 metres from
                            Westfield London. Bus routes 31, 49, 148, 207, 228, 237, 260, 316,
                            607 and C1 all travel to the station. <br />
                        </p>
                    </div>
                </div>






            </section >

        </>
    )
}

export default Directions;