import { FC, useMemo, useState } from "react";
import { ReactComponent as Icon } from "../../assets/icons/circle.svg";
import cls from "./Snackbars.module.scss";
import { useTheme } from "providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

interface SnackbarsProps {
  type: SnackbarsTypes;
  action?: SnackbarsActions;
  isLeftIcon: boolean;
  isCaption: boolean;
  snackbarText: string;
  className?: string;
}

export enum SnackbarsActions {
  TEXT = "text",
  ICON = "icon",
}

export enum SnackbarsTypes {
  BOX = "box",
  FULL_WIDTH = "fullwidth",
}

const Snackbars: FC<SnackbarsProps> = ({
  isCaption,
  isLeftIcon,
  snackbarText,
  type,
  action,
}) => {
  const [isInputOpened, setIsInputOpened] = useState(false);

  const { theme } = useTheme();

  const mods = useMemo(() => ({}), []);

  const visibleInput = () => setIsInputOpened((prev) => !prev);

  const visibleText = (e: React.KeyboardEvent<HTMLInputElement>) =>
    e.code === "Enter" ? setIsInputOpened((prev) => !prev) : null;

  return (
    <div className={classNames(cls.wrapper, mods, [cls[theme], cls[type]])}>
      {isLeftIcon && (
        <div className={cls.iconDiv}>
          <Icon className={cls.leftIcon} />
        </div>
      )}
      <div className={cls.snackTextDiv}>
        <p className={cls.snackbarText}>{snackbarText}</p>
        {isInputOpened && (
          <input
            className={cls.input}
            type="text"
            onKeyUp={visibleText}
            autoFocus
          />
        )}
        {isCaption && !isInputOpened && (
          <small
            className={classNames(cls.forCaptionText, mods, [cls[theme]])}
            onClick={visibleInput}
          >
            For Caption
          </small>
        )}
      </div>
      {action && (
        <div
          className={cls[action === "text" ? "actionTextDiv" : "actionIconDiv"]}
        >
          {action === "text" ? (
            <button className={cls.actionBtn} onClick={() => {}}>
              Action
            </button>
          ) : (
            <div className={cls.iconDiv}>
              <Icon className={cls.actionIcon} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Snackbars;
