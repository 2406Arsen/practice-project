import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import cls from "./PhoneeInput.module.scss";
import { FC, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "providers/ThemeProvider";
import { TextFieldsState } from "../TextFields/TextFields";

interface PhoneeInputsProps {
  value3: string;
  state?: TextFieldsState;
  className?: string | undefined;
  label?: string;
  error?: boolean;
  onChange3 :  (event: React.ChangeEvent<HTMLInputElement>) => void; 
}

const PhoneeInput: FC<PhoneeInputsProps> = (props) => {
  const {
    value3,
    state = TextFieldsState.DEFAULT,
    className,
    label,
    error = false,
    onChange3
  } = props;

  const { theme } = useTheme();

  const mods = useMemo(() => ({}), []);

  const inputClasses = classNames(cls.PhoneeInput, mods, [
    className,
    cls[state],
    cls[theme],
  ]);

  const handleInputChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange3(event);
  };

  return (
    <div className={cls.div}>
      {label && <label className={cls.PhoneeInputLabel}>{label}</label>}
      <PhoneInput
        country={"am"}
        value={value3}
        inputClass={inputClasses}
        inputStyle={{
          width: "367px",
          height: "66px",
          borderRadius: "8px"
        }}
        buttonClass={cls.buttonClass}
        onChange={()=>handleInputChange3}
      />
      {value3 && !error && <div className={cls.TextFieldsCaption}>Caption</div>}
      {error && <div className={cls.PhoneInputErrorText}>Error Message</div>}
    </div>
  );
};

export default PhoneeInput;
