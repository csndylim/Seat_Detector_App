import React, { useContext, useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import app from '../../../services/firebase'

import { SeatContext } from "../SeatContext";
import './LiveMap.css';
import MapSeatList from "./MapSeatList";

const LiveMap = () => {
    const [seats, setSeats] = useContext(SeatContext);

    const [dataFS, loading, error] = useCollection(app.firestore().collection('Tables'));

    useEffect(() => {
        if(!loading&&dataFS) {
            let events = [];
            dataFS.forEach((doc) => events.push(doc.data()));
            setSeats(events);
        }
    }, [dataFS, loading, setSeats])

    return (
        <div className="stage-container">
            <MapSeatList seatList={seats}/>
        </div>
    )
};

export default LiveMap;