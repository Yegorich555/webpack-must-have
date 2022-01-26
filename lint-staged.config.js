module.exports = {
  // run tsc on changes to TypeScript files
  "*.ts?(x)": () => "npm run lint-ts",
  "*.{css,scss,sass,less}": ["stylelint --fix --cache --allow-empty-input", "prettier --write"],
  "*.{js,ts,json,jsx,tsx}": ["eslint --fix --cache", "prettier --write"],
  // optional: disable prettier for html files (via removing next line)
  "*.html": ["prettier --write"],
  "*.md": ["markdownlint --fix **/*.md --ignore node_modules"],
};
