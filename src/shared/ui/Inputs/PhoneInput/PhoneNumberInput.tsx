import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import cls from "./PhoneNumberInput.module.scss";
import { FC, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "providers/ThemeProvider";
import { TextFieldsState } from "../TextFields/TextFields";

interface PhoneeInputsProps {
  value3: string;
  state?: TextFieldsState;
  className?: string | undefined;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PhoneNumberInput: FC<PhoneeInputsProps> = (props) => {
  const {
    value3,
    state = TextFieldsState.DEFAULT,
    className,
    label,
    disabled,
    error = false,
    onChange,
  } = props;

  const { theme } = useTheme();

  const mods = useMemo(() => ({}), []);

  const inputClasses = classNames(cls.PhoneeInput, mods, [
    className,
    cls[state],
    cls[theme],
  ]);

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChange(event);
  };

  return (
    <div className={classNames(cls.div, {}, [cls[theme]])}>
      {label && (
        <label className={classNames(cls.PhoneeInputLabel, {}, [cls[theme]])}>
          {label}
        </label>
      )}
      <PhoneInput
        country={"am"}
        value={value3}
        inputClass={inputClasses}
        inputStyle={{
          width: "367px",
          height: "66px",
          borderRadius: "8px",
          margin: "8px",
        }}
        buttonClass={cls.buttonClass}
        onChange={() => handlePhoneNumberChange}
        disabled={disabled}
      />
      {value3 && !error && <div className={cls.TextFieldsCaption}>Caption</div>}
      {error && <div className={cls.PhoneInputErrorText}>Error Message</div>}
    </div>
  );
};

export default PhoneNumberInput;
