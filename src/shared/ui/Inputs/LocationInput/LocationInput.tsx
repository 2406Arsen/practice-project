import { FC, useMemo } from "react";
import { TextFieldsState } from "../TextFields/TextFields";
import { useTheme } from "providers/ThemeProvider";
import { ReactComponent as LocationIcon } from "./Icon/vector.svg";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LocationInput.module.scss";

interface LocationInputProps{
  value: string;
  state?: TextFieldsState;
  className?: string | undefined;
  placeholder?: string;
  label?: string;
  disabled?:boolean;
  error?: boolean;
  icon?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LocationInput: FC<LocationInputProps> = (props) => {
  const {
    value,
    state = TextFieldsState.DEFAULT,
    className,
    placeholder,
    label,
    disabled,
    error = false,
    onChange,
    icon
  } = props;

  const { theme } = useTheme();

  const mods = useMemo(() => ({}), []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  const inputClasses = classNames(cls.LocationInput, mods, [
    className,
    cls[state],
    cls[theme],
  ]);

  return (
    <div className={classNames(cls.LocationInputWrapper , {}, [cls[theme]])}>
      {label && (
        <div className={cls.lii}>
          <label className={cls.LocationLabel}>{label}</label>
          {icon && <LocationIcon className={cls.icon} />}
          <input
            className={inputClasses}
            placeholder={placeholder}
            value={value}
            onChange={handleInputChange}
            disabled={disabled}
          />
        </div>
      )}

      {value && !error && <div className={cls.LocationCaption}>Caption</div>}
      {error && <div className={cls.LocationErrorText}>Error Message</div>}
    </div>
  );
};

export default LocationInput;
