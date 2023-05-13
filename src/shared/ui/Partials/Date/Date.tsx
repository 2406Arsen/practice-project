import { FC, memo, useMemo, useState } from "react";
import { useTheme } from "providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Date.module.scss";

interface DateProps {
    date: number,
}

const Date: FC<DateProps> = memo((props) => {

    const {
        date
    } = props
    const { theme } = useTheme();
    const [state, setState] = useState(true);
    const mods = useMemo(() => ({}), []);

    if (theme === "light") {
        return (
            <>
                {state ? <div className={classNames(styles.LightActiveDate, mods)}
                    onClick={() => {
                        setState(false);
                    }}>
                    <div className={classNames(styles.LightActiveDateNumber, mods)}>{date}</div>
                </div>
                    :
                    <div className={classNames(styles.LightDefaultDate, mods)}
                        onClick={() => {
                            setState(true);
                        }}>
                        <div className={classNames(styles.LightActiveDateNumber, mods)}>{date}</div>
                    </div>
                }
            </>
        )
    }
    return (
        <>
            {state ? <div className={classNames(styles.DarkActiveDate, mods)}
                onClick={() => {
                    setState(false);
                }}>
                <div className={classNames(styles.DarkActiveDateNamber, mods)}>{date}</div>
            </div>
                :
                <div className={classNames(styles.DarkDefaultDate, mods)}
                    onClick={() => {
                        setState(true);
                    }}>
                    <div className={classNames(styles.DarkDefaultDateNumber, mods)}>{date}</div>
                </div>
            }
        </>
    )
})

export default Date;