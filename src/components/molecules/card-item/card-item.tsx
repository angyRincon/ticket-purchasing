//@packages
import React, {FC, useContext, useState} from 'react';

//@scripts
import {IEvents, IImage, ISales} from "../../../types/IEvents";

//@styles
import styles from './card-item.module.scss'
import {EventContext, IEventProvider} from "../../../context/EventProvider";
import {formatMoney} from "../../../utils/formatMoney";

interface ICardItem {
    name: string;
    id: string;
    type: string;
    sales: ISales;
    images: IImage[];
    priceRanges: any;
}

const CardItem: FC<ICardItem> = (event) => {
    const {id, name, type, images, sales, priceRanges} = event

    const [checked, setChecked] = useState(false);

    const {handleAddEvent} = useContext(EventContext);

    const handleSelectEvent = (e: any, event: any) => {
        setChecked(e.target.checked);
        handleAddEvent(e, {...event, selected: e.target.checked});
    }

    return (
        <>
            <div style={{backgroundImage: images[1] && `url(${images[1].url})`}} className={styles['card']}>
                <div className={styles['container']}/>
                <div className={styles['card-header']}>
                    <h5 className={styles['small-title']}>{type}</h5>
                    <h2 className={styles['large-title']}>{name}</h2>
                    <span className={styles['price']}>{priceRanges && formatMoney(priceRanges[0].max)}</span>
                </div>
                <input
                    className={styles['star']}
                    type="checkbox"
                    title="bookmark page"
                    checked={checked}
                    onChange={(e) => handleSelectEvent(e, {
                        id,
                        name,
                        type,
                        images,
                        startDateTime: sales.public.startDateTime,
                        endDateTime: sales.public.endDateTime,
                        price: priceRanges[0]
                    })}
                />
            </div>
        </>
    );
};

export default CardItem;
