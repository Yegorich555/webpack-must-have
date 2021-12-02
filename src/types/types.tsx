import {ReactChild, ReactFragment, ReactPortal, Dispatch, SetStateAction } from "react";

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

type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
type Dispatcher<S> = Dispatch<SetStateAction<S>>;
type controllEl = () => void;

export interface Signin {
  active: boolean;
  userLoggedIn: any;
  setUserName?: Dispatcher<string>;
}

export interface ElementsForLogInLogOut {
  controllElements?: any;
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

export interface Registration {
  active: boolean;
  userLoggedIn: any;
  setRegistrationModal: Dispatcher<boolean>;
  setUserName?: Dispatcher<string>;
}
