import React, { useContext } from "react";
import uuid from 'react-uuid';
import { EventContext } from "./EventAppContext";

export default function AddEventButton() {
    const { events, setEvents } = useContext(EventContext);

    const handleAddEvent = (e) => {
        console.log("Add New Event")
        const newEvent = {
            id: uuid(),
            eventName: "",
            startDate: "",
            endDate: "",
            editing: "add"
        }
        setEvents([...events, newEvent]);
    }
    return (
        <>
            <button className="event-add-btn" onClick={handleAddEvent}>Add New Event</button>
        </>
    )
}