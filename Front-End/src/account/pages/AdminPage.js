import React, { useState } from "react";
import { useEffect } from "react";

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
    const [seats, setSeats] = useState()
    const [tablesToBlock, setTablesToBlock] = useState([]);
    const [tablesToUnblock, setTablesToUnblock] = useState([]);

    useEffect(() => {
        setTableLimit(DUMMY_TABLE_LIMIT)
        setSeats(DUMMY_DATA_SEAT)
    }, [])

    const handleSubmit = () => {
        console.log(tablesToBlock)
    }

    return (
        <div>
            <TableOccupancy tableLimit={tableLimit} setTableLimit={setTableLimit}/>
            <ModifyTables seats={seats} setSeats={setSeats} setTablesToBlock={setTablesToBlock} setTablesToUnblock={setTablesToUnblock}/>
            <div className="admin-btn-container">
                <button className="admin-btn-submit" onClick={handleSubmit}>Save Changes</button>
            </div>
        </div>
    )
}

export default AdminPage;