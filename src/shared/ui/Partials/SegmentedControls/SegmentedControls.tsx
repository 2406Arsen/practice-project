import { FC, memo, useMemo, useState } from "react";
import styles from "./SegmentedControls.module.scss";
import { useTheme } from "providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

interface SegmentedControlsProps {
    content: string;
}

const SegmentedControls: FC<SegmentedControlsProps> = memo((props) => {

    const {
        content
    } = props
    const { theme } = useTheme();
    const [state, setState] = useState(true);
    const mods = useMemo(() => ({}), []);

    if(theme === "light"){
        return (
            <>
                {state ?
                    <div className={classNames(styles.Segment, mods)}
                        onClick={() => { setState(false) }}>
                        <div className={classNames(styles.SegmentContent, mods)}>{content}</div>
                    </div> : <div className={classNames(styles.SetSegment, mods)}
                        onClick={() => { setState(true) }}>
                        <div className={classNames(styles.SetSegmentContent, mods)}>{content}</div>
                    </div> 
                } 
            </>
        )
    }
    return(
        <>
                {state ?
                    <div className={classNames(styles.DarkSegment, mods)}
                        onClick={() => { setState(false) }}>
                        <div className={classNames(styles.DarkSegmentContent, mods)}>{content}</div>
                    </div> : <div className={classNames(styles.DarkSetSegment, mods)}
                        onClick={() => { setState(true) }}>
                        <div className={classNames(styles.DarkSetSegmentContent, mods)}>{content}</div>
                    </div> 
                } 
            </>
    )
})

export default SegmentedControls;
