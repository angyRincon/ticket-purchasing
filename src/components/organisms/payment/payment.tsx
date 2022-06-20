import React from 'react';
import CheckoutImage from "../../molecules/checkout-image/checkout-image";
import styles from './payment.module.scss'
import CheckoutDetails from "../../molecules/checkout-details/checkout-details";

const Payment = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['payment-container']}>
                <CheckoutImage/>
                <CheckoutDetails/>
            </div>
        </div>
    );
};

export default Payment;
