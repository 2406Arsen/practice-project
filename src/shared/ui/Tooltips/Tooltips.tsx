import { FC, useState } from "react";

import cls from "./Tooltips.module.scss";

interface ToolTipsProps {
  text: string;
  type: TooltipsTypes;
  position: ToolTipsPosition;
  icon?: string;
  link?: string;
  children: React.ReactNode;
}

export enum TooltipsTypes {
  BASIC = "basic",
  ICON = "icon",
  TEXTLINK = "textlink",
}

export enum ToolTipsPosition {
  TOP = "top",
  BOTTOM = "bottom",
  RIGHT = "right",
  LEFT = "left",
}

const ToolTips: FC<ToolTipsProps> = ({
  text,
  type,
  position,
  icon,
  link,
  children,
}) => {
  const [isElementClicked, setIsElementClicked] = useState(false);

  const clickHandler = () => {
    setIsElementClicked((prev) => !prev);
  };

  return (
    <div onClick={clickHandler} className={cls.tooltip}>
      {children}
      {isElementClicked && (
        <span className={`${cls.tooltipText} ${cls.top}`}>{text}</span>
      )}
    </div>
  );
};

export default ToolTips;
