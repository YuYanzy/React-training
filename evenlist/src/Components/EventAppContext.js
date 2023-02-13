import React, { useEffect, useState, createContext } from 'react'
import { getData } from "../utils/API";

export const EventContext = createContext();

export default function EventProvider({ children }) {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        getData().then(res => {
            console.log("Fetching data:", res)
            setEvents(res.map(e => {
                return { ...e, editing: "normal" };
            }));
        });
    }, []);


    return (
        <EventContext.Provider value={
            { events, setEvents }
        }>
            {children}
        </EventContext.Provider>
    );
}

