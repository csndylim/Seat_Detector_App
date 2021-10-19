import React from "react";

const Trendbox = props => {
    const renderColor = () => {
        switch (props.crowdLevel) {
            case 1:
                return "#4CAF50";
            case 2:
                return "#FDD835";
            case 3:
                return "#FF9800";
            case 4:
                return "#973D3D";
            default:
                return "grey";
        }
    }

    return (
        <rect
            x={props.xSvg}
            y={props.ySvg}
            height="20"
            width="20"
            rx="2px"
            ry="2px"
            fill={renderColor()}
            stroke={renderColor()}
        />
    )
};

export default Trendbox;