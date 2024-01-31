import React from 'react'
import { useState, useEffect } from 'react';
import noImage from '../assets/no-image.png'
import { Link } from 'react-router-dom';

const ListItem = () => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setApiData(data);
        });
    }, []); 
  return (
    <div className="row justify-content-center">
        {apiData.map(item =>
            (
                <div className='col-auto g-4' key={item.show.id} >
                    <div className="card h-100" style={{width: "28rem"}}>
                        {item.show.image ?  
                            <img className="card-img-top" height={382} src={item.show.image.original} alt={item.show.name}/> :
                            <img className="card-img-top" height={382} src={noImage} alt=""/>
                        }
                        <div className="card-body">
                            <h5 className="card-title"> {item.show.name} </h5>
                        </div> 
                        <div className='card-footer'>
                            <Link to={`/showdetail/${item.show.id}`} className="btn btn-primary">More Details</Link>
                        </div>
                    </div>
                </div>

            )
        )}
    </div>
  )
}

export default ListItem
