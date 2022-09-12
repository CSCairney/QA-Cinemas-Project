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
      <button variant="success" type="button" onClick={toggleModal} className="btn btn-success">
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