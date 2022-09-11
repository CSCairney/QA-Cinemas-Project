import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import EmailForm from './component/contact/emailForm';
import PaymentForm from './component/payment/payment';
import Discussion from './component/discussion/discussionsMessages';
import BookingForm from './component/booking/bookings';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    {/* <App /> */}
    {/* <EmailForm/>*/}
    <PaymentForm/> 
    <Discussion/>
    <BookingForm/>
    </>
  </React.StrictMode>
);


