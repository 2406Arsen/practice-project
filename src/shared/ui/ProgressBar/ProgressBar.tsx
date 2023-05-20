import { useState, useEffect } from "react";
import cls from "./ProgressBar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "providers/ThemeProvider";
// import "./ProgressBar.css";

export const ProgressBar = () => {
  const [progress, setProgress] = useState(50);
  const { theme } = useTheme()

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 1500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  return (
    <div className={classNames(cls.container, {}, [cls[theme]])}>
      <div className={cls.progressBar}>
        <div
          className={cls.progressBarFill}
          style={{ width: `${progress}%` }}
        />
      </div>
      <div
        className={cls.progressLabel}
        style={{ color: "var(--color-primary-base)" }}
      >
        {progress}%
      </div>
    </div>
  );
};
