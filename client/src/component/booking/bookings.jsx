import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import'./bookings.css';
import Button from 'react-bootstrap/Button';


const BookingForm = () => {

    const[movies, setMovies] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [bookingsMovieTitle, setBookingsMovieTitle] = useState([]);
    const [bookingsDate, setBookingsDate] = useState([]);
    const [bookingsTime, setBookingsTime] = useState([]);
    const [bookingsName, setBookingsName] = useState("");
    const [bookingsEmail, setBookingsEmail] = useState("");
    const [bookingsPhone, setBookingsPhone] = useState("");
    const [bookingsAdult, setBookingsAdult] = useState(0);
    const [bookingsChild, setBookingsChild] = useState(0);
    const [bookingsConcessions, setBookingsConcession] = useState([]);

    const addBooking = (e) =>{
        e.preventDefault()
        const booking = {
            movieTitle: bookingsMovieTitle,
            date: "2019",
            time: "5pm",
            name: bookingsName,
            email: bookingsEmail,
            phone: bookingsPhone,
            seats: "5",
            adult: bookingsAdult,
            child: bookingsChild,
            concessions: bookingsConcessions

        }
        console.log(booking)
        axios.post('http://localhost:3002/bookings/create', booking
        ).then(()=>{
            console.log("Booking created - moving to seat allocation")
            
        })
    }

    useEffect(() => {

        axios.get('http://localhost:3002/bookings/getAll')
            .then((result) => {
                setBookings(result.data);
            })


    }, [])

    useEffect(() => {

        axios.get('http://localhost:3002/movies/getAll')
            .then((result) => {
                setMovies(result.data);
            })


    }, [])
    
    return(
        <div className="booking-main">
            <div className="top">
                <form action="/action_page.php">
                    <label for="movie">Movie:</label> 
                    <select id="movie" onChange={(e) => setBookingsMovieTitle(e.target.value)}>
                            <option value="selectMovie">Please Select Movie</option>
                            {movies.map((movie) => <option value={movie.title}>{movie.title}</option>)}
                    </select>
                    <label for="date">Date:</label>
                    <select name="date" id="date" onChange={(e) => setBookingsDate(e.target.value)}>
                        <option value="1">9 September</option>
                        <option value="2">10 September</option>
                        <option value="3">11 September</option>
                        <option value="4">12 September</option>
                    </select>
                    <label for="time">Time:</label>
                    <select name="time" id="time" onChange={(e) => setBookingsTime(e.target.value)}>
                        <option value="1">12:00 p.m.</option>
                        <option value="2">1:00 p.m.</option>
                        <option value="3">2:00 p.m.</option>
                        <option value="4">3:00 p.m.</option>
                    </select>
                </form>
            </div>
            <div className="mid">
                <form action="/action_page.php">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" onChange={(e) => setBookingsName(e.target.value)}/><br/>
                    <label for="phone">Phone number:</label>
                    <input type="text" id="phone" name="phone" onChange={(e) => setBookingsPhone(e.target.value)}/><br/> 
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" onChange={(e) => setBookingsEmail(e.target.value)}/><br/>
                    <div className="seats">
                        <label for="adult">Adult seats:</label>
                        <input type="number" id="adult" name="adult" onChange={(e) => setBookingsAdult(e.target.value)}/>
                        <label for="child">Child seats:</label>
                        <input type="number" id="child" name="child" onChange={(e) => setBookingsChild(e.target.value)}/>
                    </div>
                </form>
            </div>
            <Button variant="warning" type="submit" value="Send" size="lg" onClick={addBooking}>Go to Seat Allocation</Button>
        </div>
    );
}

export default BookingForm;