import { FC, memo, useMemo } from "react";
import styles from "./ErrorMessage.module.scss";
import { useTheme } from "providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

interface ErrorMessageProps {
    className?: string;
    text: string;
}

const ErrorMessage: FC<ErrorMessageProps> = memo((props) => {

    const {
        className,
        text
    } = props
    const { theme } = useTheme();

    const mods = useMemo(() => ({}), []);
    return(
        <>
        <label className={classNames(styles.Error, mods, [className, styles[theme]])}>{text}</label>
        </>
    )
})

export default ErrorMessage;