import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
import './payment.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const PaymentForm = ({handleClick, payAmount}) => {
  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[email, setEmail] = useState("");
  const[cardNumber, setCardNumber] = useState("");
  const[securityCode, setSecurityCode] = useState("");
  const[expiryMonth, setExpiryMonth] = useState("");
  const[expiryYear, setExpiryYear] = useState("");
  
  
  
  const paymentForm = useRef();

  console.log(payAmount);


  let navigate = useNavigate();
  const routeChange = () =>{
    let path = `/PaymentConfirmationPage`;
    navigate(path);
  };

  
  const sendEmail = (e) => {
    e.preventDefault();

      const payment = {
        firstName: firstName,
        lastName: lastName,
        cardNumber: cardNumber,
        expiryMonth: expiryMonth,
        expiryYear: expiryYear,
        securityCode: securityCode,
        totalAmount: payAmount
      }
      console.log(payment);
      axios.post('https://qacinema-362612.ey.r.appspot.com/payments/create', payment)
      .then(() => {
          console.log("New payment added")
      }).catch((error) => {
        console.log(error.message)
    })

    document.getElementById('confirm-btn').setAttribute('style', 'display:inline !important');
    document.getElementById('pay-btn').style.display = "none";

    // emailjs.sendForm('service_2boguwp', 'template_you5wxd', paymentForm.current, 'alnPun0mV80hIi1T_')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  };

  return (
    <div id="payment-modal">
    <div id="payment-overlay"></div>
    
    
    <div  id="paymentform-div">
      <form id="paymentform" ref={paymentForm} onSubmit={sendEmail}>
        <div className="mb-3">
        <label  className="form-label"/> Amount to Pay
        <h3>&nbsp;£{payAmount}</h3>
        </div>
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
      
      <div id = "expirydate-div">
        <label  className="form-label"/> Expiry Month: &nbsp; &nbsp;

        <select multiple={false} id="ratingSelectValue" onChange={(e) => setExpiryMonth(e.target.value)}>
                            <option>Select</option>
                            <option value="01">Jan</option>
                            <option value="02">Feb</option>
                            <option value="03">Mar</option>
                            <option value="04">Apr</option>
                            <option value="05">May</option>
                            <option value="06">Jun</option>
                            <option value="07">Jul</option>
                            <option value="08">Aug</option>
                            <option value="09">Sep</option>
                            <option value="10">Oct</option>
                            <option value="11">Nov</option>
                            <option value="12">Dec</option>
        </select>

       <label  className="form-label"/> Expiry Year: &nbsp; &nbsp;

        <select multiple={false} id="ratingSelectValue" onChange={(e) => setExpiryYear(e.target.value)}>
                            <option>Select</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                            <option value="2031">2031</option>
                            <option value="2032">2032</option>
                            <option value="2033">2033</option>
                            <option value="2034">2034</option>
                            <option value="2035">2035</option>
                            <option value="2036">2036</option>
                            <option value="2037">2037</option>
                            <option value="2038">2038</option>
                            <option value="2039">2039</option>
                            <option value="2040">2040</option>
                            <option value="2041">2041</option>
                            <option value="2042">2042</option>   
        </select>
      </div>
      </div>


      <Button id="pay-btn" variant="success" type="submit" value="Send" size="lg">Pay</Button>
      <Button id="confirm-btn" variant="warning" type="submit" value="Send" size="lg" onClick={routeChange}>Confirm</Button>
      <Button className="close-btn" variant="danger"  value="Send" size="lg" onClick={handleClick}>X</Button>
    
      </form>
      
    </div>
    </div>
  );
};
export default PaymentForm;



