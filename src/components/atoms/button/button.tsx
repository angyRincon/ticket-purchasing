import React, {FC, ReactNode} from 'react';
import styles from './button.module.scss';

interface IButton {
    label: string | ReactNode;
    className?: string;
    size?: 'small' | 'medium' | 'large';
}

const Button: FC<IButton> = ({label, size = 'medium', className}) => {

    const buttonStyles = [
        styles['container'],
        styles[size],
        className
    ].join(' ')

    return (
        <button className={buttonStyles}>
            {label}
        </button>
    );
};

export default Button;
