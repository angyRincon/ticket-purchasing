import React from 'react';
import styles from './container.module.scss'
import CardList from "../../components/organisms/card-list/card-list";
import Navbar from "../../components/organisms/navbar/navbar";

const Container = () => {
    return (
        <>
            <Navbar/>
            <div className={styles.container}>
                <CardList/>
            </div>
        </>
    );
};

export default Container;
