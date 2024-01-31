import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import noImage from '../assets/no-image.png'

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
        return <p>Loading...</p>;
    }
    return (
        <div className='row justify-content-center g-5' style={{marginTop: '90px'}}>
            <div className='col-6' style={{marginTop: '90px'}}>
                <p> <span  className='tag' >Name:</span> {showDetails.name}</p>
                <p> <span  className='tag' >Language:</span> {showDetails.language}</p>
                <p className='tag mb-1' >Summary:</p>
                <div dangerouslySetInnerHTML={{ __html: showDetails.summary }} />
                <Link to={`/booktickets/${id}`} className="btn btn-primary">Book Now</Link>
            </div>
            {/* <div className='col-lg-6 col-xl-3'>
                {showDetails.image ?  
                    <img className="rounded-2" width={340} height={382} src={showDetails.image.original} alt={showDetails.name}/> :
                    <img className="rounded-2" width={340} height={382} src={noImage} alt=""/>
                }
            </div> */}
        </div>

    );
}

export default ShowDetail
