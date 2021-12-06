import { ReactChild, ReactFragment, ReactPortal, Dispatch, SetStateAction } from "react";

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

interface Card {
  image: string;
  title: string;
  price: number;
}
export interface CardProps {
  item: Card;
}

type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
type Dispatcher<S> = Dispatch<SetStateAction<S>>;
type controllEl = () => void;

type InputObjectRegistration = {
  name: string;
  password: string;
  passwordDuplicate: string;
};

type InputSignInObject = {
  name: string;
  password: string;
};

export interface InputTypes {
  type: string;
  name: string;
  text: string;
  value: any;
  setElem: Dispatcher<InputObjectRegistration> | Dispatcher<InputSignInObject>;
  setCheckField: Dispatcher<boolean>;
  input: InputObjectRegistration | InputSignInObject;
}

export interface Signin {
  active: boolean;
  userLoggedIn: any;
  setUserName?: Dispatcher<string>;
  checkField?: boolean;
  setCheckField?: Dispatcher<boolean>;
  input?: object;
  setInput?: Dispatcher<InputSignInObject>;
}

export interface ElementsForLogInLogOut {
  controllElements?: any;
  userLoggedIn?: any;
  modalActive: boolean;
  setModalActive: Dispatcher<boolean>;
  authorized?: boolean;
  setAuthorizedInfo?: Dispatcher<boolean>;
  checkAuthorized?: boolean;
  setCheckAuthorized?: Dispatcher<boolean>;
  controllModalHeader?: controllEl;
  children?: ReactNode;
  setUserName: Dispatcher<string>;
  userName?: string;
}
export interface HomeType {
  modalActive: boolean;
  userLoggedIn?: any;
  setUserName: Dispatcher<string>;
  children?: ReactNode;
}
export interface Registration {
  active: boolean;
  userLoggedIn: any;
  setRegistrationModal: Dispatcher<boolean>;
  setUserName?: Dispatcher<string>;
  input?: InputObjectRegistration;
  setElem?: Dispatcher<InputObjectRegistration>;
}
export interface AppType {
  modalActive: boolean;
  setModalActive: Dispatcher<boolean>;
  authorized: boolean;
  setAuthorized: Dispatcher<boolean>;
  userName: string;
  setUserName: Dispatcher<string>;
}
interface subObj {
  id: number;
  label: string;
  path: string;
}
interface headerObject {
  id: number;
  label?: string;
  path?: string | any;
  sub?: Array<subObj>;
}
export interface HeaderItemTypes {
  item: headerObject;
  root: boolean;
}

export interface HeaderListTypes {
  headerMenuArr: Array<headerObject>;
  root: boolean;
}
export interface HandleClickTypes {
  [key: string]: any;
  preventDefault: () => void;
}
export interface signInPostDataTypes {
  formData: object;
  userLoggedIn: any;
  setUserName: Dispatcher<string> | undefined;
}
export interface registrationPostDataTypes {
  formData: object;
  redirect: any;
  setUserName: Dispatcher<string> | undefined;
}
