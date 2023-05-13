import React, { FC, memo, useMemo } from "react";
import cls from "./TextFields.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ReactComponent as LocationIcon } from "./Icon/vector.svg";
import { useTheme } from "providers/ThemeProvider";

export enum TextFieldsState {
  DEFAULT = "default",
  DISABLED = "disabled",
  FILLED = "filled",
  FOCUSED = "focused",
  ERROR = "error",
}

interface TextFieldsProps {
  label?: string;
  value: string;
  value2: string;
  placeholder1?: string;
  placeholder2?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChange2: (event: React.ChangeEvent<HTMLInputElement>) => void;
  state?: TextFieldsState;
  icon?: boolean;
  iconPosition?: "left" | "right";
  className?: string | undefined;
  error?: boolean;
}

const TextFields: FC<TextFieldsProps> = memo((props) => {
  const {
    label,
    value,
    value2,
    placeholder1,
    placeholder2,
    className,
    onChange,
    onChange2,
    state = TextFieldsState.DEFAULT,
    icon = false,
    iconPosition = "left",
    error = false
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

  const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange2(event);
  };

  return (
    <div className={classNames(cls.TextFieldsWrapper)}>
      
      <div className={cls.columns}>
        {label && <label className={cls.TextFieldsLabel}>{label}</label>}
        <input
          className={inputClasses}
          value={value}
          placeholder={placeholder1}
          onChange={handleInputChange}
        />
        {error && <div className={cls.TextFieldErrorText}>Error Message</div>}
        {value && !error && (
          <div className={cls.TextFieldsCaption}>Caption</div>
        )}

      </div>

      <div className={cls.columns}>
        {label && <label className={cls.TextFieldsLabel}>{label}</label>}

        {icon && iconPosition === "left" && <LocationIcon className={cls.icon} />}
        <input
          className={inputClasses}
          placeholder={placeholder2}
          value={value2}
          onChange={handleInputChange2}
        />

        {value2 && !error && (
          <div className={cls.TextFieldsCaption}>Caption 2</div>
        )}
        {error && <div className={cls.TextFieldErrorText}>Error Message</div>}

      </div>

    </div>
  );
});

export default TextFields;


