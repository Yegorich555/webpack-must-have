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
  profile: "/profile",
};
const menuData = {
  home: {
    id: 0,
    label: "Home",
    path: "/",
  },
  products: {
    base: {
      id: 1,
      label: "Products",
      path: "/products",
    },
    xbox: {
      id: 2,
      label: "XBOX",
      path: "/products/xbox",
    },
    pc: {
      id: 3,
      label: "PC",
      path: "/products/pc",
    },
  },
  about: {
    id: 4,
    label: "About",
    path: "/about",
  },
};

export const headerData = [
  menuData.home,
  {
    ...menuData.products.base,
    sub: [menuData.products.pc, menuData.products.xbox],
  },
  menuData.about,
];
