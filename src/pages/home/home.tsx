import React, { useEffect, useState } from "react";

const Home: React.FunctionComponent = function () {
  const [input, setInput] = useState({
    search: "",
  });

  function handleChange(e: { target: { name: string; value: unknown } }) {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => {
        console.log(data.json());
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div>
        <input type="text" name="search" value={input.search} onChange={handleChange} />
      </div>
      <div />
      <div />
    </div>
  );
};
export default Home;
