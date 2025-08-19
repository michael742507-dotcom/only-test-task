import {FC} from "react";
import {Aim} from "entities";

import styles from './history-date.module.scss'

export const HistoryDateWidget: FC = () => {
    console.log("History date");

    return (
        <div className={styles.wrapper}>
            <Aim/>
        </div>
    )
}