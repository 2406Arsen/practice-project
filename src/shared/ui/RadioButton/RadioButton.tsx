import { FC, memo, useMemo, useState } from "react";
import { useTheme } from "providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './RadioButton.module.scss'


interface RadioButtonProps {
    disabled?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = memo((props) => {
  const [ isSelected, setIsSelected ] = useState(false)
  const {
    disabled,
  } = props;

  const { theme } = useTheme();
  const mods = useMemo(() => ({}), []);

  const Checker = () => {
    return (
      setIsSelected((selected) => !selected)
      )
  }

  return (
    <label 
    className={classNames(cls.RadioButtons, mods, [
            cls[theme],
            cls[isSelected ? 'selected' : 'notSelected'],
            cls[disabled ? 'disabled' : 'null']
          ])}
          >
        <input 
              type="radio" 
              onClick= {Checker}
              disabled= {disabled}
              />
        <circle className={cls.CircleIcone}/>
    </label>
  );
});

export default RadioButton;