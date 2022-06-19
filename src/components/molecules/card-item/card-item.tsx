//@packages
import React, {FC} from 'react';

//@scripts
import {IImage} from "../../../types/IEvents";

//@styles
import styles from './card-item.module.scss'

interface ICardItem {
    name: string;
    type: string;
    images: IImage[];
}

const CardItem: FC<ICardItem> = ({name, type, images}) => {
    return (
        <>
            <div style={{backgroundImage: images[1] && `url(${images[1].url})`}} className={styles['card']}>
                <div className={styles['container']}/>
                <div className={styles['card-header']}>
                    <h5 className={styles['small-title']}>{type}</h5>
                    <h2 className={styles['large-title']}>{name}</h2>
                </div>
            </div>
        </>
    );
};

export default CardItem;
