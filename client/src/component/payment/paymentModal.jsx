import React, { useState } from "react";
import PaymentForm from "./payment"


export default function PaymentModal({payAmount}) {
  const [toggle, setToggle] = useState(false);
  
  // Toggle function to show and hide the payment form
  const toggleModal = () => {
    setToggle(!toggle);
    
  };

 

  return (
    <>
      <button variant="success" type="button" id="modalButton" onClick={toggleModal} className="btn btn-success">
        Proceed to payment
      </button>

       {toggle &&
          <> 
            <PaymentForm handleClick = {toggleModal} payAmount = {payAmount}/>
           
         </>
      }
      
    </>
  );
}