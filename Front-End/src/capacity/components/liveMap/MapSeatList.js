import React, { useState, useEffect } from "react";
import MapSeat from "./MapSeat";

import './MapSeatList.css';

const svgViewWidth = 1000;
const svgViewHeight = 500;

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
            <svg viewBox={`0 0 ${svgViewWidth} ${svgViewHeight}`}>
                <text x={`${svgViewWidth/4}`} y={`${svgViewHeight/20}`}  fill="black" className="section-header" textAnchor="middle">Section A</text>
                <text x={`${svgViewWidth/4 * 3}`} y={`${svgViewHeight/20}`} fill="black" className="section-header" textAnchor="middle">Section B</text>
                <text x={`${svgViewWidth/4}`} y={`${svgViewHeight/20 *12}`} fill="black" className="section-header" textAnchor="middle">Section C</text>
                <text x={`${svgViewWidth/4 * 3}`} y={`${svgViewHeight/20 * 12}`} fill="black" className="section-header" textAnchor="middle">Section D</text>
                <line x1={`${svgViewWidth/2}`} y1="0" x2={`${svgViewWidth/2}`} y2={`${svgViewHeight}`} style={{stroke:"rgb(0,0,0)", strokeWidth: 3}} />
                <line x1="0" y1={`${svgViewHeight/2}`}  x2={`${svgViewWidth}`}  y2={`${svgViewHeight/2}`}  style={{stroke:"rgb(0,0,0)", strokeWidth: 3}} />
                {renderSeats}
            </svg>
        </div>
    )
}

export default MapSeatList;