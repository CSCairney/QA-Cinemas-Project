import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import'./bookings.css';
import Button from 'react-bootstrap/Button';

const BookingForm = () => {

    const [bookings, setBookings] = useState([]);
    const [bookingsMovieTitle, setBookingsMovieTitle] = useState([]);
    const [bookingsDate, setBookingsDate] = useState([]);
    const [bookingsTime, setBookingsTime] = useState([]);
    const [bookingsName, setBookingsName] = useState("");
    const [bookingsAdult, setBookingsAdult] = useState(0);
    const [bookingsChild, setBookingsChild] = useState(0);
    const [bookingsConcessions, setBookingsConcession] = useState([]);

    const api = axios.create({
        baseURL: 'localhost:3002/bookings'
    })

    useEffect(() => {
        const fetchBookingForm = async () => {
            try {
                const response = await api.get('/getAll');
                setBookings(response.data);
            } catch (err) {
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`);
                }
            }
        }

        fetchBookingForm();
    }, []);


    const createBooking = () => {
        api.post('/create', {movieTitle, date, time, name, adult, child}).then((response) => {
            console.log("Success - moving to seat allocation");
        });
    }

    return(
        <div className="booking-main">
            <div className="top">
                <form action="/action_page.php">
                    <label for="movie">Movie:</label>
                    <select name="movie" id="movie">
                    <option value="1">Prey</option>
                    <option value="2">Bullet Train</option>
                    <option value="3">Minions 2</option>
                    <option value="4">Another Round</option>
                    </select>
                    <label for="date">Date:</label>
                    <select name="date" id="date">
                    <option value="1">9 September</option>
                    <option value="2">10 September</option>
                    <option value="3">11 September</option>
                    <option value="4">12 September</option>
                    </select>
                    <label for="time">Time:</label>
                    <select name="time" id="time">
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
                    <input type="text" id="name" name="name" onChange={() => {(event) => {setBookingsName(event.target.value);}}}/><br/>
                    <label for="phone">Phone number:</label>
                    <input type="text" id="phone" name="phone" onChange={() => {(event) => {setPhone(event.target.value);}}}/><br/> 
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" onChange={() => {(event) => {setEmail(event.target.value);}}}/><br/>
                    <div className="seats">
                        <label for="adult">Adult seats:</label>
                        <input type="number" id="adult" name="adult" onChange={() => {(event) => {setBookingsAdult(event.target.value);}}}/>
                        <label for="child">Child seats:</label>
                        <input type="number" id="child" name="child" onChange={() => {(event) => {setBookingsChild(event.target.value);}}}/>
                    </div>
                </form>
            </div>
            <Button variant="warning" type="submit" value="Send" size="lg" onClick={createBooking}>Go to Seat Allocation</Button>
        </div>
    );
}

export default BookingForm;