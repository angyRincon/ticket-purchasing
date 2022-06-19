import React from 'react';
import styles from './container.module.scss'
import CardList from "../../components/organisms/card-list/card-list";

const Container = () => {
    return (
        <div className={styles.container}>
            <CardList />
        </div>
    );
};

export default Container;
