// BookingForm.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BookingForm() {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        movieName: '',
        userEmail: '', 
        numberOfSeats: '',
        movieDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, for example, storing data in localStorage
        localStorage.setItem('bookingDetails', JSON.stringify(formData));
    };

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
        .then(response => response.json())
        .then(data => setFormData({movieName: data.name, userEmail: '', numberOfSeats: '', movieDate: ''}))
        .catch(error => console.error('Error fetching show details:', error));
    }, [id]);

    return (
        <div>
            <h2>Movie Ticket Booking</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="movieName" className="form-label">Movie Name</label>
                    <input  type="text" className="form-control" readOnly
                            id="movieName" name="movieName"
                            value={formData.movieName} />
                </div>
                <div className="mb-3">
                    <label htmlFor="userEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="userEmail" name='userEmail' value={formData.userEmail} aria-describedby="emailHelp" onChange={handleChange}/>
                </div>
                <div className="row">
                    <div className="mb-3 col-3">
                        <label htmlFor="numberOfSeats" className="form-label">Select the number of seats: </label>
                        <input  type="number" className="form-control" 
                                id="numberOfSeats" name="numberOfSeats"
                                value={formData.numberOfSeats} onChange={handleChange}/>
                    </div>
                    <div className="mb-3 col-3">
                        <label htmlFor="movieDate" className="form-label">Date: </label>
                        <input  type="date" className="form-control" 
                                id="movieDate" name="movieDate" value={setFormData.movieDate}
                                onChange={handleChange}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default BookingForm;
