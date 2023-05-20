import React, { FC, memo, useMemo } from "react";
import cls from "./TextFields.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "providers/ThemeProvider";

export enum TextFieldsState {
  DEFAULT = "default",
  FILLED = "filled",
  FOCUSED = "focused",
  ERROR = "error",
}

interface TextFieldsProps {
  label?: string;
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  state?: TextFieldsState;
  className?: string | undefined;
  error?: boolean;
  disabled?:boolean
}

const TextFields: FC<TextFieldsProps> = memo((props) => {
  const {
    label,
    value,
    placeholder,
    className,
    onChange,
    state = TextFieldsState.DEFAULT,
    error = false,
    disabled
  } = props;

  const { theme } = useTheme();

  const mods = useMemo(() => ({}), []);

  const inputClasses = classNames(cls.TextFields, mods, [
    className,
    cls[state],
    cls[theme],
  ]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  return (
    <div className={classNames(cls.TextFieldsWrapper, {}, [cls[theme]])}>

      <div className={cls.columns}>
        {label && <label className={cls.TextFieldsLabel}>{label}</label>}
        <input
          className={inputClasses}
          value={value}
          placeholder={placeholder}
          onChange={handleInputChange}
          disabled={disabled}
        />
        {error && <div className={cls.TextFieldErrorText}>Error Message</div>}
        {value && !error && (
          <div className={cls.TextFieldsCaption}>Caption</div>
        )}

      </div>

    </div>
  );
});

export default TextFields;


