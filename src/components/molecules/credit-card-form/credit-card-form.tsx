import React, {useContext, useState} from 'react';
import InputField from "../../atoms/input-field/input-field";
import styles from './credit-card-form.module.scss'
import Button from "../../atoms/button/button";
import {EventContext} from "../../../context/EventProvider";
import {formatMoney} from "../../../utils/formatMoney";

const initialData = {
    cardNumber: '',
    cardHolder: '',
    expires: '',
    cvcCvv: ''
}

const CreditCardForm = () => {
    const [data, setData] = useState(initialData)
    const {total} = useContext<any>(EventContext);

    const handleChange = (e: any) => setData({...data, [e.target.name]: e.target.value})

    return (
        <div className={styles['container']}>
            <div className={styles['input-container']}>
                <InputField
                    name='cardNumber'
                    type='number'
                    label='card number'
                    value={data.cardNumber}
                    handleChange={handleChange}
                />

                <InputField
                    name='cardHolder'
                    label='card holder'
                    value={data.cardHolder}
                    handleChange={handleChange}
                />

                <InputField
                    name='expires'
                    label='expires'
                    type='date'
                    value={data.expires}
                    handleChange={handleChange}
                />

                <InputField
                    name='cvcCvv'
                    type='number'
                    label='cvc/cvv'
                    value={data.cvcCvv}
                    handleChange={handleChange}
                />
            </div>


            <Button
                label={ `Pay Now - ${formatMoney(total)}`}
                size='large'
            />

        </div>
    );
};

export default CreditCardForm;
