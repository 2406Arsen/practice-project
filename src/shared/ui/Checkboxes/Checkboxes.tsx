import { FC, memo, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "providers/ThemeProvider";
import cls from './Checkboxes.module.scss'
import { ButtonState } from "../Switches/Switches";
import { ReactComponent as Checked } from "../../assets/icons/check.svg";


interface CheckboxesProps {
    disabled?: boolean;
    state?: ButtonState;
}

const Checkboxes: React.FC<CheckboxesProps> = memo((props) => {
  const {
    disabled,
    state = ButtonState.SELECTED
  } = props;

  const { theme } = useTheme();
  const mods = useMemo(() => ({}), []);

  return (
    <button
    className={classNames(cls.Checkboxes, mods, [
          cls[theme],
          cls[state],
        ])}
        disabled={disabled}
    >
      <Checked className={cls.CheckedIcone}/>
    </button>
  );
});

export default Checkboxes;