import React, { useContext, useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import crudFirebase from "../../../services/crudFirebase";

import { SeatContext } from "../SeatContext";
import './LiveMap.css';
import MapSeatList from "./MapSeatList";

const LiveMap = () => {
    const [seats, setSeats] = useContext(SeatContext);

    const [dataFS, loading, error] = useCollection(crudFirebase.getAll('Tables'));

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