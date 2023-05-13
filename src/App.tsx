import { Component } from "components/Component";
import { useTheme } from "providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import ProgressBar from "shared/ui/ProgressBar/ProgressBar";
import {
  ButtonIcon,
  ButtonSize,
  ButtonTypes,
} from "shared/ui/Buttons/ButtonIcon";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("App", {}, [theme])}>
      {/* <button onClick={toggleTheme}>toggle theme</button>
      <Component /> */}
      {/* <ButtonIcon size={ButtonSize.LARGE} type={ButtonTypes.PRIMARY} disabled /> */}
      <ProgressBar />
      <ProgressBar />
      <ProgressBar />
      <ProgressBar />
      <ProgressBar />
    </div>
  );
};

export default App;
