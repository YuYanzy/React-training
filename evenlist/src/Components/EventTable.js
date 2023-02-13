import React, { useContext } from "react";
import EventRow from "./EventRow";
import { EventContext } from "./EventAppContext";


export default function EventTable() {

    const { events } = useContext(EventContext);
    console.log("events:", events);

    return (
        <>
            <table className="event-table">
                <thead>
                    <tr className="events__row-header">
                        <th className="events__header-item">Event</th>
                        <th className="events__header-item">Start</th>
                        <th className="events__header-item">End</th>
                        <th className="events__header-item">Actions</th>
                    </tr>
                </thead>
                <tbody className="event-table-body">
                    {events.map(event => {
                        return <EventRow data={event} key={event.id} />
                    })}

                </tbody>
            </table>
        </>
    )
}