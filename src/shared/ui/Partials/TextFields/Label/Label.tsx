import { FC, memo, useMemo } from "react";
import styles from "./Label.module.scss";
import { useTheme } from "providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

interface LableProps {
    className?: string;
    text: string;
}

const Label: FC<LableProps> = memo((props) => {

    const {
        className,
        text
    } = props
    const { theme } = useTheme();

    const mods = useMemo(() => ({}), []);
    return(
        <>
        <label className={classNames(styles.Label, mods, [className, styles[theme]])}>{text}</label>
        </>
    )
})

export default Label;