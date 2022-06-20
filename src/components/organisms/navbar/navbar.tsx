//@packages
import React, {useContext} from 'react';

//@scripts
import IconButton from "../../atoms/icon-button/icon-button";

//@styles
import styles from './navbar.module.scss'
import {EventContext} from "../../../context/EventProvider";
import {Link} from "react-router-dom";

const Navbar = () => {
    const {events} = useContext(EventContext);

    return (
        <div className={styles['navbar']}>
            <h3 className={styles['title']}>EVENTS</h3>
            <nav>
                <Link to='/payment'>
                    <div className={styles['card-notification']}>
                        {
                            events.length ?
                                <span className={styles['notification']}>{events.length}</span>
                                : null
                        }
                        <IconButton
                            buttonClassName={styles['menu-icon']}
                            icon='fa-solid fa-credit-card'
                        />
                    </div>
                </Link>

                <IconButton
                    buttonClassName={styles['menu-icon']}
                    icon='fa-solid fa-bars-staggered'
                />
            </nav>
        </div>
    );
};

export default Navbar;
