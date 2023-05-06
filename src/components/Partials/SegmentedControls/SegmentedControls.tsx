import { useState } from "react";
import styles from "./SegmentedControls.module.scss";

interface SegmentedControlsProps {
    children: React.ReactNode,
}

const SegmentedControls = (props: SegmentedControlsProps) => {
    const [state, setState] = useState(true);
    const {
        children
    } = props

    return (
        <>
            {state ?
                <div className={styles.LightSegControls}
                    onClick={() => {
                        setState(false);
                    }}>
                    <div className={styles.LightSeg}>{children}</div>
                </div> :
                <div className={styles.LightSegControlsOn}
                    onClick={() => {
                        setState(true);
                    }}>
                    <div className={styles.LightSegOn}>{children}</div>
                </div>
            }
        </>
    )
}

export default SegmentedControls;