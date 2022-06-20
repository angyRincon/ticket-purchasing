import React, {useContext} from 'react';
import {EventContext} from "../../../context/EventProvider";
import {formatMoney} from "../../../utils/formatMoney";
import styles from './checkout-details.module.scss'
import CreditCardForm from "../credit-card-form/credit-card-form";

const CheckoutDetails = () => {
    const {events} = useContext<any>(EventContext);

    return (
        <div className={styles['container']}>
            <h4 className={styles['title']}>Events selected</h4>
            <div className={styles['details-divider']}>
                <div className={styles['details-section1']}>
                    {
                        events.map((event: any) => (
                            <div className={styles['details']}>
                                <span>{event.name}</span>
                                <span>{formatMoney(event.price.max)}</span>
                            </div>
                        ))
                    }
                </div>

                <CreditCardForm/>
            </div>

        </div>
    );
};

export default CheckoutDetails;
