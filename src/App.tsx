import { Component } from "components/Component";
import { useTheme } from "providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import {
  ButtonIcon,
  ButtonSize,
  ButtonTypes,
} from "shared/ui/Buttons/ButtonIcon";


import Switches, { ButtonState } from "shared/ui/Switches/Switches";
import Checkboxes from "shared/ui/Checkboxes/Checkboxes";
import Steppers from "shared/ui/Steppers/Steppers";
import RadioButtons from "shared/ui/RadioButton/RadioButton";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("App", {}, [theme])}>
      <button onClick={toggleTheme}>toggle theme</button>
      <Component />
      <ButtonIcon size={ButtonSize.LARGE} type={ButtonTypes.PRIMARY}  disabled/>
      <Switches state={ButtonState.SELECTED} disabled/>
      {/* <RadioButtons state={ButtonState.SELECTED}  disabled/> */}
      {/* <Checkboxes  state={ButtonState.NOT_SELECTED} disabled/> */}
      {/* <Steppers size={ButtonSize.LARGE}/> */}
    </div>
  );
};

export default App;