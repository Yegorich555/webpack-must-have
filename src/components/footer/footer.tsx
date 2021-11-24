import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import footer from "./footer.module.css";

const Footer: React.FunctionComponent = function () {
  return (
    <footer>
      <Link to="/home">Game Store</Link>
      <ul className={footer.iconBlock}>
        <li>
          <img
            src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/08/The-Pokemon-Company.jpg?q=50&fit=contain&w=960&h=500&dpr=1.5"
            alt="icon1"
          />
        </li>
        <li>
          <img
            src="https://2.bp.blogspot.com/-9g0c7_U-mIQ/XChGX5EMBFI/AAAAAAAAI2c/UaX3U66x_u4i5RVZd1OXldttDbTIkF0cwCLcBGAs/s1600/zwf_vts_rgb_rev_thumb.png"
            alt="icon2"
          />
        </li>
        <li>
          <img
            src="https://avatars.mds.yandex.net/i?id=2a0000017a079101cfdf08bea354b57bd163-3767031-images-thumbs&n=13"
            alt="icon3"
          />
        </li>
        <li>
          <img src="https://storage.myseldon.com/news_pict_35/3567D817377C933ED0A24897CDB0F103" alt="icon4" />
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
