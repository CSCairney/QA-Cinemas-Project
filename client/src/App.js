// import Discussion from "./component/discussion/discussionsMessages";
// import EmailForm from './component/contact/emailForm';
// import PaymentForm from './component/payment/payment';
import ListingPosters from "./component/listing/listingPosters";
import ListingTotal from "./component/listing/listingTotal";
import ListingLatest from "./component/listing/listingLatest";

function App() {
  return (
    <>
    <div style={{backgroundColor: '#333652'}}>
    <ListingLatest/>
    <ListingPosters/>
    <ListingTotal/> 
    {/* <Classification/> */}
    {/* <EmailForm/> */}
    {/* <PaymentForm/> */}
    {/* <Discussion/> */}
    {/* <GettingTherePage/> */}
    </div>
    </>
  );
}

export default App;
