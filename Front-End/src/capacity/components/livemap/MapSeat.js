import React from 'react';
import Colors from '../../../config/Colors';

const boxRx = 10;
const boxRy = 10;
const boxHeight = 70;
const boxWidth = 70;

const MapSeat = props => {

    // Render color according to status
    function renderColor(status) {
        switch (status) {
            case "Available": return Colors.colorAvailable;
            case "Occupied": return Colors.colorOccupied;
            case "Overoccupied": return Colors.colorOveroccupied;
            case "Blocked": return Colors.colorBlocked;
            default: return Colors.colorError;
        }
    }

    // Set SelectedSeatContext to current seat upon click
    function clickSeat() {
        console.log("Clicked " + props.seat.id);
    }

    return (
        <g onClick={clickSeat} cursor="pointer">
            <rect
                x={props.seat.xSvg}
                y={props.seat.ySvg}
                height={boxHeight}
                width={boxWidth}
                rx={boxRx}
                ry={boxRy}
                fill={renderColor(props.seat.status)}
            />
            <text
                textAnchor="middle"
                fontSize={30}
                x={parseFloat(props.seat.xSvg) + boxWidth / 2}
                y={parseFloat(props.seat.ySvg) + boxHeight / 2}
            >
            {props.seat.id}
            </text>
        </g>
    );
}

export default MapSeat;