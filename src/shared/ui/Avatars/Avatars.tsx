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
    <img className={`${cls.userImage} ${cls[size]}`} src={source} alt="" />
  );
};

export default Avatars;
