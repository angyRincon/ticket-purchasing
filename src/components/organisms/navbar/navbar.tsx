//@packages
import React from 'react';

//@scripts
import IconButton from "../../atoms/icon-button/icon-button";

//@styles
import styles from './navbar.module.scss'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <h3 className={styles.title}>EVENTS</h3>
            <nav>
                <IconButton
                    buttonClassName={styles['menu-icon']}
                    icon='fa-solid fa-bars-staggered'
                />
            </nav>
        </div>
    );
};

export default Navbar;
