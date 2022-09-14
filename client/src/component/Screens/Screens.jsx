import React from "react";

import sound from '../Screens/images/sound.jpeg';
import speakers from '../Screens/images/speakers.jpeg';
import kids from '../Screens/images/kids.jpeg';

import recliner from '../Screens/images/recliner.jpeg';
import picture from '../Screens/images/4k.webp';



const Screens = () => {
    return (
        <>
            <section className="pt-5 pb-5">
                <div className="container row ">

                    <div className="standard">
                        <h3 className="mb-3">Standard screen </h3>
                        <p> A full bown big screen experience, come along and explore the incredible features of our standard screens
                        </p>
                    </div>

                    <div className="col-12">

                        <div className="row">

                            <div className="col-md-4 mb-3 card">
                                <div className="card" >
                                    <img className="img-fluid" alt="100%x280" src={kids} />
                                    <div className="card-body">
                                        <h4 className="card-title">Huge screens</h4>
                                        <p className="card-text">Huge screens that draw you in to action until you're part of the film</p>

                                    </div>

                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div className="card">
                                    <img className="img-fluid" alt="100%x280" src={picture} />
                                    <div className="card-body">
                                        <h4 className="card-title">Picture perfect</h4>
                                        <p className="card-text">We believe the best entertainment deserves the best quality picture. That’s why all our screens are equipped with Sony 4K digital projectors</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <img className="img-fluid" alt="100%x280" src={sound} />
                                    <div className="card-body">
                                        <h4 className="card-title">Incredible sound</h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="Deluxe">
                        <h3 className="mb-3">Deluxe screen</h3>
                        <p> Turn your film in to a special occasion! Our VIP package designed to transform your ordinary visit to EXTRA!
                            The big screen, the epic sound, the comfy seats, perfect for impressing your date or adding a magic touch to birthdays and big nights out!
                        </p>
                    </div>

                    <div className="col-12">

                        <div className="row">

                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <img className="img-fluid" alt="100%x280" src={recliner} />
                                    <div className="card-body">
                                        <h4 className="card-title">Recliner seats</h4>
                                        <p className="card-text">The Recliner is your ticket to the ultimate big screen experience. Sit down and relax as padded leather forms around you. Now, put your feet up and recline back with a touch of a button</p>

                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <img className="img-fluid" alt="100%x280" src={picture} />
                                    <div className="card-body">
                                        <h4 className="card-title">Picture perfect</h4>
                                        <p className="card-text">We believe the best entertainment deserves the best quality picture. That’s why all our screens are equipped with Sony 4K digital projectors</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <img className="img-fluid" alt="100%x280" src={speakers} />
                                    <div className="card-body">
                                        <h4 className="card-title">Perfect sound</h4>
                                        <p className="card-text">The best entertainment deserves the best sound! Our deluxe sound system places you in the centre of the sound, making the action and drama more realistic than ever</p>

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