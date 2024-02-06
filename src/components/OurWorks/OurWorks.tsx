import React from "react";
import style from "./OurWorks.module.scss";
import ReusableComponent from "@/components/ReusableComponent/ReusableComponent";
import Image from "next/image";
import image1 from "../../assets/OurWorks/image1.png";
import image2 from "../../assets/OurWorks/image2.png";
import image3 from "../../assets/OurWorks/image3.png";
import leftArr from "../../assets/OurWorks/leftArrow.png";
import rightArr from "../../assets/OurWorks/rightArrow.png";

const OurWorks = () => {
  return (
    <div className={style.carousel}>
      <ReusableComponent title={"Наши работы"}>
        <div className={style.carousel}>
          <Image src={image1} alt="ourworks1" width={341} height={364}/>
          <div className={style.main_picture}>
          <button>
            <Image src={leftArr} alt="leftArrow" width={45} height={45} />
          </button>
          <Image src={image2} alt="ourworks2" width={439} height={432} />
          <button>
            <Image src={rightArr} alt="rightArrow" width={45} height={45} />
          </button>
          </div>
          <Image src={image3} alt="ourworks3" width={341} height={364} />
        </div>
        </ReusableComponent>
    </div>
  );
};

export default OurWorks;
