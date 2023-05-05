import { useState } from "react";
import styles from "./Tabs.module.scss";

interface TabsProps {
    children: React.ReactNode,
}

const Tabs = (props: TabsProps) => {
    const [state, isState] = useState(true);
    const {
        children
    } = props

    return (
        <>
            {state ?
                <div className={styles.LightTab}
                    onClick={() => {
                        isState(false);
                    }}>
                    <div className={styles.LightTabText}>{children}</div>
                </div> :
                <div className={styles.LightTabOn}
                    onClick={() => {
                        isState(true);
                    }}>
                    <div className={styles.LightTabTextOn}>{children}</div>
                    <div className={styles.LightIndicator}></div>
                </div>
            }
        </>
    )
}

export default Tabs;