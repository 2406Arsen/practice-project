import { FC, memo, useMemo, useState } from "react";
import { useTheme } from "providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Tabs.module.scss";

interface TabsProps {
    menu: string,
}

const Tabs: FC<TabsProps> = memo((props) => {

    const {
        menu
    } = props
    const { theme } = useTheme();
    const [state, setState] = useState(true);
    const mods = useMemo(() => ({}), []);

    if (theme === "light") {
        return (
            <>
                {state ?
                    <div className={classNames(styles.LightTab, mods)}
                        onClick={() => {
                            setState(false);
                        }}>
                        <div className={classNames(styles.LightTabTitle, mods)}>{menu}</div>
                    </div> :
                    <>
                    <div className={classNames(styles.LightTabOn, mods)}
                        onClick={() => {
                            setState(true);
                        }}>
                        <div className={classNames(styles.LightTabTitleOn, mods)}>{menu}</div>
                    </div>
                    <div className={classNames(styles.LightTabIndicator, mods)}></div>
                    </>
                }
            </>
        )
    }
    return (
        <>
            {state ?
                <div className={classNames(styles.DarkTab, mods)}
                    onClick={() => {
                        setState(false);
                    }}>
                    <div className={classNames(styles.DarkTabTitle, mods)}>{menu}</div>
                </div> :
                <>
                <div className={classNames(styles.DarkTabOn, mods)}
                    onClick={() => {
                        setState(true);
                    }}>
                    <div className={classNames(styles.DarkTabTitleOn, mods)}>{menu}</div>
                </div>
                <div className={classNames(styles.DarkTabIndicator, mods)}></div>
                </>
            }
        </>
    )
})

export default Tabs;