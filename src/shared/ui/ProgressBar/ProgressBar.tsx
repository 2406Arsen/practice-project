import React, { useState, useMemo, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProgressBar.module.scss";

// const ProgressBar = () => {
//   const [progress, setProgress] = useState(0);

//   return (
//     <div>
//       <div className="progress-bar">
//         <div
//           className="progress-bar-fill"
//           style={{ width: `${progress}%`, backgroundColor: "black" }}
//         >
//           Progress Bar
//         </div>
//       </div>
//       <div progress-label></div>
//     </div>
//   );
// };

// export default ProgressBar;

export enum ProgressBarFill {
  fill1 = 10,
}

export enum ProgressBarMode {
  DARK = "dark",
  LIGHT = "light",
}

interface ProgressBarProps {
  className?: string;
  mode?: ProgressBarMode;
  fill?: number;
}

const ProgressBar: FC<ProgressBarProps> = (props) => {
  const {
    className,
    mode = ProgressBarMode.LIGHT,
    fill = ProgressBarFill.fill1,
  } = props;

  const mods = useMemo(() => ({}), []);

  return (
    <div
      className={classNames(cls.ProgressBar, mods, [
        className,
        cls[mode],
        cls[fill],
      ])}
    ></div>
  );
};

export default ProgressBar;
