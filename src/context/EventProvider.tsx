import React, {createContext, ReactNode, useContext, useState} from "react";
import {IEvents} from "../types/IEvents";
import {initialEvents} from "../config/master-data/Events";

export interface IEventProvider {
    events: IEvents [];
    handleAddEvent: (e: any, event: IEvents) => void;
    total: number;
}

const initialState: IEventProvider = {
    events: [],
    total: 0,
    handleAddEvent: () => {
    }
}

export const EventContext = createContext(initialState);

export const EventProvider = ({children}: any) => {
    const [events, setEvents] = useState<any>([])
    const [totalPay, setTotalPay] = useState(0)

    const handleAddEvent = (e: any, newEvent: IEvents) => {
        const eventSelected = [...events, newEvent];
        if (newEvent.selected) {
            setEvents(eventSelected)
            eventSelected.map(event => setTotalPay(totalPay + event.price.max))
        } else {
            const index = events.findIndex((event: any) => event.id === newEvent.id)
            events.splice(index, 1)
            setEvents([...events])
        }
    }

    return (
        <EventContext.Provider value={{events, handleAddEvent, total: totalPay}}>
            {children}
        </EventContext.Provider>
    )
}
