module.exports = {
  presets: [
    "@babel/preset-react", // optional: react: this resolves react-files (jsx, tsx)
    // doesn't required because ts-loader in use // "@babel/preset-typescript", // allows  to use TypeScript
    "@babel/preset-env", // compiles your js according with .browserslistrc
  ],
  plugins: [
    "jsx-classnames-advanced", // optional-react: this resolves className={object}
  ],
};
