import React from "react";
import CanteenStatus from "./components/CanteenStatus";
import LiveMap from "./components/livemap/LiveMap";

const CanteenCapacityPage = () => {
    return (
        <div>
            <LiveMap />
            <CanteenStatus />
        </div>
    )
}

export default CanteenCapacityPage;