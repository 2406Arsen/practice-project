import { useState } from "react";
import styles from "./TabBars.module.scss";

interface TabBarsProps {
    children: React.ReactNode,
}

const TabBars = (props: TabBarsProps) => {
    const [state, isState] = useState(true);
    const {
        children
    } = props

    return (
        <>
            {state ?
                <div className={styles.LightTabBars}
                    onClick={() => {
                        isState(false);
                    }}>
                        
                    <div className={styles.LightTabBarsTitle}>{children}</div>
                </div> :
                <div className={styles.LightTabBarsOn}
                    onClick={() => {
                        isState(true);
                    }}>
                    
                    <div className={styles.LightTabBarsTitleOn}>{children}</div>
                </div>
            }
        </>
    )
}

export default TabBars;