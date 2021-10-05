import React, { useEffect, useState } from "react";
import './CanteenStatus.css';

const dummy_data = [
    {
        section: "A",
        available : 1,
        occupied : 2,
        overcapacity : 3,
        blocked : 4,
    },
    {
        section: "B",
        available : 1,
        occupied : 0,
        overcapacity : 0,
        blocked : 0,
    },
    {
        section: "C",
        available : 0,
        occupied : 0,
        overcapacity : 0,
        blocked : 0,
    },
    {
        section: "D",
        available : 0,
        occupied : 4,
        overcapacity : 0,
        blocked : 0,
    }
]

const STATUS = ["Status", "Available", "Occupied", "OverCapacity", "Blocked"];

const CanteenStatus = props => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState([]);

    useEffect(() => {
        setData(dummy_data);
    }, [])

    useEffect(() => {
        const total = data.reduce((x, y) => {
            const { available, occupied, overcapacity, blocked } = y;
            console.log(x)
            x.available += available;
            x.occupied += occupied;
            x.overcapacity += overcapacity;
            x.blocked += blocked;
            return x;
        }, {
            section: "Total",
            available : 0,
            occupied : 0,
            overcapacity : 0,
            blocked : 0,
        })
        setTotal([total]);
    }, [data]);

    const createColumnInformation = (arr) => {
        return arr.map((item, idx) => {
            const { section, available, occupied, overcapacity, blocked } = item;
            return (
                <td key={idx}>
                    <table className="canteen-status-table">
                        <tbody>
                            <tr>
                                <td>
                                    {section}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {available}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {occupied}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {overcapacity}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {blocked}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            )
        });
    }

    const status = STATUS.map((items, idx) => 
        <tr key={idx}>
            <td>
                {items}
            </td>
        </tr>
    );

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <table>
                                <tbody>
                                    {status}
                                </tbody>
                            </table>
                        </td>
                        {createColumnInformation(data)}
                        {createColumnInformation(total)}
                    </tr>
                </tbody>
            </table>

        </div>
    )
};

export default CanteenStatus;