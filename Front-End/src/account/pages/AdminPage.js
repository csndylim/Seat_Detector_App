import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import Loading from "../../capacity/components/Loading";
import { SeatContext } from "../../capacity/components/SeatContext";
import crudFirebase from "../../services/crudFirebase";

import ModifyTables from "../component/ModifyTables";
import TableOccupancy from "../component/TableOccupancy";
import './AdminPage.css';

const DUMMY_TABLE_LIMIT = 2;

const DUMMY_DATA_SEAT = [
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

const AdminPage = () => {
    const [tableLimit, setTableLimit] = useState()
    // const [seats, setSeats] = useState()
    const [tablesToBlock, setTablesToBlock] = useState([]);
    const [tablesToUnblock, setTablesToUnblock] = useState([]);
    const [seats, setSeats] = useContext(SeatContext);

    const [dataFS, loading, error] = useCollection(crudFirebase.getAll('Tables'));

    useEffect(() => {
        if(!loading&&dataFS) {
            let events = [];
            dataFS.forEach((doc) => events.push(doc.data()));
            setSeats(events);
        }
    }, [dataFS, loading, setSeats])

    useEffect(() => {
        setTableLimit(DUMMY_TABLE_LIMIT)
    }, [])

    const handleSubmit = () => {
        console.log(tablesToBlock)
        console.log(tablesToUnblock)
    }

    return (
        !loading && seats
        ? <div>
            <TableOccupancy tableLimit={tableLimit} setTableLimit={setTableLimit}/>
            <ModifyTables seats={seats} setSeats={setSeats} setTablesToBlock={setTablesToBlock} setTablesToUnblock={setTablesToUnblock}/>
            <div className="admin-btn-container">
                <button className="admin-btn-submit" onClick={handleSubmit}>Save Changes</button>
            </div>
        </div>
        : <Loading />
    )
}

export default AdminPage;