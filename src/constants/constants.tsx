import { DropdownAndCategory } from "../types/types";

export const data: Array<DropdownAndCategory> = [
  {
    id: 1,
    link: "PC",
  },
  {
    id: 2,
    link: "Playstation5",
  },
  {
    id: 3,
    link: "XBox",
  },
];
export const links = {
  home: "/",
  products: "/products",
  about: "/about",
  signIn: "/signIn",
  signUp: "/signUp",
};
const menuData = {
  home: {
    label: "Home",
    path: "/",
  },
  products: {
    base: {
      label: "Products",
      path: "/products",
    },
    xbox: {
      label: "XBOX",
      path: "/products/xbox",
    },
    pc: {
      label: "PC",
      path: "/products/pc",
    },
  },
  about: {
    label: "About",
    path: "/about",
  },
  signIn: {
    label: "Sign In",
    path: "/signIn",
  },
  signUp: {
    label: "Sign Up",
    path: "/signUp",
  }

};

export const headerData = [
  menuData.home,
  {
    ...menuData.products.base,
    sub: [menuData.products.pc, menuData.products.xbox],
  },
  menuData.about,
  menuData.signIn,
  menuData.signUp
];


