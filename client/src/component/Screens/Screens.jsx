import React from "react";
import "./Screens.css"

import sound from '../Screens/images/sound.jpeg';
import speakers from '../Screens/images/speakers.jpeg';
import kids from '../Screens/images/kids.jpeg';
import sseating from '../Screens/images/sseating.png';
import recliner from '../Screens/images/recliner.jpeg';
import deluxe from '../Screens/images/dseating.jpeg';



const Screens = () => {
    return (
        <>
            <section className="pt-5 pb-5">
                <div className="container row ">

                    <div className="standard">
                        <h3 className="mb-3 standardScreen">Standard screen </h3>

                        <p className="header-s"> A full bown big screen experience, come along and explore the incredible features of our standard screens
                        </p>
                    </div>

                    <div className="col-12">

                        <div className="row">

                            <div className="col-md-4 mb-3 mcard">
                                <div className="card" >
                                    <img className="img" alt="100%x280" src={sseating} />
                                    <div className="card-body">
                                        <h4 className="card-title highlight">Seating plan</h4>
                                        <p className="card-text">Huge screens that draw you in to action until you're part of the film <br />

                                        </p>

                                    </div>

                                </div>
                            </div>
                            <div class="col-md-4 mb-3 mcard">
                                <div className="card">
                                    <img className="img" alt="100%x280" src={kids} />
                                    <div className="card-body">
                                        <h4 className="card-title highlight">Picture perfect</h4>
                                        <p className="card-text">We believe the best entertainment deserves the best quality picture. That’s why all our screens are equipped with Sony 4K digital projectors</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3 mcard">
                                <div className="card">
                                    <img className="imgc" alt="100%x280" src={sound} />
                                    <div className="card-body">
                                        <h4 className="card-title highlight sound ">Incredible sound</h4>
                                        <p className="card-text">The best entertainment the best sound! Our Dolby Atmos, surround sound system places you in the centre of the sound, making the action and drama more realistic than ever</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="Deluxe">
                        <h3 className="mb-3 deluxeScreen">Deluxe screen</h3>
                        <p className="header-d"> Turn your film in to a special occasion! Our VIP package designed to transform your ordinary visit to EXTRA!
                            The big screen, the epic sound, the comfy seats, perfect for impressing your date or adding a magic touch to birthdays and big nights out!
                        </p>
                    </div>

                    <div className="col-12">

                        <div className="row">

                            <div className="col-md-4 mb-3 mcard">
                                <div className="card">
                                    <img className="img" alt="100%x280" src={deluxe} />
                                    <div className="card-body ">
                                        <h4 className="card-title highlight">Seating plan</h4>
                                        <p className="card-text">The Recliner is your ticket to the ultimate big screen experience. Sit down and relax as padded leather forms around you. Now, put your feet up and recline back with a touch of a button</p>

                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4 mb-3 mcard">
                                <div className="card">
                                    <img className="imge" alt="100%x280" src={recliner} />
                                    <div className="card-body">
                                        <h4 className="card-title highlight deluxx">Picture perfect</h4>
                                        <p className="card-text deluxpic">We believe the best entertainment deserves the best quality picture. That’s why all our screens are equipped with Sony 4K digital projectors</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3 mcard">
                                <div className="card">
                                    <img className="img" alt="100%x280" src={speakers} />
                                    <div className="card-body">
                                        <h4 className="card-title highlight">Perfect sound</h4>
                                        <p className="card-text">The best entertainment deserves the best sound! Our Dolby Atmos, surround sound system places you in the centre of the sound, making the action and drama more realistic than ever</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>




                </div>



            </section >
        </>
    )
};

export default Screens;