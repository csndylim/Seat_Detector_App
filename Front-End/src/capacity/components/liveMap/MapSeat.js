import React, { useEffect, useState } from 'react';
import Colors from '../../../config/Colors';

const boxRx = 10;
const boxRy = 10;
const boxHeight = 70;
const boxWidth = 70;

const MapSeat = props => {
    const [seat, setSeat] = useState(props.seat);
    const [backgroundColor, setBackgroundColor] = useState("");

    useEffect(() => {
        if (!props.modify) {
            switch (seat.status) {
                case "Available":
                    setBackgroundColor(Colors.colorAvailable);
                    break
                case "Occupied":
                    setBackgroundColor(Colors.colorOccupied);
                    break;
                case "Overoccupied":
                    setBackgroundColor(Colors.colorOveroccupied);
                    break;
                case "Blocked":
                    setBackgroundColor(Colors.colorBlocked);
                    break;
                default:
                    setBackgroundColor(Colors.colorError);
            }
        }
            else {
            if (seat.status === "Blocked") {
                setBackgroundColor(Colors.colorBlocked)
            } else {
                setBackgroundColor(Colors.colorError);
            }
        }
    }, [props, seat])

    // Render color according to status
    //     if (!props.modify) {
    //         switch (status) {
    //             case "Available": return Colors.colorAvailable;
    //             case "Occupied": return Colors.colorOccupied;
    //             case "Overoccupied": return Colors.colorOveroccupied;
    //             case "Blocked": return Colors.colorBlocked;
    //             default: return Colors.colorError;
    //         }
    //     }
    //     else {
    //         if (seat.status === "Blocked") {
    //             return Colors.colorBlocked
    //         } else {
    //             return Colors.colorError;
    //         }
    //     }

    // }

    // Set SelectedSeatContext to current seat upon click
    const clickSeat = () => {
        console.log(seat)
        if (seat.status === "Blocked") {
            props.setTablesToUnblock(prevState => {
                console.log(prevState)
                if (prevState.includes(seat.id)) {
                    prevState.splice(prevState.indexOf(seat.id), 1)
                    setBackgroundColor(Colors.colorBlocked);
                    return prevState
                }
                setBackgroundColor(Colors.colorError);
                prevState.push(seat.id)
                return prevState
            })
            return
        }
        props.setTablesToBlock(prevState => {
            console.log(prevState)
            if (prevState.includes(seat.id)) {
                prevState.splice(prevState.indexOf(seat.id), 1)
                setBackgroundColor(Colors.colorError);
                return prevState
            }
            prevState.push(seat.id)
            setBackgroundColor(Colors.colorBlocked);
            return prevState
        })
    }

    return (
        <g onClick={props.modify ? clickSeat : null} cursor="pointer">
            <rect
                x={props.seat.xSvg}
                y={props.seat.ySvg}
                height={boxHeight}
                width={boxWidth}
                rx={boxRx}
                ry={boxRy}
                fill={backgroundColor}
                stroke="#909090"
            />
            <text
                textAnchor="middle"
                fontSize={30}
                x={parseFloat(seat.xSvg) + boxWidth / 2}
                y={parseFloat(seat.ySvg) + boxHeight / 2}
            >
            {seat.id}
            </text>
        </g>
    );
}

export default MapSeat;