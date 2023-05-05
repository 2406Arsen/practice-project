import { useState } from "react";
import styles from "./SegmentedControls.module.scss";

interface SegmentedControlsProps {
    children: React.ReactNode,
}

const SegmentedControls = (props: SegmentedControlsProps) => {
    const [state, isState] = useState(true);
    const {
        children
    } = props

    return (
        <>
            {state ?
                <div className={styles.DarkSegControls}
                    onClick={() => {
                        isState(false);
                    }}>
                    <div className={styles.DarkSeg}>{children}</div>
                </div> :
                <div className={styles.DarkSegControlsOn}
                    onClick={() => {
                        isState(true);
                    }}>
                    <div className={styles.DarkSegOn}>{children}</div>
                </div>
            }
        </>
    )
}

export default SegmentedControls;