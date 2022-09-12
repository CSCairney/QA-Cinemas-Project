import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import'./seating.css';

const SeatAllocation = () => {

    const [bookings, setBookings] = useState([]);
    const [bookingsSeats, setBookingsSeats] = useState([]);

    const api = axios.create({
        baseURL: 'localhost:3002/bookings/'
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
    }, [])

    return(
        <>
            <div>
                <h1 id="screen">Screen</h1>
            </div>

            <div className="row">
                <ul className="half-row">
                    <li>A1</li>
                    <li>A2</li>
                    <li>A3</li>
                    <li>A4</li>
                </ul>
                <ul className="half-row">
                    <li>A5</li>
                    <li>A6</li>
                    <li>A7</li>
                    <li>A8</li>
                </ul>
            </div>
            <div className="row">
                <ul className="half-row">
                    <li>B1</li>
                    <li>B2</li>
                    <li>B3</li>
                    <li>B4</li>
                </ul>
                <ul className="half-row">
                    <li>B5</li>
                    <li>B6</li>
                    <li>B7</li>
                    <li>B8</li>
                </ul>
            </div>
            <div className="row">
                <ul className="half-row">
                    <li>C1</li>
                    <li>C2</li>
                    <li>C3</li>
                    <li>C4</li>
                </ul>
                <ul className="half-row">
                    <li>C5</li>
                    <li>C6</li>
                    <li>C7</li>
                    <li>C8</li>
                </ul>
            </div>
            <div className="row">
                <ul className="half-row">
                    <li>D1</li>
                    <li>D2</li>
                    <li>D3</li>
                    <li>D4</li>
                </ul>
                <ul className="half-row">
                    <li>D5</li>
                    <li>D6</li>
                    <li>D7</li>
                    <li>D8</li>
                </ul>
            </div>
        </>
    );
}

export default SeatAllocation;