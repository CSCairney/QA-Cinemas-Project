

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from "./Pages/contactus";
import Cinemanavbar from "./component/Cinemanavbar/cinemanavbar";
import './App.css'

function App() {
  return (
    <Router>
      <Cinemanavbar/>
      <Routes>
        <Route path="/ContactUs" element= {<ContactUs/>} />
      </Routes>
    </Router>
  );
}

export default App;
