//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: AdminHomePage.js                                                                                          //
//    Author: Hou Jing                                                                                                  //
//  Function: Exports component for HomePage. This is the default homepage of the system, as well as the homepage for   //
//            non-admin users (students). The seat information and selection information is passed                      //
//            with the use of React context. This component includes other components such as SeatsList, CamSeatsList   //
//            Stats, AlertList.                                                                                         //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, {useContext, useEffect} from "react";
import { Pane } from "evergreen-ui";
import MapSelectorPane from "./common/MapSelectorPane";
import './HomePage.css'
import Stats from "./common/Stats";
import {SeatContext} from "../contexts/SeatContext";
import crudFirebase from '../services/crudFirebase'
import { useCollection } from "react-firebase-hooks/firestore";
import Loading from "./common/Loading";
import LiveMap from "./components/livemap/LiveMap";

function HomePage() {
  const [seats, setSeats] = useContext(SeatContext);
  const [dataFS, loading, error] = useCollection(crudFirebase.getAll('Tables'));

  useEffect(()=> {
    if(!loading&&dataFS) {
      //console.log(dataFS.docs);
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
      <LiveMap />
        <div>
          <Pane className={'headingPane'}>
          <Stats seats={seats}/>
          </Pane>
        </div>
      </Pane>

    </div>:
          <Loading/>
  );
}

export default HomePage;
