//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      Name: Stats.js                                                                                                  //
//    Author: Hou Jing                                                                                                  //
//  Function: Exports component for Stats Pane. The seat information is passed in via props.                            //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, {useState} from 'react'
import Chart from 'react-google-charts'
import {
    Pane, SegmentedControl
} from "evergreen-ui";
import './Stats.css';
import Component from "@reactions/component";
import Colors from "../Configuration/Colors";

export default function Stats(props){

    const [statsSel, setStatsSel]=useState({val: 0});

    // Function to convert list of seats to individual number of seats of each status.
    // Takes in an array of object [seats]
    // Returns an object [stats]
    function countStats(seats) {
        let stats = {total: 0, avail: 0,occupied: 0, reserved: 0, hogged: 0, unavail: 0,};
        let i;
        stats.total=seats.length;
        for (i = 0; i < seats.length; i++){
            if(seats[i].unavailable==true) stats.unavail++;
            else
            {
                if (seats[i].status == 'Available') stats.avail++;
                else if (seats[i].status == 'Occupied') stats.occupied++;
                else if (seats[i].status == 'OverCapacity') stats.reserved++;
                else if (seats[i].status == 'Blocked') stats.hogged++;
            }

        }
        return (stats);
    }

    // Function to filter seats based on selected level
    // Takes all seats [props.seats] and selected level [statsSel.val] as input
    // Returns filtered seats as [levelSeats]
    const levelSeats = (statsSel.val==0 ? props.seats : props.seats.filter(seat => seat.level === statsSel.val.toString()));
    //console.log(levelSeats);

    let stats = countStats(levelSeats);

    return(
      <div>
          {/* Segmented Control Bar*/}
          <p className={'seatAvailText'} >Table Availability: <b>{(stats.avail/stats.total*100).toFixed(2)}%</b></p>

          <Pane className={'statsTablePane'} border={'default'}>
              <table>
                  <tbody>
                      <tr>
                          <th>Status</th>
                          <th>No. of Seats</th>
                      </tr>
                      <tr>
                          <td>Available</td>
                          <td>{stats.avail}</td>
                      </tr>
                      <tr>
                          <td>OverCapacity</td>
                          <td>{stats.reserved}</td>
                      </tr>
                      <tr>
                          <td>Occupied</td>
                          <td>{stats.occupied}</td>
                      </tr>
                      <tr>
                          <td>Blocked</td>
                          <td>{stats.hogged}</td>
                      </tr>
                      <tr className={'total'}>
                          <td>Total Seats</td>
                          <td>{stats.total}</td>
                      </tr>
                  </tbody>
              </table>
          </Pane>
      </div>
    );
}