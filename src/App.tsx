import { Component } from "components/Component";
import { useTheme } from "providers/ThemeProvider";
import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import {
  ButtonIcon,
  ButtonSize,
  ButtonTypes,
} from "shared/ui/Buttons/ButtonIcon";
import PhoneeInput from "shared/ui/PhoneInput/PhoneeInput";
import SelectInput from "shared/ui/SelectInput/SelectInput";
import TextFields, { TextFieldsState } from "shared/ui/TextFields/TextFields";
import Tooltip from "shared/ui/ToolTips/ToolTips";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue2(event.target.value);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue3(event.target.value);
  };

  return (
    <div className={classNames("App", {}, [theme])}>
      <button onClick={toggleTheme}>toggle theme</button>
      <Component />
      <ButtonIcon size={ButtonSize.LARGE} type={ButtonTypes.PRIMARY} disabled />
      <TextFields
        state={TextFieldsState.FOCUSED}
        onChange={handleChange}
        onChange2={handleChange2}
        label=" Text Label "
        value={value}
        value2={value2}
        placeholder1="Placeholer text"
        placeholder2="Search location"
        icon
        // error
      />
      <PhoneeInput
        state={TextFieldsState.FOCUSED}
        onChange3={handleChange3}
        label=" Text Label "
        value3={value3}
        // error
      />
      <SelectInput
        state={TextFieldsState.FOCUSED}
        label=" Text Label "
        // error
      />

      <Tooltip 
          position="top" 
          text="Tap to manage" 
          // onClose={() => ""}
          linkHref="Link"
        >
        Hover
      </Tooltip>
    </div>
  );
};

export default App;
