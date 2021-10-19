import React from 'react';
import { FaSquare } from 'react-icons/fa';

import './TrendboxLegend.css';

const TrendboxLegend = () => {
    return (
        <div className="trend-map-legends-container">
            <div className="trend-map-legends-wrapper">
                <FaSquare style={{color: "grey"}} className="trend-map-icons"/>
                <span>No data</span>
            </div>
            <div className="trend-map-legends-wrapper">
                <FaSquare style={{color: "#4CAF50"}} className="trend-map-icons"/>
                <span>Not crowded</span>
            </div>
            <div className="trend-map-legends-wrapper">
                <FaSquare style={{color: "#FDD835"}} className="trend-map-icons"/>
                <span>Some crowd</span>
            </div>
            <div className="trend-map-legends-wrapper">
                <FaSquare style={{color: "#FF9800"}} className="trend-map-icons"/>
                <span>Crowded</span>
            </div>
            <div className="trend-map-legends-wrapper">
                <FaSquare style={{color: "#973D3D"}} className="trend-map-icons"/>
                <span>Maximum capacity</span>
            </div>
        </div>
    )
};

export default TrendboxLegend;