import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './payment.css';
import Button from 'react-bootstrap/Button';

const PaymentForm = () => {
  const paymentForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2boguwp', 'template_you5wxd', paymentForm.current, 'alnPun0mV80hIi1T_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div  id="paymentforms">
      <form ref={paymentForm} onSubmit={sendEmail}>
      <div class="mb-3">
      <label  class="form-label"/> Customer Details
      <input type="text" name="first_name" class="form-control" placeholder="FirstName" />
      <label  class="form-label"/>
      <input type="text" name="last_name" class="form-control" placeholder="LastName" />
      <label class="form-label"/>
      <input type="email" class="form-control"  name="user_email" placeholder="name@email.com"/>
      </div>
      <div class="mb-3">
      <label  class="form-label"/> Card Details
      <input type="number" name="card_number" class="form-control" placeholder="Card Number" />
      <label  class="form-label"/>
      <input type="number" name="security_code" class="form-control" placeholder="Security Code" />
      <label class="form-label"/>
      <input type="email" class="form-control"  name="user_email" placeholder="name@email.com"/>
      <label class="form-label"/>
      <div id = "expirey_date_div">
      <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select> 
      {/* <input type="number" class="form-control"  name="user_email" placeholder="name@email.com"/>
      <input type="number" class="form-control"  name="user_email" placeholder="name@email.com"/> */}
      </div>
      </div>
    
    
      {/* <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>     
       */}

      <Button variant="warning" type="submit" value="Send" size="lg">Pay</Button>
      </form>
    </div>
  );
};
export default PaymentForm;



