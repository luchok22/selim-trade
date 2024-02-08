import React, { FC, useMemo } from "react";
import scss from "./Footer.module.scss";
import logo from "../../assets/Footer/logo.png";
import insta from "../../assets/Footer/instagram.png";
import whatsapp from "../../assets/Footer/wa.png";
import map from "../../assets/Footer/map.png"
import Link from "next/link";
import Image from "next/image";

const Footer: FC = () => {
  const menuItems = [
    { title: "Главная", url: "/" },
    { title: "О нас", url: "/services" },
    { title: "Услуги", url: "/services" },
    { title: "Работы", url: "/news" },
    { title: "Отзывы", url: "/WeWork" },
    { title: "Новости", url: "/WeWork" },
  ];
  const menuItemsMap = useMemo(
    () =>
      menuItems.map((item, index) => (
        <li key={index}>
          <Link href={item.url}>{item.title}</Link>
        </li>
      )),
    []
  );

  return (
    <nav className={scss.nav}>
      <div className={scss.navbar}>
        <div className={scss.nav__container}>
          <div className={scss.left_side}>
            <Image src={logo} alt="logo" width={100} />
            <p className={scss.socialText}>СОЦИАЛЬНЫЕ СЕТИ</p>
            <div className={scss.social }>
              <Link
                href="https://www.instagram.com/selimtrade/"
                target="__blank"
              >
                <Image src={insta} alt="instagram" width={36} />
              </Link>
              <Link
                href="https://www.instagram.com/selimtrade/"
                target="__blank"
              >
                <Image src={whatsapp} alt="whatsapp" width={36} />
              </Link>
            </div>
          </div>
          <ul className={scss.nav__ul}>{menuItemsMap}</ul>
          <div className={scss.contacts}>
            <div className={scss.up_side}>
                <p>РЕЖИМ РАБОТЫ</p>
                <p>Пн-Пт 8:30–18:30</p>
                <p>Суббота 8:30–14:00</p>
            </div>
            <div className={scss.down_side}>
                <p>ТЕЛЕФОН</p>
                <a href="tel:+996552570755">+996 (552) 57 07 55</a>
                <a href="tel:+996500888051">+996 (500) 88 80 51</a>
                <a href="tel:+996772327676">+996 (772) 32 76 76</a>
            </div>
          </div>
          <div className={scss.maps_navigation}>
          <Link
                href="https://www.google.com/maps/place/selim.kg/@42.848181,74.587368,17z/data=!3m1!4b1!4m6!3m5!1s0x389ec9d8319b4ead:0x35283f9b848f49a!8m2!3d42.848181!4d74.587368!16s%2Fg%2F11gdkx3jh6?entry=ttu"
                target="__blank"
              >
                <Image src={map} alt="navigation" width={580} />
              </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
