import React, {FC} from 'react';
import styles from './input-field.module.scss'

interface IInputField {
    name: string;
    label: string;
    type?: 'text' | 'number' | 'date';
    value: string | number;
    handleChange: (e: any) => void;
}

const InputField: FC<IInputField> = ({name, label, value, type = 'text', handleChange}) => {

    return (
        <div className={styles['container']}>
            <label className={styles['label']} htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                onChange={handleChange}
                className={styles['input']}
                value={value}
                type={type}
            />
        </div>
    );
};

export default InputField;
