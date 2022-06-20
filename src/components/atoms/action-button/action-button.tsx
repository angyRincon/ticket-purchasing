import React, {FC} from 'react';
import styles from './action-button.module.scss';
import {Link} from "react-router-dom";

interface IActionButton {
    icon: string;
    label: string;
    redirectTo: string;
}

const ActionButton: FC<IActionButton> = ({icon, label, redirectTo}) => {
    return (
        <Link to={redirectTo} className={styles['container']}>
            <i className={icon}/>
            <span className={styles['label']}>{label}</span>
        </Link>
    );
};

export default ActionButton;
