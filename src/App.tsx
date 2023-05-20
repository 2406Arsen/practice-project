import { Component } from "components/Component";
import { useTheme } from "providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { ProgressBar } from "shared/ui/ProgressBar/ProgressBar";
import {
  ButtonIcon,
  ButtonSize,
  ButtonTypes,
} from "shared/ui/Buttons/ButtonIcon";

const App = () => {
  return (
    <div>
      <ProgressBar />
    </div>
  );
};

export default App;
