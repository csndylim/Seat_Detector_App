import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import Loading from "../../capacity/components/Loading";
import { SeatContext } from "../../capacity/components/SeatContext";
import app from '../../services/firebase'
import ModifyTables from "../component/ModifyTables";
import TableOccupancy from "../component/TableOccupancy";
import './AdminPage.css';
import MapLegends from "../component/MapLegends";

function AdminPage () {

    const [tableLimit, setTableLimit] = useState([])
    const [tablesToBlock, setTablesToBlock] = useState([]);
    const [tablesToUnblock, setTablesToUnblock] = useState([]);
    const [seats, setSeats] = useContext(SeatContext);
    const [dataFS, loading, error] = useCollection(app.firestore().collection('Tables'));
    
    // Get the current table limit from firebase
    useEffect(() => {
        app.firestore().collection('TableCapacity').doc("canteen1TableCapacity").onSnapshot((doc) => {
            let db = doc.data()
            const old_tableLimit = db.seatsPerTable;
            setTableLimit(old_tableLimit);
            }
        );
    }, [])

    // Get the current tables' status from firebase
    useEffect(() => {
        if(!loading&&dataFS) {
            let events = [];
            dataFS.forEach((doc) => events.push(doc.data()));
            setSeats(events);
        }
    }, [dataFS, loading, setSeats])


    // Update the data to the firebase
    const handleSubmit = () => { 
        for (let i = 0; i < tablesToBlock.length; i++) {
            app.firestore().collection('Tables').doc(tablesToBlock[i]).update({status : "Blocked" }
        )}
       
          for (let i = 0; i < tablesToUnblock.length; i++) {
            app.firestore().collection('Tables').doc(tablesToUnblock[i]).update({status : "Available"}
        )}

        app.firestore().collection('TableCapacity').doc("canteen1TableCapacity").update({seatsPerTable : tableLimit});

        // Print message 
        let msg = ("Table limit is changed to ".concat(tableLimit.toString())).concat("\n")
        if (tablesToBlock.length >0) {
            msg = msg.concat(("New blocked tables: ".concat(tablesToBlock)).concat("\n"))
        }
        if (tablesToUnblock.length >0) {
            msg = msg.concat(("New unblocked tables: ".concat(tablesToUnblock)).concat("\n"))
        }
        window.alert(msg)
        tablesToBlock.length = 0
        tablesToUnblock.length = 0
    }

    return (
        !loading && seats
        ? <div>
            <TableOccupancy tableLimit={tableLimit} setTableLimit={setTableLimit}/>
            <ModifyTables seats={seats} setSeats={setSeats} setTablesToBlock={setTablesToBlock} setTablesToUnblock={setTablesToUnblock}/>
            <MapLegends />
            <div className="admin-btn-container">
                <button className="admin-btn-submit" onClick={handleSubmit}>Save Changes</button>
            </div>
        </div>
        : <Loading />
    )
}

export default AdminPage;