import React from "react";
import MapSeatList from "../../capacity/components/liveMap/MapSeatList";

const ModifyTables = props => {
    return (
        <div>
            <div>
                Add or remove Tables
            </div>
            <div>
                Click on any of the tables to block or unblock
            </div>
            <div>
                <MapSeatList modify={true} setTablesToBlock={props.setTablesToBlock} setTablesToUnblock={props.setTablesToUnblock}/>
            </div>
        </div>
    )
};

export default ModifyTables;