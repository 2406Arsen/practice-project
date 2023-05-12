import { FC, memo, useMemo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "providers/ThemeProvider";
import cls from './Checkbox.module.scss'
import { ReactComponent as Checked } from "../../assets/icons/check.svg";



interface CheckboxesProps {
    disabled?: boolean;
}

const Checkbox: React.FC<CheckboxesProps> = memo((props) => {
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
        className={classNames(cls.Checkbox,mods, [
            cls[theme],
            cls[isSelected ? 'selected' : 'notSelected'],
            cls[disabled ? 'disabled' : 'null']
          ]
        )}
      >
          <input 
              type="checkbox"
              disabled={disabled}
              onClick={Checker}
            />
              <Checked className={cls.CheckedIcone}/>
        </label>
  );
});

export default Checkbox;