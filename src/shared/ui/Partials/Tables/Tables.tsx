import { FC, memo, useMemo } from "react";
import styles from "./Tables.module.scss";
import { useTheme } from "providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

interface TablesProps {
    className?: string;
    content?: string;
}

const Tables: FC<TablesProps> = memo((props) => {

    const {
        className,
        content
    } = props
    const { theme } = useTheme();

    const mods = useMemo(() => ({}), []);
    return(
        <>
        <table className={classNames(styles.Table, mods, [className, styles[theme]])}>{content}</table>
        </>
    )
})

export default Tables;