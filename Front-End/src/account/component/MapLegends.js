import React from 'react';
import { FaSquare } from 'react-icons/fa';

import './MapLegends.css';

const MapLegends = () => {
    return (
        <div className="map-legends-container">
            <div className="map-legends-wrapper">
                <FaSquare style={{color: "grey"}} className="map-icons"/>
                <span>Blocked</span>
            </div>
            <div className="map-legends-wrapper">
                <FaSquare style={{color: "transparent"}} className="map-icons"/>
                <span>Unblocked</span>
            </div>
        </div>
    )
};

export default MapLegends;