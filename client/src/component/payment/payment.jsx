import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
import './payment.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const PaymentForm = () => {
  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[email, setEmail] = useState("");
  const[cardNumber, setCardNumber] = useState("");
  const[securityCode, setSecurityCode] = useState("");
  const[expiryDate, setExpiryDate] = useState("");
  
  
  const paymentForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

      const payment = {
        firstName: firstName,
        lastName: lastName,
        cardNumber: cardNumber,
        expiryDate: expiryDate,
        securityCode: securityCode
      }
      console.log(payment);
      axios.post('http://localhost:3002/payments/create', payment)
      .then(() => {
          console.log("New payment added")
      });



    // emailjs.sendForm('service_2boguwp', 'template_you5wxd', paymentForm.current, 'alnPun0mV80hIi1T_')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  };

  return (
    <div  id="paymentforms">
      <form ref={paymentForm} onSubmit={sendEmail}>
      <div className="mb-3">
      <label  className="form-label"/> Customer Details
      <input type="text" name="first_name" className="form-control" placeholder="FirstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      <label  className="form-label"/>
      <input type="text" name="last_name" className="form-control" placeholder="LastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
      <label className="form-label"/>
      <input type="email" className="form-control"  name="user_email" placeholder="username@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className="mb-3">
      <label  className="form-label"/> Card Details
      <input type="text" name="card_number" className="form-control" placeholder="Card Number" pattern="[0-9]{16}" minLength={16} maxLength={16} value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
      <label  className="form-label"/>
      <input type="text" name="security_code" className="form-control" placeholder="Security Code" pattern="[0-9]{3}" minLength={3} maxLength={3} value={securityCode} onChange={(e) => setSecurityCode(e.target.value)} />
      <label className="form-label"/>
      <div id = "expirey_date_div">
      <label  className="form-label"/> 
      <input type="date" name="expiry_month" className="form-control" placeholder="mm/dd/yyyy" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)}/>
      </div>
      </div>


      <Button variant="warning" type="submit" value="Send" size="lg">Pay</Button>
      {/* <button className="close-modal" onClick={toggleModal}>
              Go Back
            </button> */}
      </form>
    </div>
  );
};
export default PaymentForm;



