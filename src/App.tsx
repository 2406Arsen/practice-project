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
import PhoneeInput from "shared/ui/PhoneInput/PhoneeInput";
import SelectInput from "shared/ui/SelectInput/SelectInput";
import TextFields, { TextFieldsState } from "shared/ui/TextFields/TextFields";
import Tooltip from "shared/ui/ToolTips/ToolTips";
import ImageRatio, { ImageRatios } from "shared/ui/ImageRatio/ImageRatio";
import Snackbars, {
  SnackbarsActions,
  SnackbarsTypes,
} from "shared/ui/Snackbars/Snackbars";
import PopApp from "shared/ui/Popapp/Pop-up";
import Date from "shared/ui/Partials/Date/Date";
import Overlay from "shared/ui/Partials/Overlay/Overlay";
import SegmentedControls from "shared/ui/Partials/SegmentedControls/SegmentedControls";
import TabBars from "shared/ui/Partials/TabBars/TabBars";
import Tables from "shared/ui/Partials/Tables/Tables";
import Tabs from "shared/ui/Partials/Tabs/Tabs";

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
      <TextFields
        state={TextFieldsState.DEFAULT}
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


      <Date date={1000}/>
      <Overlay />
      <SegmentedControls content="hello"/>
      <TabBars title="title"/>
      <Tables content="content" />
      <Tabs menu="menu"/>
    </div>
  );
};

export default App;

