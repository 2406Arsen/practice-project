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
  const { children, position, text, className, linkHref, onClose } = props;

  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const showTooltip = isHovered || isFocused;

  const { theme } = useTheme();

  const mods = useMemo(() => ({}), []);

  const tooltipClasses = classNames(cls.wrapper, mods, [
    className,
    cls[theme]]
  );

  return (
    <div className={tooltipClasses}>
      <div
        className={cls.target}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {children}
      </div>
      {showTooltip && (
        <div
          className={cls.centerContainer}
          data-position={position}
          style={getStyleFromPosition(position)}
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

// import cls from "./ToolTips.module.scss";
// // type TooltipProps = {
// //   text: string;
// //   position: "top" | "bottom" | "left" | "right";
// //   children: React.ReactNode;
// // };
// const Tooltip = ({ text }: any) => {
// //   return (
// //     <div className={cls.Tooltip}>
// //       <div className={cls.customTooltip}>
// //         Hover to see tooltip
// //         <span className={cls.customTooltipText}>{text}</span>
// //       </div>
// //     </div>
// //   );
// };

// export default Tooltip;

//---------------------------------

// import { Tooltip } from "react-tooltip";
// import cls from "./ToolTips.module.scss";
// import { classNames } from "shared/lib/classNames/classNames";

// type TooltipsProps = {
//   text: string;
//   position: "top" | "bottom" | "left" | "right";
// };

// const ToolTips = ({ text, position }: TooltipsProps) => {
//   return (
//     <div className={classNames(cls.ToolTips)}>
//       {/* <Tooltip
//         placement={position}
//         overlay={<span>Tap to manage</span>}
//         overlayClassName={classNames(cls.ToolTipsOverlay)}
//       >
//         <span>{text}</span>
//       </Tooltip> */}
//       <Tooltip/>
//     </div>

//   );
// };

// export default ToolTips;
// ------------------------------
