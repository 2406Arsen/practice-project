import { ButtonState } from "../Switches/Switches";
import { FC, memo, useMemo } from "react";
import { useTheme } from "providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { ReactComponent as  Mathminus} from "../../assets/icons/math-minus.svg";
import { ReactComponent as  Mathmplus} from "../../assets/icons/math-plus.svg";
import { ButtonSize } from "../Buttons/ButtonIcon";
import cls from './Steppers.module.scss'


interface SteppersProps{
    disabled?: boolean,
    state?: ButtonState,
    size?: ButtonSize,
}

const Steppers: React.FC<SteppersProps> = memo((props) => {
    const {
        disabled,
        state = ButtonState.SELECTED,
        size = ButtonSize.LARGE,
    } = props;

    const { theme } = useTheme()
    const mods = useMemo(() => ({}), [])

    return(
        <div
            className={classNames(cls.Steppers, mods, [
                cls[theme],
                cls[state],
                cls[size],
            ])}
            >
            <Mathminus className={cls.minus}/>
            <span className={cls.count}>0</span>
            <Mathmplus className={cls.plus}/>
        </div>
    )
});

export default Steppers;