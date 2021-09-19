import React from "react";
import CanteenStatus from "../components/CanteenStatus";
import LiveMap from "../components/livemap/LiveMap";
import MapLegends from "../components/MapLegends";

const CanteenCapacityPage = () => {
    return (
        <div>
            <LiveMap />
            <MapLegends />
            <CanteenStatus />
        </div>
    )
}

export default CanteenCapacityPage;