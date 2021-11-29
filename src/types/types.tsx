export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  date: string;
  rating: { rate: number; count: number };
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Data {
  id: number;
  link: string;
}
