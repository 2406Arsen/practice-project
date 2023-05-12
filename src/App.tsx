import { Component } from "components/Component";
import { useTheme } from "providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import Avatars, { AvatarsSize } from "shared/ui/Avatars/Avatars";
import {
  ButtonIcon,
  ButtonSize,
  ButtonTypes,
} from "shared/ui/Buttons/ButtonIcon";
import ImageRatio, { ImageRatios } from "shared/ui/ImageRatio/ImageRatio";
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
      <ButtonIcon size={ButtonSize.LARGE} type={ButtonTypes.PRIMARY} disabled />
      <Avatars
        size={AvatarsSize.LARGE}
        source="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?cs=srgb&dl=pexels-pixabay-39866.jpg&fm=jpg"
      />
      <ImageRatio
        ratio={ImageRatios.ONETOONE}
        source="https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg?w=2000"
      />
      <Switch disabled/>
      <RadioButton disabled/>
      <Checkbox disabled/>
      <Stepper size={ButtonSize.LARGE}/>
    </div>
  );
};

export default App;