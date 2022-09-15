import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from "./Pages/contactus";
import Cinemanavbar from "./component/Cinemanavbar/cinemanavbar";
import Home from './Pages/home';
import NowShowing from './Pages/nowshowing';
import UpComing from './Pages/upcoming';
import './App.css'
import MovieRating from './Pages/movierating';
import BookingPage from './Pages/booking';
import DiscussionPage from './Pages/discussion';
import VisitingPage from './Pages/placestovisit';
import TravelBus from './Pages/bus';
import TravelTrain from './Pages/train';
import TravelCar from './Pages/car';
import AddressPage from './Pages/address';
import AboutUs from './Pages/aboutus';
import SearchBar from './Pages/searchbarpage';
import SearchBarPage from './Pages/searchbarpage';


function App() {
  return (
    <>
    <div style={{backgroundColor: '#6699CC'}}>
    <Router>
      <Cinemanavbar/>
      <Routes>
        <Route path="/Home" element= {<Home/>}/>
        <Route path="/NowShowing" element= {<NowShowing/>} />
        <Route path="/Upcoming" element= {<UpComing/>} />
        <Route path="/MovieRating" element= {<MovieRating/>} />
        <Route path="/Booking" element= {<BookingPage/>} />
        <Route path="/Discussion" element= {<DiscussionPage/>} />
        <Route path="/Visit" element= {<VisitingPage/>} />
        <Route path="/Bus" element= {<TravelBus/>} />
        <Route path="/Train" element= {<TravelTrain/>} />
        <Route path="/Car" element= {<TravelCar/>} />
        <Route path="/EmailForm" element= {<ContactUs/>} />
        <Route path="/Address" element= {<AddressPage/>} />
        <Route path="/AboutUs" element= {<AboutUs/>} />
        <Route path="/Search" element={<SearchBarPage/>}/>
        
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
