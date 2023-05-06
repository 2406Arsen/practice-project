import { Component } from "components/Component";
import Date from "components/Partials/Date/Date";
import Overlay from "components/Partials/Overlay/Overlay";
import SegmentedControls from "components/Partials/SegmentedControls/SegmentedControls";
import TabBars from "components/Partials/TabBars/TabBars";
import Tables from "components/Partials/Tables/Tables";
import Tabs from "components/Partials/Tabs/Tabs";
import Caption from "components/Partials/TextFields/Caption/Caption";
import ErrorMessage from "components/Partials/TextFields/ErrorMessage/ErrorMessage";
import Label from "components/Partials/TextFields/Label/Label";
import { useTheme } from "providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

const App = () => {
  const { theme } = useTheme()
  return (
    <div className={classNames('App', {}, [theme])}>
      hello world
      <Component />
      <br />
      <Caption children="Caption" />
      <br />
      <ErrorMessage children="Error Message" />
      <br />
      <Label children="Lable 1" />
      <br />
      <Tabs children="Menu 1" />
      <br />
      <Tabs children="Menu 2" />
      <br />
      <TabBars children="Title 1" />
      <br />
      <Date children={4} />
      <Date children={5} />
      <br />
      <SegmentedControls children="Segmented" />
      <br />
      <Tables children="Content is here" />
      <br />
      <Overlay />
    </div>
  );
}

export default App;