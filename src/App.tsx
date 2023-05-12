import { Component } from "components/Component";
import { useTheme } from "providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import {
  ButtonIcon,
  ButtonSize,
  ButtonTypes,
} from "shared/ui/Buttons/ButtonIcon";
import Checkbox from "shared/ui/Checkbox/Checkbox";
import RadioButton from "shared/ui/RadioButton/RadioButton";
import Stepper from "shared/ui/Stepper/Stepper";
import Switch from "shared/ui/Switch/Switch";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("App", {}, [theme])}>
      <button onClick={toggleTheme}>toggle theme</button>
      <Component />
      <ButtonIcon size={ButtonSize.LARGE} type={ButtonTypes.PRIMARY}  disabled/>
      <Switch />
      <RadioButton />
      <Checkbox />
      <Stepper size={ButtonSize.SMALL}/>
    </div>
  );
};

export default App;