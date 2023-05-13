import { useTheme } from 'providers/ThemeProvider';
import { FC, memo, useMemo, useState } from "react";
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Swetch.module.scss'


interface SwitchesProps {
  disabled?: boolean;
}

const Switch: React.FC<SwitchesProps> = memo((props) => {
    const [isSelected, setIsSelected]=useState(false)
    const{
        disabled,
    } = props;
    
    const { theme } = useTheme()
    const mods = useMemo(() => ({}),[])
    
    const Checker = () => {
        return (
            setIsSelected((selected)=> !selected)
          )
      }
    
    return(
        <label 
            className={classNames(cls.Switches, mods, [
                cls[theme],
                cls[isSelected ? 'selected' : 'notSelected'],
                cls[disabled ? 'disabled' : 'null']
            ])}
            >
            < input
                type="checkbox"
                disabled={disabled} 
                onClick={Checker}/>
            <span className={`${cls.slider} ${cls.round}`}></span>
        </label>
    )
});

export default Switch;