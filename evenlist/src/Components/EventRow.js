import React, { useState, useContext } from "react";
import { postData, pacthData, deleteData } from "../utils/API";
import { EventContext } from "./EventAppContext";
import { addIcon, deleteIcon, cancelIcon, editIcon, saveIcon } from "../utils/Icons";

export default function EventRow({ data }) {
    const [event, setEvent] = useState(data);

    const { events, setEvents } = useContext(EventContext);

    const verifyEventInput = (payload) => {
        if (payload.eventName === "" || payload.startDate === "" || payload.endDate === "") {
            return "emptyFeild";
        }

        if (Date.parse(payload.startDate) > Date.parse(payload.endDate)) {
            return "inValidDate";
        }
        return "valid"
    }
    const handleEventNameChange = (e) => { setEvent({ ...event, eventName: e.target.value }) };
    const handleStartDateChange = (e) => { setEvent({ ...event, startDate: e.target.value }) };
    const handleEndDateChange = (e) => { setEvent({ ...event, endDate: e.target.value }) };
    const handleEddit = (e) => { setEvent({ ...event, editing: "edit" }) }

    const handleAdd = (e) => {
        const payload = {
            eventName: event.eventName,
            startDate: event.startDate,
            endDate: event.endDate,
            id: event.id
        }
        if (verifyEventInput(payload) === "valid") {
            if (event.editing === "add") {
                postData(payload).then(res => {
                    console.log("res:", res);
                    setEvent({ ...event, editing: "normal" });
                });
            } else {
                pacthData(payload.id, payload).then(res => {
                    console.log("res:", res);
                    setEvent({ ...event, editing: "normal" });
                });
            }

        } else if (verifyEventInput(payload) === "emptyFeild") {
            alert("Please fill in all fields");
        } else {
            alert("Start date must be earlier than end date");
        }

    }

    const handleDelete = (e) => {
        if (event.editing === "edit") {
            const originalEvent = events.find(e => e.id === event.id);
            setEvent({ ...originalEvent, editing: "normal" })
        } else if (event.editing === "normal") {
            deleteData(event.id).then(res => {
                console.log("res:", res);
            });
            setEvents(events.filter(e => e.id !== event.id))
        } else {
            setEvents(events.filter(e => e.id !== event.id))
        }

    }

    const edditingUI = (
        <>
            <td >
                <input type="text" value={event.eventName} onChange={handleEventNameChange} />
            </td>
            <td >
                <input type="date" value={event.startDate} onChange={handleStartDateChange} />
            </td>
            <td >
                <input type="date" value={event.endDate} onChange={handleEndDateChange} />
            </td>
            <td >
                <button className="event_button_edit" onClick={handleAdd}>{event.editing === "add" ? addIcon : saveIcon}</button>
                <button className="event_button_delete" onClick={handleDelete}>{cancelIcon}</button>
            </td>

        </>
    )

    const normalUI = (
        <>
            <td >
                <input type="text" value={event.eventName} disabled readOnly />
            </td>
            <td >
                <input type="date" value={event.startDate} disabled readOnly />
            </td>
            <td >
                <input type="date" value={event.endDate} disabled readOnly />
            </td>
            <td >
                <button className="event_button_edit" onClick={handleEddit}>{editIcon}</button>
                <button className="event_button_delete" onClick={handleDelete}>{deleteIcon}</button>
            </td>
        </>
    )

    return (
        <>
            <tr key={event.id}>
                {event.editing === "normal" ? normalUI : edditingUI}
            </tr>

        </>
    )
}