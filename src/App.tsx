import { Component } from "components/Component";
import { useTheme } from "providers/ThemeProvider";
import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import Button from "shared/ui/Button/button";
import image from "../src/shared/ui/Popapp/Image Placeholder (Copy paste here).jpg"
import {
  ButtonIcon,
  ButtonSize,
  ButtonTypes,
} from "shared/ui/Buttons/ButtonIcon";
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
  console.log(isOpen);
  const options = ["Option 1", "Option 2", "Option 3"];
  const handleOptionSelect = (option: string) => {
    console.log(`Selected option: ${option}`);
  };
  return (
    <div className={classNames("App", {}, [theme])}>
      <button onClick={toggleTheme}>toggle theme</button>
      <Component />
      <ButtonIcon size={ButtonSize.LARGE} type={ButtonTypes.PRIMARY}/>
      <Button mode="Primary" size="large" state="Default" type="button" onClick={handleOpen} >open Pop-up</Button>
      {isOpen ? <PopApp action="remove-item" isOpen={isOpen} onClose={handleClose} image imageSize="large" /> : null}
    </div>
  );
};

export default App;
