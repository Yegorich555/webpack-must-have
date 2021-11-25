import React, { FormEvent, useEffect, useState } from "react";

type inputElems = {
  name: string;
  value: unknown;
};
interface PostResult {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const Home: React.FunctionComponent = function () {
  const [input, setInput] = useState({
    search: "",
  });
  const [postFound, setPostFound] = useState([]);

  function handleChange(e: { target: inputElems }) {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  const searchByName = async (query: string): Promise<PostResult> => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts?title=${query}`);
    // eslint-disable-next-line no-return-await
    return await result.json();
  };
  useEffect(() => {
    (async () => {
      const query = input.search;
      if (query) {
        const response = await searchByName(query);
        setPostFound((prevState) => ({
          ...prevState,
          response,
        }));
      }
    })();
  }, [input.search]);
  console.log(postFound);
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="search" value={input.search} onChange={handleChange} />
        </form>
      </div>
      <div />
      <div />
    </div>
  );
};
export default Home;
