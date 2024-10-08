/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable global-require */
module.exports = {
  // browser target config see in .browserslistrc
  parser: "postcss-scss",
  plugins: [
    require("postcss-hover-media-feature"), // it fixes twice-click issue on buttons with hover effect on IOS: https://css-tricks.com/annoying-mobile-double-tap-link-issue/
    require("autoprefixer"), // it adds vendor prefixes ::placeholder => ::-webkit-input-placeholder, ::-moz-placeholder etc. https://github.com/postcss/autoprefixer
    // it adds normalize.css and sanitize.css. https://github.com/csstools/postcss-normalize
    // forceImport: true, //it adds twice
    require("postcss-normalize")({ allowDuplicates: false }),
  ],
};
