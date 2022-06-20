//@packages
import React, {useEffect, useState} from 'react';

//@scripts
import {IEvents} from "../../../types/IEvents";
import {initialEvents} from "../../../config/master-data/Events";
import Events from "../../../services/events";
import CardItem from "../../molecules/card-item/card-item";

//@styles
import styles from './card-list.module.scss'
import Spinner from "../../atoms/spinner/spinner";

const CardList = () => {
    const [events, setEvents] = useState<IEvents[]>(initialEvents)
    const [loading, setLoading] = useState(false)

    const getEvents = async () => {
        try {
            setLoading(true)
            const res = await Events.getEvents();
            const filteredData = res.data._embedded.events.filter((event: any) => {
                if (event.accessibility) {
                    return Object.keys(event.accessibility).length
                }
            })
            setEvents(filteredData)
            setLoading(false)
        } catch (e) {
            throw e
        }
    }

    useEffect(() => {
        (async () => getEvents())();
    }, [])

    if (loading) return <Spinner />
    return (
        <>
            <div className={styles['container']}>
                {events.map((event) => (
                    // @ts-ignore
                    <CardItem
                        key={event.id}
                        {...event}
                    />
                ))}
            </div>
        </>
    );
};

export default CardList;
