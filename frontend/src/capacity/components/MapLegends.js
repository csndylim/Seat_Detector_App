import React from 'react';
import { FaSquare } from 'react-icons/fa';

import './MapLegends.css';

const MapLegends = () => {
    return (
        <div className="map-legends-container">
            <div className="map-legends-wrapper">
                <FaSquare style={{color: "green"}} className="map-icons"/>
                <span>Available</span>
            </div>
            <div className="map-legends-wrapper">
                <FaSquare style={{color: "orange"}} className="map-icons"/>
                <span>Occupied</span>
            </div>
            <div className="map-legends-wrapper">
                <FaSquare style={{color: "red"}} className="map-icons"/>
                <span>Overoccupied</span>
            </div>
            <div className="map-legends-wrapper">
                <FaSquare style={{color: "black"}} className="map-icons"/>
                <span>Blocked</span>
            </div>
        </div>
    )
};

export default MapLegends;