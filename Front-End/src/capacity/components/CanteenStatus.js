import React, {useState} from 'react'
import {Pane} from "evergreen-ui";
import './CanteenStatus.css';

export default function CanteenStatus(props){

    const STATUS = ["Status", "Available", "Occupied", "OverCapacity", "Blocked"];

    const [statsSel, setStatsSel]=useState({val: 0});

    // Function to convert list of seats to individual number of seats of each status.
    // Takes in an array of object [seats]
    // Returns an object [stats]
    function countStats(seats) {
        let statsA = {total: 0, available: 0, occupied: 0, overcapacity: 0, blocked: 0,};
        let statsB = {total: 0, available: 0, occupied: 0, overcapacity: 0, blocked: 0,};
        let statsC = {total: 0, available: 0, occupied: 0, overcapacity: 0, blocked: 0,};
        let statsD = {total: 0, available: 0, occupied: 0, overcapacity: 0, blocked: 0,};
        let i;

        let stats = {statsA, statsB, statsC, statsD};
        stats.total=seats.length;

        for (i = 0; i < seats.length; i++){
            if(seats[i].section=="A")
            {
                if (seats[i].status == 'Available') {statsA.available++;}
                else if (seats[i].status == 'Occupied') {statsA.occupied++;}
                else if (seats[i].status == 'OverCapacity') {statsA.overcapacity++;}
                else if (seats[i].status == 'Blocked') {statsA.blocked++;}
            }else if (seats[i].section=="B")
            {
                if (seats[i].status == 'Available') {statsB.available++;}
                else if (seats[i].status == 'Occupied') {statsB.occupied++;}
                else if (seats[i].status == 'OverCapacity') {statsB.overcapacity++;}
                else if (seats[i].status == 'Blocked') {statsB.blocked++;}
            }else if (seats[i].section=="C")
            {
                if (seats[i].status == 'Available') {statsC.available++;}
                else if (seats[i].status == 'Occupied') {statsC.occupied++;}
                else if (seats[i].status == 'OverCapacity') {statsC.overcapacity++;}
                else if (seats[i].status == 'Blocked') {statsC.blocked++;}
            }else            
            {
                if (seats[i].status == 'Available') {statsD.available++;}
                else if (seats[i].status == 'Occupied') {statsD.occupied++;}
                else if (seats[i].status == 'OverCapacity') {statsD.overcapacity++;}
                else if (seats[i].status == 'Blocked') {statsD.blocked++;}
        }
    }
        return stats;
    }

    const levelSeats = props.seats;
    let stats = countStats(levelSeats);

    return(
        <div>

          <p className={'seatAvailText'} >Canteen Capacity: <b>{((stats.statsA.available + stats.statsB.available + stats.statsC.available + stats.statsD.available)/stats.total*100).toFixed(2)}%</b></p>

          <Pane className={'statsTablePane'} border={'default'}>
              <table>
                  <tbody>
                      <tr>
                          <th>Status</th>
                          <th>A</th>
                          <th>B</th>
                          <th>C</th>
                          <th>D</th>
                          <th>Total</th>
                      </tr>
                      <tr>
                          <td>Available</td>
                          <td>{stats.statsA.available}</td>
                          <td>{stats.statsB.available}</td>
                          <td>{stats.statsC.available}</td>
                          <td>{stats.statsD.available}</td>
                          <td>{stats.statsA.available + stats.statsB.available + stats.statsC.available + stats.statsD.available}</td>
                      </tr>
                      <tr>
                          <td>Occupied</td>
                          <td>{stats.statsA.occupied}</td>
                          <td>{stats.statsB.occupied}</td>
                          <td>{stats.statsC.occupied}</td>
                          <td>{stats.statsD.occupied}</td>
                          <td>{stats.statsA.occupied + stats.statsB.occupied + stats.statsC.occupied + stats.statsD.occupied}</td>
                      </tr>
                      <tr>
                          <td>OverCapacity</td>
                          <td>{stats.statsA.overcapacity}</td>
                          <td>{stats.statsB.overcapacity}</td>
                          <td>{stats.statsC.overcapacity}</td>
                          <td>{stats.statsD.overcapacity}</td>
                          <td>{stats.statsA.overcapacity + stats.statsB.overcapacity + stats.statsC.overcapacity + stats.statsD.overcapacity}</td>
                      </tr>

                      <tr>
                          <td>Blocked</td>
                          <td>{stats.statsA.blocked}</td>
                          <td>{stats.statsB.blocked}</td>
                          <td>{stats.statsC.blocked}</td>
                          <td>{stats.statsD.blocked}</td>
                          <td>{stats.statsA.blocked + stats.statsB.blocked + stats.statsC.blocked + stats.statsD.blocked}</td>
                      </tr>
                      <tr className={'total'}>
                          <td>Total Tables</td>
                          <td>{stats.statsA.available + stats.statsA.occupied + stats.statsA.overcapacity + stats.statsA.blocked}</td>
                          <td>{stats.statsB.available + stats.statsB.occupied + stats.statsB.overcapacity + stats.statsB.blocked}</td>
                          <td>{stats.statsC.available + stats.statsC.occupied + stats.statsC.overcapacity + stats.statsC.blocked}</td>
                          <td>{stats.statsD.available + stats.statsD.occupied + stats.statsD.overcapacity + stats.statsD.blocked}</td>
                          <td>{stats.total}</td>
                      </tr>
                  </tbody>
              </table>
          </Pane>
          
      </div>
    );
}
