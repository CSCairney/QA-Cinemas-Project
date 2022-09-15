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
    const [bookingsAdultPremium, setBookingsAdultPremium] = useState(0);
    const [bookingsChild, setBookingsChild] = useState(0);
    const [bookingsChildPremium, setBookingsChildPremium] = useState(0);
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
    const [totalPrice, setTotalPrice] = useState(0);


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
            adultPremium: bookingsAdultPremium,
            child: bookingsChild,
            childPremium: bookingsChildPremium,
            concessions: concessions
        }
        console.log(booking);
        axios.post('http://localhost:3002/bookings/create', booking
        ).then(()=>{
            console.log("Booking created - moving to seat allocation")
        }).catch((error) => {
            console.log(error.message)
        })

        let popcornMult = 5;
        if(popcornSize === "Large") popcornMult = 8;
        let nachosMult = 5;
        if(nachosSize === "Large") nachosMult = 8;
        let drinkMult = 3;
        if(drinkSize === "Large") drinkMult = 5;
        
        setTotalPrice(totalPrice + bookingsAdult*9 + bookingsAdultPremium*16 + bookingsChild*6 + bookingsChildPremium*10 + popcornAmount*popcornMult + nachosAmount*nachosMult + drinkAmount*drinkMult);
    }

    const addConcession = (e) =>{
        e.preventDefault()
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
        if(popcornAmount > 0 || nachosAmount > 0 || drinkAmount > 0) {
            display.innerHTML="Your Concessions:";
            document.getElementById('addConcessionBtn').innerHTML = 'Update Concession';
        }

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
            document.getElementById('concessions-prices-button').innerHTML = 'Show Prices';
        } else {
            document.getElementById('concessions-prices').style.display = "block";
            document.getElementById('concessions-prices-button').innerHTML = 'Hide Prices';
        }
    }

    const seatsPrices = () =>{
        if (document.getElementById('seats-prices').style.display === "block") {
            document.getElementById('seats-prices').style.display = "none";
            document.getElementById('seats-prices-button').innerHTML = 'Show Prices';
            
        } else {
            document.getElementById('seats-prices').style.display = "block";
            document.getElementById('seats-prices-button').innerHTML = 'Hide Prices';
        }
    }
    
    return(
        <div id="booking-main">
            <div id="details">
                <form id="details-form">
                    <h4>Please Enter Your Details</h4>
                    <input type="text" id="name" name="name" placeholder="Name" onChange={(e) => setBookingsName(e.target.value)}/><br/>
                    <input type="text" id="phone" name="phone" placeholder="Phone Number" onChange={(e) => setBookingsPhone(e.target.value)}/><br/> 
                    <input type="email" id="email" name="email" placeholder="Email Address" onChange={(e) => setBookingsEmail(e.target.value)}/><br/>
                </form>
            </div>
            <div id="mid">
                <form id="movie-form">
                    <h4>Select Booking Details</h4>
                    <label for="movie">Movie</label> 
                    <select id="movie" onChange={changeTitle}>
                            <option value="" disabled>Please Select Movie</option>
                            {movies.map((movie) => <option key={movie._id} value={movie.title}>{movie.title}</option>)}
                    </select>
                    <label for="date">Date</label>
                    <select id="date" value={bookingsDate} onChange={(e) => setBookingsDate(e.target.value)}>
                            <option value="" disabled>Please Select Date</option>
                            {moviesShowingDates.map((date) => <option key={date} value={date}>{date}</option>)}
                    </select>

                    <label for="time">Time</label>
                    <select id="time" value={bookingsTime} onChange={(e) => setBookingsTime(e.target.value)}>
                            <option value="" disabled>Please Select Time</option>
                            {moviesShowingTimes.map((time) => <option key={time} value={time}>{time}</option>)}
                    </select>
                </form>
                <form id="seats">
                    <h4>Select Your Seats</h4>
                    <Button id="seats-prices-button" onClick={seatsPrices}>Show Prices</Button>
                    <div id="seats-prices">
                        <p>Adult Regular: £9, Adult Premium £16</p>
                        <p>Child Regular: £6, Child Premium £10</p>
                    </div>
                    <br/>
                    <div className="seat-section">
                        <label for="adult">Adult Regular:</label>
                        <input type="number" id="adult" name="adult" onChange={(e) => setBookingsAdult(e.target.value)}/>
                        <label for="adult-premium">Adult Premium:</label>
                        <input type="number" id="adult-premium" name="adult-premium" onChange={(e) => setBookingsAdultPremium(e.target.value)}/>
                    </div>
                    <div className="seat-section">
                        <label for="child">Child Regular:</label>
                        <input type="number" id="child" name="child" onChange={(e) => setBookingsChild(e.target.value)}/>
                        <label for="child-premium">Child Premium:</label>
                        <input type="number" id="child-premium" name="chchild-premiumild" onChange={(e) => setBookingsChildPremium(e.target.value)}/>
                    </div>
                </form>
            </div>
           
            <div id="all-concessions">
                <h4 id="concessions-title">Concessions</h4>
                <Button id="concessions-prices-button" onClick={concessionsPrices}>Show Prices</Button>
                <div id="concessions-prices">
                    <p>Popcorn: Small £5, Large £8</p>
                    <p>Nachos: Small £5, Large £8</p>
                    <p>Drinks: Small £3, Large £5</p>
                </div>
                <div id="concessions">
                    <div id="concessions-main">
                        <div id="concessions-body">
                            <form id="popcorn" className="concessions-section">
                                <h5 className="concession-subclass">Popcorn</h5>
                                <label for="popcorn-amount">Amount:</label>
                                <input type="number" id="popcorn-amount" name="popcorn-amount" onChange={(e) => setPopcornAmount(e.target.value)}/>
                                <label for="popcorn-flavour">Type:</label> 
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
                            <form id="nachos" className="concessions-section">
                                <h5 className="concession-subclass">Nachos</h5>
                                <label for="nachos-amount">Amount:</label>
                                <input type="number" id="nachos-amount" name="nachos-amount" onChange={(e) => setNachosAmount(e.target.value)}/>
                                <label for="nachos-flavour">Type:</label> 
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
                            <form id="drink" className="concessions-section">
                                <h5 className="concession-subclass">Drinks</h5>
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
                        </div>
                        <div id="button-flex">
                            <Button id="addConcessionBtn" onClick={addConcession}>Add Concessions</Button>
                        </div>
                    </div>
                    <div id="concessionsDisplay">(Concessions Will Appear Here)</div>
                </div>
            </div>
            <Button variant="warning" type="submit" value="Send" size="lg" id="payment-button" onClick={addBooking}>Go to Payment</Button>
        </div>
    );
}

export default BookingForm;