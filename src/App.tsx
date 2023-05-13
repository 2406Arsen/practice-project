import { Component } from "components/Component";
import { useTheme } from "providers/ThemeProvider";
import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import Avatars, { AvatarsSize } from "shared/ui/Avatars/Avatars";
import Button from "shared/ui/Buttons/Button/Button";
import ProgressBar from "shared/ui/ProgressBar/ProgressBar";
import {
  ButtonIcon,
  ButtonSize,
  ButtonTypes,
} from "shared/ui/Buttons/ButtonIcon";
import ImageRatio, { ImageRatios } from "shared/ui/ImageRatio/ImageRatio";
import Snackbars, {
  SnackbarsActions,
  SnackbarsTypes,
} from "shared/ui/Snackbars/Snackbars";
import PopApp from "shared/ui/Popapp/Pop-up";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className={classNames("App", {}, [theme])}>
      <button onClick={toggleTheme}>toggle theme</button>
      <Component />
      <ButtonIcon size={ButtonSize.LARGE} type={ButtonTypes.PRIMARY} />
      <Button mode="Primary" size="large" state="Default" type="button" onClick={handleOpen} >open Pop-up</Button>
      {
        isOpen ?
          <PopApp
            action="opps-button"
            isOpen={isOpen}
            onClose={handleClose}
            image
            imageSize="small"

          /> : null
      }
      <ProgressBar />
      <ProgressBar />
      <ProgressBar />
      <ProgressBar />
      <ProgressBar />

      <Avatars
        size={AvatarsSize.LARGE}
        source="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?cs=srgb&dl=pexels-pixabay-39866.jpg&fm=jpg"
      />
      <ImageRatio
        ratio={ImageRatios.ONETOONE}
        source="https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg?w=2000"
      />
      <Snackbars
        type={SnackbarsTypes.BOX}
        action={SnackbarsActions.ICON}
        isLeftIcon
        isCaption
        snackbarText="Snackbar Text"
      />


      <Button mode="Primary" size="large" state={'Default'} type="button"  >
        Button
      </Button>
    </div>
  );
};

export default App;
