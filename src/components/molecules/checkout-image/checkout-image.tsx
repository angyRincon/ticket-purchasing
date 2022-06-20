import React, {useContext} from 'react';
import styles from './checkout-image.module.scss';
import ActionButton from "../../atoms/action-button/action-button";
import {EventContext} from "../../../context/EventProvider";
import {formatMoney} from "../../../utils/formatMoney";

const CheckoutImage = () => {
    const {total} = useContext<any>(EventContext);

    return (
        <div className={styles['container']}>
            <div className={styles['info']}>

                <ActionButton
                    redirectTo='/'
                    icon='fa-solid fa-arrow-left-long'
                    label='Go back'
                />

                <div className={styles['title']}>
                    <h1>Ticket Purchasing</h1>
                    <h3>{formatMoney(total)}</h3>
                </div>
            </div>

            <div className={styles['image-container']}>
                <img src={'assets/images/checkout-bg.jpg'} alt='checkout-image'/>
            </div>

        </div>
    );
};

export default CheckoutImage;
