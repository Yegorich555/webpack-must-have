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
    id: 1,
    label: "Home",
    path: "/",
  },
  products: {
    base: {
      id: 2,
      label: "Products",
      path: "/products",
    },
    xbox: {
      id: 3,
      label: "XBOX",
      path: "/products/xbox",
    },
    pc: {
      id: 4,
      label: "PC",
      path: "/products/pc",
    },
  },
  about: {
    id: 5,
    label: "About",
    path: "/about",
  },
  signIn: {
    id: 6,
    label: "Sign In",
    path: "/signIn",
  },
  signUp: {
    id: 7,
    label: "Sign Up",
    path: "/signUp",
  },
};

export const headerData = [
  menuData.home,
  {
    ...menuData.products.base,
    sub: [menuData.products.pc, menuData.products.xbox],
  },
  menuData.about,
  menuData.signIn,
  menuData.signUp,
];
