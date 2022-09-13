import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import'./bookings.css';
import Button from 'react-bootstrap/Button';

const BookingForm = () => {

    const[movies, setMovies] = useState([]);
    const[moviesShowingDates, setMoviesShowingDates] = useState([]);
    const[moviesShowingTimes, setMoviesShowingTimes] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [bookingsMovieTitle, setBookingsMovieTitle] = useState([]);
    const [bookingsDate, setBookingsDate] = useState([]);
    const [bookingsTime, setBookingsTime] = useState([]);
    const [bookingsName, setBookingsName] = useState("");
    const [bookingsEmail, setBookingsEmail] = useState("");
    const [bookingsPhone, setBookingsPhone] = useState("");
    const [bookingsAdult, setBookingsAdult] = useState(0);
    const [bookingsChild, setBookingsChild] = useState(0);
    const [concessions, setConcessions] = useState([]);
    const [popcornFlavour, setPopcornFlavour] = useState("Sweet");
    const [popcornAmount, setPopcornAmount] = useState(0);
    const [popcornSize, setPopcornSize] = useState("Small");
    const [nachosFlavour, setNachosFlavour] = useState("Cheesy");
    const [nachosSize, setNachosSize] = useState("Small");
    const [nachosAmount, setNachosAmount] = useState(0);
    const [drinkFlavour, setDrinkFlavour] = useState("Fanta");
    const [drinkAmount, setDrinkAmount] = useState(0);
    const [drinkSize, setDrinkSize] = useState("Small");


    const addBooking = (e) =>{
        e.preventDefault()
        const booking = {
            movieTitle: bookingsMovieTitle,
            date: bookingsDate,
            time: bookingsTime,
            name: bookingsName,
            email: bookingsEmail,
            phone: bookingsPhone,
            seats: ["Default seat"],
            adult: bookingsAdult,
            child: bookingsChild,
            concessions: concessions
        }
        console.log(booking);
        axios.post('http://localhost:3002/bookings/create', booking
        ).then(()=>{
            console.log("Booking created - moving to seat allocation")
        }).catch((error) => {
            console.log(error.message)
        })
    }

    const addConcession = (e) =>{
        e.preventDefault()
        document.getElementById('addConcessionBtn').innerHTML = 'Update Concession';
        const popcorn = {
            popcorn: {
                flavour: popcornFlavour,
                amount: popcornAmount,
                size: popcornSize
            }
        }
        const nachos = {
            nachos: {
                flavour: nachosFlavour,
                amount: nachosAmount,
                size: nachosSize
            }
        }
        const drink = {
            drink: {
                flavour: drinkFlavour,
                amount: drinkAmount,
                size: drinkSize
            }
        }
        const concession = {
            popcorn,
            nachos,
            drink
        }
        console.log(concession);
        setConcessions(concession);

        let display = document.querySelector("#concessionsDisplay");
        display.innerHTML="Your Concessions:";

        if(popcornAmount > 0) {
            let entryDiv = document.createElement("div");
            entryDiv.textContent = `${popcornAmount}x ${popcornFlavour} Popcorn, ${popcornSize}`;
            display.appendChild(entryDiv);
        }

        if(nachosAmount > 0) {
            let entryDiv = document.createElement("div");
            entryDiv.textContent = `${nachosAmount}x ${nachosFlavour} Nachos, ${nachosSize}`;
            display.appendChild(entryDiv);
        }

        if(drinkAmount > 0) {
            let entryDiv = document.createElement("div");
            entryDiv.textContent = `${drinkAmount}x ${drinkFlavour}, ${drinkSize}`;
            display.appendChild(entryDiv);
        }

        // document.getElementById('concessionsDisplay').innerHTML=`${drinkSize}`;
    }

    useEffect(() => {

        axios.get('http://localhost:3002/bookings/getAll')
            .then((result) => {
                setBookings(result.data);
            }).catch((error) => {
                console.log(error.message)
            })
    }, [])

    useEffect(() => {

        axios.get('http://localhost:3002/movies/getAll')
            .then((result) => {
                setMovies(result.data);
            }).catch((error) => {
                console.log(error.message)
            })
    }, [])


    const changeTitle = (e) => {
        
        axios.get(`http://localhost:3002/movies/getByTitle/${bookingsMovieTitle}`)
            .then((result) => {
                setMoviesShowingDates(result.data.showingDates);
                setMoviesShowingTimes(result.data.showingTimes);
            }).catch((error) => {
                console.log(error.message)
            })
        
        setBookingsMovieTitle(e.target.value);
    }

    const concessionsPrices = () =>{
        if (document.getElementById('concessions-prices').style.display === "block") {
            document.getElementById('concessions-prices').style.display = "none";
        } else {
            document.getElementById('concessions-prices').style.display = "block";
        }
    }
    
    return(
        <div className="booking-main">
            <div className="top">
                <form action="/action_page.php">
                    <label for="movie">Movie:</label> 
                    <select id="movie" onChange={changeTitle}>
                            <option value="" disabled>Please Select Movie</option>
                            {movies.map((movie) => <option key={movie._id} value={movie.title}>{movie.title}</option>)}
                    </select>
                    <label for="date">Date:</label>
                    <select id="date" value={bookingsDate} onChange={(e) => setBookingsDate(e.target.value)}>
                            <option value="" disabled>Please Select Date</option>
                            {moviesShowingDates.map((date) => <option key={date} value={date}>{date}</option>)}
                    </select>

                    <label for="time">Time:</label>
                    <select id="time" value={bookingsTime} onChange={(e) => setBookingsTime(e.target.value)}>
                            <option value="" disabled>Please Select Time</option>
                            {moviesShowingTimes.map((time) => <option key={time} value={time}>{time}</option>)}
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
            <div className="concessions">
                <h4>Concessions</h4>
                <Button id="price-guide" onClick={concessionsPrices}>Price guide</Button>
                <div id="concessions-prices">
                    <p>Popcorn: Small £5, Large £8</p>
                    <p>Nachos: Small £5, Large £8</p>
                    <p>Drinks: Small £3, Large £5</p>
                </div>
                <form className="popcorn">
                    <h5>Popcorn</h5>
                    <label for="popcorn-amount">Amount:</label>
                    <input type="number" id="popcorn-amount" name="popcorn-amount" onChange={(e) => setPopcornAmount(e.target.value)}/>
                    <label for="popcorn-flavour">Flavour:</label> 
                    <select id="popcorn-flavour">
                            <option value="Sweet" onClick={(e) => setPopcornFlavour(e.target.textContent)}>Sweet</option>
                            <option value="Salted" onClick={(e) => setPopcornFlavour(e.target.textContent)}>Salted</option>
                            <option value="SweetSalted" onClick={(e) => setPopcornFlavour(e.target.textContent)}>Sweet & Salted</option>
                    </select>
                    <label for="popcorn-size">Size:</label>
                    <select id="popcorn-size" onChange={(e) => setPopcornSize(e.target.value)}>
                            <option value="Small">Small</option>
                            <option value="Large">Large</option>
                    </select>
                </form>
                <form className="nachos">
                    <h5>Nachos</h5>
                    <label for="nachos-amount">Amount:</label>
                    <input type="number" id="nachos-amount" name="nachos-amount" onChange={(e) => setNachosAmount(e.target.value)}/>
                    <label for="nachos-flavour">Flavour:</label> 
                    <select id="nachos-flavour" onChange={(e) => setNachosFlavour(e.target.value)}>
                            <option value="Cheesy">Cheesy</option>
                            <option value="Salsa">Salsa</option>
                    </select>
                    <label for="nachos-size">Size:</label>
                    <select id="nachos-size" onChange={(e) => setNachosSize(e.target.value)}>
                            <option value="Small">Small</option>
                            <option value="Large">Large</option>
                    </select>
                </form>
                <form className="drink">
                    <h5>Drinks</h5>
                    <label for="drink-amount">Amount:</label>
                    <input type="number" id="drink-amount" name="drink-amount" onChange={(e) => setDrinkAmount(e.target.value)}/>
                    <label for="drink-flavour">Type:</label> 
                    <select id="drink-flavour" onChange={(e) => setDrinkFlavour(e.target.value)}>
                            <option value="Fanta">Fanta</option>
                            <option value="Sprite">Sprite</option>
                            <option value="Pepsi">Pepsi</option>
                            <option value="Pepsi Max">Pepsi Max</option>
                            <option value="J2O">J2O</option>
                    </select>
                    <label for="drink-size">Size:</label>
                    <select id="drink-size" onChange={(e) => setDrinkSize(e.target.value)}>
                            <option value="Small">Small</option>
                            <option value="Large">Large</option>
                    </select>
                </form>
                <Button id="addConcessionBtn" onClick={addConcession}>Add Concessions</Button>
                <div id="concessionsDisplay">
                    {/* <h4>Your Current Concessions</h4>
                    <br/>
                    <h5>{popcornAmount}x {popcornFlavour} Popcorn, {popcornSize}</h5>
                    <h5>{nachosAmount}x {nachosFlavour} Nachos, {nachosSize}</h5>
                    <h5>{drinkAmount}x {drinkFlavour}, {drinkSize}</h5> */}
                </div>
            </div>
            <Button variant="warning" type="submit" value="Send" size="lg" onClick={addBooking}>Go to Payment</Button>
        </div>
    );
}

export default BookingForm;