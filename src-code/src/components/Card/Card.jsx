import React from 'react';
import CountUp from 'react-countup';

import styles from './Card.module.css';

const Card = ({data: {confirmed, deaths, lastUpdate}}) => {
    if(!confirmed){
        return 'Loading...';
    }
    return (
        <div className={styles.container}>
            <p>Total number of infections:</p>
            <h1><CountUp end={confirmed.value} duration={1.5} separator=","></CountUp></h1>
            <hr />
            <p>Number of deaths: </p>
            <h1><CountUp end={deaths.value} duration={1.5} separator=","></CountUp></h1>
            <hr />
            <h1>{new Date(lastUpdate).toDateString()}</h1>
        </div>
    )
}


export default Card;