import React from "react";
import CanteenStatus from "./components/CanteenStatus";
import LiveMap from "./components/livemap/LiveMap";

const HomePage = () => {
    return (
        <div>
            <LiveMap />
            <CanteenStatus />
        </div>
    )
}

export default HomePage;