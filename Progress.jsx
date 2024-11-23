import React from 'react';
import styles from './Progress.module.css';

export const Progress = ({ steps, activeStep }) => {

    const progress = Array.from({ length: steps }, (_, index) => {
        const isActive = index < activeStep;
        return (
            <div
                key={index}
                className={`${styles.step} ${isActive ? styles.active : ''}`}
            ></div>
        );
    });

    return <div className={styles.progressBar}>{progress}</div>;
};




// import React from 'react'

// import styles from './Progress.module.css'

// export const Progress = ({ steps, activeStep }) => {
//     // TODO: Перенести логику прогрессбара сюда

    
//     return (
//         <div className={1 > 2 ? styles.a : styles.b}>Progress</div>
//     )
// }













