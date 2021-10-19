import React from "react";
import Trendbox from "./Trendbox";

import { data } from "../../../data/TrendData";

import './TrendboxList.css';

const svgViewWidth = 500;
const svgViewHeight = 250;

const TrendBoxList = () => {
    const days = ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, idx) => {
        return (
            <text x="0" y={idx * 30 + 15} fill="black" textAnchor="start" key={idx}>{day}</text>
        )
    });

    const timings = ["8AM", "10AM", "12PM", "2PM", "4PM", "6PM", "8PM"].map((timing, idx) => {
        return (
            <text x={svgViewWidth * (idx * 2.5 + 2)/20} y={svgViewHeight* 19/20} fill="black" textAnchor="start" key={idx}>{timing}</text>
        )
    });

    const lineIndicator = [50, 93, 125, 156, 188, 220, 253, 285, 317, 350, 382, 413, 445, 485].map((item, idx) => {
        return (
            <line x1={item} y1={205} x2={item} y2={215} style={{stroke:"grey", strokeWidth: 1}} />
        );
    });

    const crowds = data.map((day, idx) => {
        const yPosition = idx * 30 + 2
        return day.map((timeslot, idx) => {
            return <Trendbox key={idx} xSvg={svgViewWidth * (idx*3.2 + 5)/50} ySvg={yPosition} crowdLevel={timeslot.crowdLevel} />
        })
    })

    return (
        <div className="trend-svg-container">
            <svg viewBox={`0 0 ${svgViewWidth} ${svgViewHeight}`}>
                {days}
                {timings}
                {crowds}
                <line x1={svgViewWidth * 2/20} y1={205} x2={svgViewWidth * (8 * 2.18 + 2)/20} y2={205} style={{stroke:"grey", strokeWidth: 1}} />
                {lineIndicator}
            </svg>
        </div>
    )
};

export default TrendBoxList;