import { FC } from "react";
import cls from "./ImageRatio.module.scss";

interface ImageRatioProps {
  ratio: ImageRatios;
  source: string;
}

export enum ImageRatios {
  ONETOONE = "oneToOne",
  THREETOTWO = "threeToTwo",
  FOURTOTHREE = "fourToThree",
  SIXTEENTONINE = "sixteenToNine",
  TWOTOTHREE = "twoToThree",
  THREETOFOUR = "threeToFour",
  NINETOSIXTEEN = "nineToSixteen",
}

const ImageRatio: FC<ImageRatioProps> = ({ ratio, source }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${source})`,
      }}
      className={`${cls.img} ${cls[ratio]}`}
    />
  );
};

export default ImageRatio;
