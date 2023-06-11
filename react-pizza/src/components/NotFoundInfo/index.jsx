import React from 'react';

import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
            <h1>Ничего не найдено</h1>
            <p>К сожалению такой страницы нет</p>
        </div>
    );
};

export default NotFoundBlock;
