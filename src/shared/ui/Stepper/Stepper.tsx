import { FC, memo, useMemo, useState } from "react";
import { useTheme } from "providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { ReactComponent as  Mathminus} from "../../assets/icons/math-minus.svg";
import { ReactComponent as  Mathmplus} from "../../assets/icons/math-plus.svg";
import { ButtonSize } from "../Buttons/ButtonIcon";
import cls from './Stepper.module.scss'


interface SteppersProps{
    disabled?: boolean,
    size?: ButtonSize,
}

const Stepper: React.FC<SteppersProps> = memo((props) => { 
    const [count, setCount]=useState(0)
    const {
        disabled,
        size = ButtonSize.LARGE,
    } = props;

    const { theme } = useTheme()
    const mods = useMemo(() => ({}), [])

    const handleIncrement = () => setCount(()=> count +1 )
    const handleDecrement = () => count ? setCount(()=> count-1) : 0

    return(
        <div
            className={classNames(cls.Stepper, mods, [
                cls[theme],
                cls[size],
            ])}
            >
            <Mathminus 
                className={cls.minus}
                onClick={handleDecrement}
            />
            <span className={cls.count}>{count}</span>
            <Mathmplus 
                className={cls.plus}
                onClick={handleIncrement}
            />

        </div>
    )
});

export default Stepper;