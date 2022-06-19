//@packages
import React, {useEffect, useState} from 'react';

//@scripts
import {IEvents} from "../../../types/IEvents";
import {initialEvents} from "../../../config/master-data/Events";
import Events from "../../../services/events";
import CardItem from "../../molecules/card-item/card-item";

//@styles
import styles from './card-list.module.scss'

const CardList = () => {
    const [events, setEvents] = useState<IEvents[]>(initialEvents)

    const getEvents = async () => {
        const res = await Events.getEvents()
        setEvents(res.data._embedded.events)
    }

    useEffect(() => {
        (async () => getEvents())();
    }, [])

    return (
        <div className={styles['container']}>
            {events.map((event) => (
                <CardItem
                    key={event.id}
                    {...event}
                />
            ))}
        </div>
    );
};

export default CardList;
