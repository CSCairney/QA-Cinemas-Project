import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';
// import EmailForm from './component/contact/emailForm';
//import PaymentModal from './component/payment/paymentModal';
// import Discussion from './component/discussion/discussionsMessages';
// import BookingForm from './component/booking/bookings';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Search from './component/search/searchBar';

import './App.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>

    {/* <App /> */}
    {/* <EmailForm/>*/}
    {/*<PaymentModal/> */}
    {/* <Discussion/>*/}
    {/* <BookingForm/>  */}
    {/* <SearchBar/> */}
    <Search/>

    </>
  </React.StrictMode>
);


