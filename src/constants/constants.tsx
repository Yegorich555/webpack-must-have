import { Data } from "@/types/types";

const links = {
  home: "/home",
  product: "/product",
  about: "/about",
  signIn: "/signIn",
  signUp: "/signUp",
};
const data: Array<Data> = [
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
export { links, data };
