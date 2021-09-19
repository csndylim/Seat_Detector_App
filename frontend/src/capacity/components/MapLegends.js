import React from 'react';
import { FaSquare } from 'react-icons/fa';

import './MapLegends.css';

const MapLegends = () => {
    return (
        <div className="map-legends-container">
            <div>
                <FaSquare style={{color: "green"}}/>
                <span>Available</span>
            </div>
            <div>
                <FaSquare style={{color: "orange"}}/>
                <span>Occupied</span>
            </div>
            <div>
                <FaSquare style={{color: "red"}}/>
                <span>Overoccupied</span>
            </div>
            <div>
                <FaSquare style={{color: "black"}}/>
                <span>blocked</span>
            </div>
        </div>
    )
};

export default MapLegends;