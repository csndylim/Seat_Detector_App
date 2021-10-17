import React from "react";
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

import './TableOccupancy.css'

const TableOccupancy = props => {
    
    const increaseOccupancyHandler = () => {
        props.setTableLimit(prevState => prevState + 1);
    }

    const decreaseOccupancyHandler = () => {
        props.setTableLimit(prevState => prevState - 1 < 1 ? 1 : prevState - 1);
    }

    return (
        <div className="set-occupancy-container">
                1. Set Table Occupancy Limit: 
            <div className ="occupancy-counter">
                <span>
                    <button type="button" onClick={decreaseOccupancyHandler} className="set-occupancy-button"><FaChevronDown className="set-occupancy-icons"/></button>
                </span>
                <span>
                    {props.tableLimit}
                </span>
                <span>
                    <button type="button" onClick={increaseOccupancyHandler} className="set-occupancy-button"><FaChevronUp className="set-occupancy-icons"/></button>
                </span>
            </div>
        </div>
    )
};

export default TableOccupancy;