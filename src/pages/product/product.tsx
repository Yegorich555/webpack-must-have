import React from "react";
import { useParams } from "react-router-dom";

const Product: React.FunctionComponent = function () {
  const { platform } = useParams<any>();
  return (
    <>
      <div>Product page</div>
      {platform && <h2>{platform}</h2>}
    </>
  );
};
export default Product;
