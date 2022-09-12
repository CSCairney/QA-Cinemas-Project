import React, { useState } from "react";
import PaymentForm from "./payment"
import "./paymentModal.jsx";

export default function Modal() {
  const [toggle, setToggle] = useState(false);

  const toggleModal = () => {
    setToggle(!toggle);
  };

  if(toggle) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Proceed to payment
      </button>

       {toggle &&
          <> 
            <PaymentForm handleClick = {toggleModal}/>
           
         </>
      }
      
    </>
  );
}