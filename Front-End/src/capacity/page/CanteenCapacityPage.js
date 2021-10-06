import React, {useContext, useEffect} from "react";
import { Pane } from "evergreen-ui";
import CanteenStatus from "../components/CanteenStatus";
import LiveMap from "../components/liveMap/LiveMap";
import MapLegends from "../components/MapLegends";

import {SeatContext} from "../components/SeatContext";
import Loading from "../components/Loading";
import crudFirebase from '../../services/crudFirebase'
import { useCollection } from "react-firebase-hooks/firestore";

function CanteenCapacityPage() {
    const [seats, setSeats] = useContext(SeatContext);
    const [dataFS, loading, error] = useCollection(crudFirebase.getAll('Tables'));
  
    useEffect(()=> {
      if(!loading&&dataFS) {
        let events = [];
        dataFS.forEach((doc) => events.push(doc.data()));
        console.log(events);
        setSeats(events);
      }
    },[dataFS]);
  
    return (
        !loading&&seats?
      <div>
        <Pane className={'bgPane'}>
        <LiveMap seats ={seats}/>
        <MapLegends />
          <div>
            <Pane className={'headingPane'}>
            <CanteenStatus seats={seats}/>
            </Pane>
          </div>
        </Pane>
  
      </div>:
            <Loading/>
    );
  }
  
  export default CanteenCapacityPage;
  