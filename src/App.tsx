import { Component } from "components/Component";
import { useTheme } from "providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

const App = () => {
  const { theme } = useTheme()
  return (
    <div className={classNames('App', {}, [theme])}>
      hello world
      <Component />
    </div>
  );
}

export default App;