import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import Loading from "../../capacity/components/Loading";
import { SeatContext } from "../../capacity/components/SeatContext";
import crudFirebase from "../../services/crudFirebase";
import app from '../../services/firebase'


import ModifyTables from "../component/ModifyTables";
import TableOccupancy from "../component/TableOccupancy";
import './AdminPage.css';


function AdminPage () {

    const [tableLimit, setTableLimit] = useState([])
    const [tablesToBlock, setTablesToBlock] = useState([]);
    const [tablesToUnblock, setTablesToUnblock] = useState([]);
    const [seats, setSeats] = useContext(SeatContext);

    const [dataFS, loading, error] = useCollection(crudFirebase.getAll('Tables'));
    
    useEffect(() => {
        app.firestore().collection('TableCapacity').doc("canteen1TableCapacity").onSnapshot((doc) => {
            let retrievefromDB = doc.data()
            const TABLE_LIMIT = retrievefromDB.seatsPerTable;
            setTableLimit(TABLE_LIMIT);
            }
        );
    }, [])





    useEffect(() => {
        if(!loading&&dataFS) {
            let events = [];
            dataFS.forEach((doc) => events.push(doc.data()));
            setSeats(events);
        }
    }, [dataFS, loading, setSeats])


    const handleSubmit = () => { 
        for (let i = 0; i < tablesToBlock.length; i++) {
            app.firestore().collection('Tables').doc(tablesToBlock[i]).update(
                {
                    status : "Blocked"
                }
            )
          }
       
          for (let i = 0; i < tablesToUnblock.length; i++) {
            app.firestore().collection('Tables').doc(tablesToUnblock[i]).update(
                {
                    status : "Available"
                }
            )
          }

        app.firestore().collection('TableCapacity').doc("canteen1TableCapacity").update({seatsPerTable : tableLimit});
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