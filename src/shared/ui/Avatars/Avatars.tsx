import { FC } from "react";

import cls from "./Avatars.module.scss";

interface AvatarsProps {
  source: string;
  size: string;
}

export enum AvatarsSize {
  LARGE = "large",
  MEDIUM = "medium",
  SMALL = "small",
  TINY = "tiny",
}

const Avatars: FC<AvatarsProps> = ({ source, size }) => {
  return (
    <div
      className={`${cls.userImage} ${cls[size]}`}
      style={{
        backgroundImage: `url('${source}')`,
      }}
    />
  );
};

export default Avatars;
