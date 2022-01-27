import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Products from "@/components/products/products";
import About from "@/components/about";
import Home from "@/components/home";

const Pages: FC = () => (
  <Routes>
    <Route path="/" element={<Home title="Home PAGE hello" />} />
    <Route path="/products" element={<Products title="Products" />} />
    <Route path="/about" element={<About title="About" />} />
    <Route path="*" element={<Home title="Home PAGE hello" />} />
  </Routes>
);

export default Pages;
