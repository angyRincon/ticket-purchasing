//@packages
import React, {FC} from 'react';

//@styles
import styles from './icon-button.module.scss'
import classNames from "classnames";

interface IconButtonProps {
    buttonClassName?: string;
    iconClassName?: string;
    icon: string;
}

const IconButton: FC<IconButtonProps> = ({iconClassName, buttonClassName, icon}) => {
    return (
        <div  className={classNames(styles['container'], buttonClassName)}>
            <span className={classNames(iconClassName)}>
                <i className={icon} />
            </span>
        </div>
    );
};

export default IconButton;
