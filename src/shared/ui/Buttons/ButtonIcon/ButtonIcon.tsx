import { useTheme } from "providers/ThemeProvider";
import { FC, memo, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ButtonIcon.module.scss";

import { ReactComponent as MessageCircleIcon } from "../../../assets/icons/message-circle.svg";

export enum ButtonTypes {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  OUTLIINE = "outline",
  TRANSPARENT = "transparent",
}
export enum ButtonSize {
  LARGE = "large",
  SMALL = "small",
}

interface ButtonIconProps {
  className?: string;
  type?: ButtonTypes;
  disabled?: boolean;
  size?: ButtonSize;
}

const ButtonIcon: FC<ButtonIconProps> = memo((props) => {
  const {
    className,
    type = ButtonTypes.OUTLIINE,
    disabled,
    size = ButtonSize.LARGE,
  } = props;
  const { theme } = useTheme();

  const mods = useMemo(() => ({}), []);

  return (
    <button
      className={classNames(cls.ButtonIcon, mods, [
        className,
        cls[theme],
        cls[type],
        cls[size],
      ])}
      disabled={disabled}
    >
      <MessageCircleIcon />
    </button>
  );
});

export default ButtonIcon;
