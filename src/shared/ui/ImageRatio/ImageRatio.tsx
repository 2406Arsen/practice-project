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
  return <img className={`${cls.img} ${cls[ratio]}`} src={source} alt="" />;
};

export default ImageRatio;
