import React from "react";
import { useParams } from "react-router-dom";

const Product: React.FunctionComponent = function() {
  const { value }:any = useParams();
  console.log(value);
  if (value === ":Playstation5") {
    return <div>This is Playstation 5 category</div>;
  } else if (value === ":XBox") {
    return <div>This is XBox category</div>;
  } else if (value === "PC") {
    return <div>This is PC category</div>;
  } else {
    return <div>This is product page</div>;
  }
};
export default Product;
