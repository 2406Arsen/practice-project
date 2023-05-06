import { useState } from "react";
import styles from "./Tabs.module.scss";

interface TabsProps {
    children: React.ReactNode,
}

const Tabs = (props: TabsProps) => {
    const [state, setState] = useState(true);
    const {
        children
    } = props

    return (
        <>
            {state ?
                <div className={styles.LightTab}
                    onClick={() => {
                        setState(false);
                    }}>
                    <div className={styles.LightTabText}>{children}</div>
                </div> :
                <div className={styles.LightTabOn}
                    onClick={() => {
                        setState(true);
                    }}>
                    <div className={styles.LightTabTextOn}>{children}</div>
                </div>
            }
        </>
    )
}

export default Tabs;