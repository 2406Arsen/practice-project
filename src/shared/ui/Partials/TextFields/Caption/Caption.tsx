import { FC, memo, useMemo } from "react";
import styles from "./Caption.module.scss";
import { useTheme } from "providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

interface CaptionProps {
    className?: string;
    text: string;
}

const Caption: FC<CaptionProps> = memo((props) => {

    const {
        className,
        text
    } = props
    const { theme } = useTheme();

    const mods = useMemo(() => ({}), []);
    return(
        <>
        <label className={classNames(styles.Caption, mods, [className, styles[theme]])}>{text}</label>
        </>
    )
})

export default Caption;