import { useState } from "react"
import styles from "./Date.module.scss";

interface DateProps {
    children: number,
}

const Date = (props: DateProps) => {
    const [active, isActive] = useState(true)
    const {
        children
    } = props

    return (
        <>
            {active ?
                <div className={styles.LightActiveDate}
                    onClick={() => {
                        isActive(false);
                    }}>
                    <div className={styles.LightActiveDateNumber}>{children}</div>
                </div> :
                <div className={styles.LightDefaultDate}
                    onClick={() => {
                        isActive(true);
                    }}>
                    <div className={styles.LightDefaultDateNumber}>{children}</div>
                </div>
            }
        </>
    )
}

export default Date;