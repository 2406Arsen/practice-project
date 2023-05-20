import { FC, memo, useMemo, useState } from "react";
import { useTheme } from "providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./TabBars.module.scss";
import { ReactComponent as HomeIcon } from "../../../assets/icons/home.svg";

interface TabBarsProps {
    title: string,
}

const TabBars: FC<TabBarsProps> = memo((props) => {

    const {
        title
    } = props
    const { theme } = useTheme();
    const [state, setState] = useState(true);
    const mods = useMemo(() => ({}), []);

    if(theme === "light"){
        return (
            <>
                {state ?
                    <div className={classNames(styles.LightTabBars, mods)}
                        onClick={() => {
                            setState(false);
                        }}>
                        <HomeIcon />  
                        <div className={classNames(styles.LightTabBarsTitle, mods)}>{title}</div>
                    </div> :
                    <div className={classNames(styles.LightTabBarsOn, mods)}
                        onClick={() => {
                            setState(true);
                        }}>
                        <HomeIcon />
                        <div className={classNames(styles.LightTabBarsTitleOn, mods)}>{title}</div>
                    </div>
                }
            </>
        )
    }
    return(
        <>
                {state ?
                    <div className={styles.DarkTabBars}
                        onClick={() => {
                            setState(false);
                        }}>
                        <HomeIcon />
                        <div className={styles.DarkTabBarsTitle}>{title}</div>
                    </div> :
                    <div className={styles.DarkTabBarsOn}
                        onClick={() => {
                            setState(true);
                        }}>
                        <HomeIcon />
                        <div className={styles.DarkTabBarsTitleOn}>{title}</div>
                    </div>
                }
            </>
    )
})

export default TabBars;