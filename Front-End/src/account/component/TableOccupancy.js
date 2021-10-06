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
            <div>
                Table Occupancy Limit: {props.tableLimit}
            </div>
            <div>
                <div className="button-container">
                    <button type="button" onClick={increaseOccupancyHandler} className="set-occupancy-button"><FaChevronUp className="set-occupancy-icons"/></button>
                </div>
                <div className="button-container">
                    <button type="button" onClick={decreaseOccupancyHandler} className="set-occupancy-button"><FaChevronDown className="set-occupancy-icons"/></button>
                </div>
            </div>
        </div>
    )
};

export default TableOccupancy;