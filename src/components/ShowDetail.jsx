import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ShowDetail = () => {

    const { id } = useParams();
    const [showDetails, setShowDetails] = useState(null);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
        .then(response => response.json())
        .then(data => setShowDetails(data))
        .catch(error => console.error('Error fetching show details:', error));
    }, [id]);

    if (!showDetails) {
        return (
            <div className='row justify-content-center g-5'>
                <div className='col-6' style={{marginTop: '90px'}}>
                    <p>Loading...</p>
                </div>
            </div>
        );
    }
    return (
        <div className='row justify-content-center g-5'>
            <div className='col-6' style={{marginTop: '90px'}}>
                <p> <span  className='tag' >Name:</span> {showDetails.name}</p>
                <p> <span  className='tag' >Language:</span> {showDetails.language}</p>
                <p className='tag mb-1' >Summary:</p>
                <div dangerouslySetInnerHTML={{ __html: showDetails.summary }} />
                <Link to={`/booktickets/${id}`} className="btn btn-primary">Book Now</Link>
            </div>
        </div>

    );
}

export default ShowDetail
