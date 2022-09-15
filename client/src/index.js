import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';
// import EmailForm from './component/contact/emailForm';
// import PaymentModal from './component/payment/paymentModal';
// import Discussion from './component/discussion/discussionsMessages';
// import BookingForm from './component/booking/bookings';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import SearchBar from './component/search/search';
// import Search from './component/search/searchBar';
// import Posts from './component/search/searchbar';
import './App.css';
import TotalAmount from './component/payment/paymentAmount';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    {/* <App /> */}
    {/* <PaymentModal/> */}
    <TotalAmount/>
    </>
  </React.StrictMode>
);


