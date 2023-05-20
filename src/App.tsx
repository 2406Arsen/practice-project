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
import TextFields, { TextFieldsState } from "shared/ui/Inputs/TextFields/TextFields";
import PhoneNumberInput from "shared/ui/Inputs/PhoneInput/PhoneNumberInput";
import SelectInput from "shared/ui/Inputs/SelectInput/SelectInput";
import LocationInput from "shared/ui/Inputs/LocationInput/LocationInput";
import Tooltip from "shared/ui/ToolTips/ToolTips";
import ImageRatio, { ImageRatios } from "shared/ui/ImageRatio/ImageRatio";
import Snackbars, {
  SnackbarsActions,
  SnackbarsTypes,
} from "shared/ui/Snackbars/Snackbars";
import PopApp from "shared/ui/Pop-up/Pop-up";
import Date from "shared/ui/Partials/Date/Date";
import Overlay from "shared/ui/Partials/Overlay/Overlay";
import SegmentedControls from "shared/ui/Partials/SegmentedControls/SegmentedControls";
import TabBars from "shared/ui/Partials/TabBars/TabBars";
import Tables from "shared/ui/Partials/Tables/Tables";
import Tabs from "shared/ui/Partials/Tabs/Tabs";
import Checkbox from "shared/ui/Checkbox/Checkbox";
import RadioButton from "shared/ui/RadioButton/RadioButton";
import Stepper from "shared/ui/Stepper/Stepper";
import Switch from "shared/ui/Switch/Switch";
import Table from "shared/ui/Table/Table";
import TableSmallButton from "shared/ui/Table/TableItem/TableSmallButton";
import { Link } from "react-router-dom";
import { TableLink } from "shared/ui/Table/TableItem/TableLink";


const App = () => {
  const { theme, toggleTheme } = useTheme();
  const [textFieldValue, setTextFieldValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const handleChangeTextField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextFieldValue(event.target.value);
  };

  const handleLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocationValue(event.target.value);
  };

  const handleChangePhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneValue(event.target.value);
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
            isOpen={isOpen}
            onClose={handleClose}
          > <Component/></PopApp> : null
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

      <Tooltip 
          position="bottom" 
          text="Tap to manage" 
          // onClose={() => ""}
          linkHref="Link"
        >
        Hover
      </Tooltip>

      <TextFields
        state={TextFieldsState.FOCUSED}
        onChange={handleChangeTextField}
        label=" Text Label "
        value={textFieldValue}
        placeholder="Placeholer text"
        // disabled
        // error
      />
      <PhoneNumberInput
        state={TextFieldsState.FOCUSED}
        onChange={handleChangePhoneInput}
        label=" Text Label "
        value3={phoneValue}
        // disabled
        // error
      />
      <LocationInput
        state={TextFieldsState.FOCUSED}
        onChange={handleLocation}
        value={locationValue}
        placeholder="Search Location"
        label="Text Label"
        icon
        // disabled
        // error
      />
      <SelectInput
        state={TextFieldsState.FOCUSED}
        label=" Text Label "
        // disabled
        // error
      />



      <Date date={1000}/>
      <Overlay />
      <SegmentedControls content="hello"/>
      <TabBars title="title"/>
      <Tables content="content" />
      <Tabs menu="menu"/>
      <Switch disabled/>
      <RadioButton disabled/>
      <Checkbox disabled/>
      <Stepper size={ButtonSize.LARGE}/>
      
      <Table />
      <Table rightPart={<TableLink to=""/>}/>
      <Table rightPart={<RadioButton/>}/>
      <Table rightPart={<TableSmallButton/>}/>
      <Table rightPart={<Switch/>}/>
      <br />
      <br />
      <Table leftPart="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0DywNbzehIh-L7BZcTMq4k3V6xIyRbXOCMOgK83GGKQ&s"/>
      <Table 
            leftPart="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0DywNbzehIh-L7BZcTMq4k3V6xIyRbXOCMOgK83GGKQ&s"
            rightPart={<TableLink to=""/>}
            isCaption={true}
        />  
      <Table 
            leftPart="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0DywNbzehIh-L7BZcTMq4k3V6xIyRbXOCMOgK83GGKQ&s"
            rightPart={<RadioButton/>}
            isCaption={true}
        />
      <Table 
            leftPart="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0DywNbzehIh-L7BZcTMq4k3V6xIyRbXOCMOgK83GGKQ&s"
            rightPart={<TableSmallButton/>}
            isCaption={true}
        />
      <Table 
            leftPart="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0DywNbzehIh-L7BZcTMq4k3V6xIyRbXOCMOgK83GGKQ&s"
            rightPart={<Switch/>}
            isCaption={true}
        />

    </div>
  );
};

export default App;

