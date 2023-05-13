import { useTheme } from "providers/ThemeProvider";
import { FC, memo, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SelectInput.module.scss";
import { TextFieldsState } from "../TextFields/TextFields";

interface SelectInputsProps {
  value?: string;
  state?: TextFieldsState;
  className?: string | undefined;
  label?: string;
  error?: boolean;
}

const SelectInput: FC<SelectInputsProps> = memo((props) => {
  const {
    value,
    state = TextFieldsState.DEFAULT,
    className,
    label,
    error = false,
  } = props;

  const { theme } = useTheme();

  const mods = useMemo(() => ({}), []);

  const inputClasses = classNames(cls.SelectInput, mods, [
    className,
    cls[state],
    cls[theme],
    cls.SelectInputLabel,
  ]);
  
  return (
    <div className={cls.div}>
      {label && <label className={cls.SelectInputLabel}>{label}</label>}
      <select
        className={inputClasses}
        value={value}
        style={{ width: "367px", height: "66px", borderRadius: "8px" }}
      />
      {error && <div className={cls.SelectInputErrorText}>Error Message</div>}
    </div>
  );
})
export default SelectInput;
