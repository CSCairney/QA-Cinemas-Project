import React from "react";
import {TiTickOutline} from "react-icons/ti";
import "./paymentConfirmation.css"

const Confirmation = () => {

    return(

            <div className="paymentConfirmation">
                <div className="pcContainer">
                    <h1 className="pcIcon"><TiTickOutline size={60}/></h1>
                    <br />
                    <h3>Payment Confirmed</h3>
                    <p>Your payment details have been sent for processing. It should be credited in your account within 2-3 days</p>
                    <br />
                    <br />
                    <h4>Please use the above NavBar to continue browsing or close the window to exit.</h4>
                </div>
            </div>

    );
}

export default Confirmation;