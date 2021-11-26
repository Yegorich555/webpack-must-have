import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import footer from "./footer.module.scss";
import links from "../../constants/constants";

const Footer: React.FunctionComponent = function () {
  const arrayLinks: Array<string> = [
    "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/08/The-Pokemon-Company.jpg?q=50&fit=contain&w=960&h=500&dpr=1.5",
    "https://2.bp.blogspot.com/-9g0c7_U-mIQ/XChGX5EMBFI/AAAAAAAAI2c/UaX3U66x_u4i5RVZd1OXldttDbTIkF0cwCLcBGAs/s1600/zwf_vts_rgb_rev_thumb.png",
    "https://avatars.mds.yandex.net/i?id=2a0000017a079101cfdf08bea354b57bd163-3767031-images-thumbs&n=13",
    "https://storage.myseldon.com/news_pict_35/3567D817377C933ED0A24897CDB0F103",
  ];
  return (
    <footer>
      <Link to={links.home}>Game Store</Link>
      <ul className={footer.iconBlock}>
        {arrayLinks.map((elem, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={i}>
            <img src={elem} alt={`Picture ${i}`} />
          </li>
        ))}
      </ul>
    </footer>
  );
};
export default Footer;
