import { FC, useMemo, useState } from "react";
import cls from "./Tooltip.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "providers/ThemeProvider";
import { getStyleFromPosition } from "./getStyleFromPosition";
import { ReactComponent as Close } from "../../assets/icons/close.svg";

interface TooltipProps {
  position: "top" | "right" | "bottom" | "left";
  text: string;
  children: React.ReactNode;
  className?: string;
  linkHref?: string;
  onClose?: () => void;
}

const Tooltip: FC<TooltipProps> = (props) => {
  const { 
    children, 
    position, 
    text, 
    className, 
    linkHref, 
    onClose 
  } = props;

  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const { theme } = useTheme();

  const mods = useMemo(() => ({}), []);

  const tooltipClasses = classNames(cls.wrapper, mods, [
    className,
    cls[theme]
  ]);

  const handleTargetMouseEnter = () => {
    setIsHovered(true);
    setShowTooltip(true);
  };

  const handleTargetMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTargetFocus = () => {
    setIsFocused(true);
    setShowTooltip(true);
  };

  const handleTooltipMouseEnter = () => {
    setIsHovered(true);
  };

  const handleTooltipMouseLeave = () => {
    setIsHovered(false);
    setShowTooltip(false);
  };

  return (
    <div className={tooltipClasses}>
      <div
        className={cls.target}
        onMouseEnter={handleTargetMouseEnter}
        onMouseLeave={handleTargetMouseLeave}
        onFocus={handleTargetFocus}
      >
        {children}
      </div>
      {showTooltip && (
        <div
          className={cls.centerContainer}
          data-position={position}
          style={getStyleFromPosition(position)}
          onMouseEnter={handleTooltipMouseEnter}
          onMouseLeave={handleTooltipMouseLeave}
          // onBlur={}
        >
          <div className={cls.tooltipBoxWrapper}>
            <div className={cls.tooltipBox}>
              <span className={cls.tooltipText}>
                {text}
                {linkHref && (
                  <a href={linkHref} className={cls.tooltipLink}>
                    {linkHref}
                  </a>
                )}
              </span>
              {onClose && (
                <button className={cls.closeButton} onClick={onClose}>
                  <Close className={cls.icon} />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Tooltip;
