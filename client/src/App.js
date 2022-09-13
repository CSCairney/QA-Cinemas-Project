// import Discussion from "./component/discussion/discussionsMessages";
// import EmailForm from './component/contact/emailForm';
// import PaymentForm from './component/payment/payment';
import ListingPosters from "./component/listing/listingPosters";
import ListingTotal from "./component/listing/listingTotal";

function App() {
  return (
    <>
    <div style={{backgroundColor: '#333652'}}>
    {/* <Discussion/> */}
    <ListingPosters />
    <ListingTotal />
    </div>
    </>
  );
}

export default App;
