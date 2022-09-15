import React, { useState } from "react";
import PaymentModal from "./paymentModal";

export default function TotalAmount(){

//set a const with the total amount calculated with the other states then send it through to the modal
const[one, setOne] = useState(10.12);
const[two, setTwo] = useState(10.12);
const[three, setThree] = useState(10.12);




const amount = one + two + three;





    return (

        <PaymentModal payAmount = {amount} />
    )


}