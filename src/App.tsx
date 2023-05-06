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
import ToolTips, {
  ToolTipsPosition,
  TooltipsTypes,
} from "shared/ui/Tooltips/Tooltips";

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
      {/* <ToolTips
        text="Tooltip text "
        position={ToolTipsPosition.BOTTOM}
        type={TooltipsTypes.BASIC}
      >
        Text for tooltip
      </ToolTips> */}
    </div>
  );
};

export default App;
