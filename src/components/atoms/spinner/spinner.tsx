//@packages
import React from 'react';

//@styles
import styles from './spinner.module.scss'

const Spinner = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['spinner']} />
        </div>
    );
};

export default Spinner;
