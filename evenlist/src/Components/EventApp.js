import React from "react";
import AddEventButton from "./AddEventButton";
import EventTable from "./EventTable";

import EventProvider from "./EventAppContext"

export default function EventApp() {
    return (
        <>

            <EventProvider>
                <div className="event_app">
                    <AddEventButton />
                    <EventTable />
                </div>

            </EventProvider>

        </>
    )
}