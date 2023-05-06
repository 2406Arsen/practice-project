import { FC, memo, useMemo } from "react";
import { useTheme } from "providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './RadioButton.module.scss'
import { ButtonState } from "../Switches/Switches";


interface RadioButtonProps {
    disabled?: boolean;
    state?: ButtonState;
}

const RadioButtons: React.FC<RadioButtonProps> = memo((props) => {
  const {
    disabled,
    state = ButtonState.SELECTED
  } = props;

  const { theme } = useTheme();
  const mods = useMemo(() => ({}), []);

  return (
    <button 
        className={classNames(cls.RadioButtons, mods, [
                cls[theme],
                cls[state],
            ])}
            disabled={disabled}
      >
      <circle className={cls.CircleIcone}/>
    </button>
  );
});

export default RadioButtons;