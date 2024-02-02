import React from "react";
import scss from "./OurTeam.module.scss";
const OurTeam = () => {
  return (
    <div className={scss.ourTeam}>
      <div className="container">
        <div className={scss.ourTeam__text}>
          <h1>Кто такие Selim trade?</h1>
          <div className={scss.ourTeam__text_desc}>
            <p>МЫ являемся официальным представителем DOORHAN.</p>
            <p>
              Производственно — монтажная компания Selim trade основана в 2003
              году.
            </p>
            <p>
              Основа нашей деятельности — это продажа и монтаж: ворот,
              рольставней, шлагбаумов, рол штор, жалюзи и многое другое.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
