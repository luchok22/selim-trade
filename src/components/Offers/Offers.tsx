import React from "react";
import Image from "next/image";
import scss from "./Offers.module.scss";
import img1 from "/src/assets/Offers/image_1.jpg";
import img3 from "/src/assets/Offers/image_3.jpg";
import img2 from "/src/assets/Offers/image_2.jpg";
import img4 from "/src/assets/Offers/image_4.jpg";
import img5 from "/src/assets/Offers/image_5.jpg";

const Offers = () => {
  return (
    <div className={scss.ofers_bg}>
      <div className="container">
        <h2 className={scss.ourTeam__text}>Мы предлагаем</h2>
        <div className={scss.images}>
          <div className="img-col_left">
            <Image
              src={img1}
              alt="img"
              width={480}
              height={250}
              className={scss.img1}
            />
            <Image
              src={img3}
              alt="img"
              width={480}
              height={250}
              className={scss.img2}
            />
          </div>
          <div className="img-col_center">
            <Image
              src={img2}
              alt="img"
              width={383}
              height={258}
              className={scss.img3}
            />
            <Image
              src={img4}
              alt="img"
              width={383}
              height={258}
              className={scss.img4}
            />
          </div>
          <div className="img-col_right">
            <Image
              src={img5}
              alt="img"
              width={394}
              height={544}
              className={scss.img5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
