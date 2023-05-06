import { useTheme } from 'providers/ThemeProvider';
import { FC, memo, useMemo } from "react";
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Swetches.module.scss'


export enum ButtonState{
    SELECTED = "selected",
    NOT_SELECTED = "notSelected",
}

interface SwitchesProps {
  disabled?: boolean;
  state?: ButtonState
}

const Switches: React.FC<SwitchesProps> = memo((props) => {
    const{
        disabled,
        state = ButtonState.SELECTED
    } = props;

    const { theme } = useTheme()
    const mods = useMemo(() => ({}),[])
    
    return(
        <button
            className={classNames(cls.Switches, mods, [
                cls[theme],
                cls[state],
            ])}
            disabled={disabled}
        >
        <span className={cls.spanCircle}></span>
        </button>
    )
});

export default Switches;