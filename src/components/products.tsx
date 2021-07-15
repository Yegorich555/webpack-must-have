interface ProductsProps {
  iMadeError: boolean;
  children?: React.ReactChild | React.ReactNode;
}

const Products = (props: ProductsProps) => {
  if (props.iMadeError) {
    throw new Error("Smth went wrong");
  }
  return (
    <div>
      <div>{props.iMadeError}</div>
      <div>Products page</div>
      <div>Products page</div>
      <div>Products page</div>
      <div>Products page</div>
      <div>Products page</div>
      <div>Products page</div>
      <div>Products page</div>
      <div>Products page</div>
    </div>
  );
};

export default Products;
