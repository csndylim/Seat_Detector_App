import React, { useState, useEffect } from "react";
import MapSeat from "./MapSeat";

import './MapSeatList.css';

const svgViewWidth = 883;
const svgViewHeight = 874;


export default function MapSeatList(props) {

    const [data, setData] = useState([])

    useEffect(() => {
        // console.log(data)
        // console.log(props.seatList)
        setData(props.seatList)
    }, [props])

    const renderSeats = data.map((seat) => {
        return (
            <MapSeat
                seat={seat}
                key={seat.id}
                modify={props.modify}
                setTablesToBlock={props.setTablesToBlock}
                setTablesToUnblock={props.setTablesToUnblock}
            />
        )
    })

    return (
        <div className="svg-container">
            <svg viewBox={`0 0 ${svgViewWidth} ${svgViewHeight}`}>
                <text x={`${svgViewWidth/4}`} y={`${svgViewHeight/10}`}  fill="black" className="section-header" textAnchor="middle">Section A</text>
                <text x={`${svgViewWidth * 11/16}`} y={`${svgViewHeight/10}`} fill="black" className="section-header" textAnchor="middle">Section B</text>
                <text x={`${svgViewWidth/4}`} y={`${svgViewHeight/20 * 11}`} fill="black" className="section-header" textAnchor="middle">Section C</text>
                <text x={`${svgViewWidth * 11/16}`} y={`${svgViewHeight/20 * 11}`} fill="black" className="section-header" textAnchor="middle">Section D</text>
                <line x1={`${svgViewWidth * 13/28}`} y1="0" x2={`${svgViewWidth * 13/28}`} y2={`${svgViewHeight * 13/14}`} style={{stroke:"rgb(0,0,0)", strokeWidth: 3}} />
                <line x1="10" y1={`${svgViewHeight/2}`}  x2={`${svgViewWidth * 7/8 + 2}`}  y2={`${svgViewHeight/2}`}  style={{stroke:"rgb(0,0,0)", strokeWidth: 3}} />
                {renderSeats}
            </svg>
        </div>
    )
}
