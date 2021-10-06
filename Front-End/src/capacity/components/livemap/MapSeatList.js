import React, { useState, useEffect } from "react";
import MapSeat from "./MapSeat";

import './MapSeatList.css';

const DUMMY_DATA = [
    {
    cameraId: "CamA",
    id: "A3",
    section: "A",
    status: "Available",
    xSvg: 20,
    ySvg: 20
    },
    {
        cameraId: "CamA",
        id: "A2",
        section: "B",
        status: "Available",
        xSvg: 150,
        ySvg: 40
    }
]

const MapSeatList = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(DUMMY_DATA)
    }, [data])

    const renderSeats = data.map((seat) => {
        return (
            <MapSeat seat={seat} key={seat.id}/>
        )
    })

    return (
        <div className="svg-container">
            <svg viewBox='0 0 1200 600'>
                <text x="300" y="30" fill="black" className="section-header" textAnchor="middle">Section A</text>
                <text x="900" y="30" fill="black" className="section-header" textAnchor="middle">Section B</text>
                <text x="300" y="330" fill="black" className="section-header" textAnchor="middle">Section C</text>
                <text x="900" y="330" fill="black" className="section-header" textAnchor="middle">Section D</text>
                <line x1="600" y1="0" x2="600" y2="600" style={{stroke:"rgb(0,0,0)", strokeWidth: 3}} />
                <line x1="0" y1="300" x2="1200" y2="300" style={{stroke:"rgb(0,0,0)", strokeWidth: 3}} />
                {renderSeats}
            </svg>
        </div>
    )
}

export default MapSeatList;