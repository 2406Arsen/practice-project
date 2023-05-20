import React, { useState, useEffect } from "react";
// import cls from "./ProgressBar.module.scss";
import "./ProgressBar.css";

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

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
    <div className="container">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div
        className="progress-label"
        style={{ color: "var(--color-primary-base)" }}
      >
        {progress}%
      </div>
    </div>
  );
};
