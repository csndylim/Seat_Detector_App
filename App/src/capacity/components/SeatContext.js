import React, {useState, createContext} from 'react'

export const SeatContext = createContext();

export const SeatProvider = props => {
    const [seats, setSeats] = useState([]);
    
    return (
        <SeatContext.Provider value={[seats, setSeats]}>
            {props.children}
        </SeatContext.Provider>
    )
}