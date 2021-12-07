interface Rating {
  rate: number;
  count: number;
}
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  date: string;
  rating: Rating;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface DropdownAndCategory {
  id: number;
  link: string;
}
interface subObj {
  id: number;
  label: string;
  path: string;
};
interface headerObject {
  id : number;
  label?: string;
  path?: string | any;
  sub?: Array<subObj>;
};
export interface HeaderItemTypes {
  item: headerObject;
  root: boolean;
}

export interface HeaderListTypes {
  headerMenuArr: Array<headerObject>;
  root: boolean;
}
