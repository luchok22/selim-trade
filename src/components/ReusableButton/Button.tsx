import React from "react";
import scss from "./Button.module.scss";
import Image from "next/image";
import image from "../../assets/ReusableButton/btn.svg";
interface Type {
  title: string;
  img?: boolean;
}
const Button = ({ title, img }: Type) => {
  const imgElement = img && (
    <Image src={image} width={30} height={30} alt="img" />
  );
  return (
    <button className={scss.button}>
      {imgElement}
      {title}
    </button>
  );
};

export default Button;
