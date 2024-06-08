interface IClassNames {
  [className: string]: string;
}
/** WARNING: these definitions are required because typescript can't resolve import for non-ts/js files */
declare module "*.scss" {
  const content: IClassNames;
  export = content;
}

declare module "*.css" {
  const content: IClassNames;
  export default content;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}
