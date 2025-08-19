import {FC, PropsWithChildren} from "react";

import styles from './layout.module.scss'

export const Layout:FC<PropsWithChildren> = ({children})=>{
    console.log("")
    return (
        <div className={styles.layout}>
            {children}
        </div>
    )
}