import React, { useState } from "react";
import axios from "axios";
import MoonLoader from "react-spinners/MoonLoader";
import s from "./searchInput.module.scss";
import useDebounce from "../debounceHook/debounceHook";
import { Post } from "@/types/types";

const SearchInput: React.FunctionComponent = function () {
  const [input, setInput] = useState<string>("");
  const [postFound, setPostFound] = useState<Array<Post>>([]);
  const [isExpanded, setExpanded] = useState(false);
  const [isLoading, setLoading] = useState(false);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }
  const expandedContainer = () => {
    setExpanded(true);
  };
  // const lostExpandedContainer = () => {
  //   setExpanded(false);
  //   setInput((prevState) => ({ ...prevState, search: "" }));
  //   setPostFound([]);
  // };
  const postAlert = () => {
    alert("add");
  };
  const prepareUrl = (query: string) => {
    const url = `https://jsonplaceholder.typicode.com/posts?q=${query}`;
    return encodeURI(url);
  };

  const searchName = async () => {
    if (!input || input.trim() === "") return;

    setLoading(true);
    const URL = prepareUrl(input);
    const response = await axios.get(URL).catch((err) => {
      console.log("Error: ", err);
    });
    if (response) {
      setPostFound(response.data);
    }
    setLoading(false);
  };
  useDebounce(input, 500, searchName);

  const printInformation = (arr: Array<Post>) => {
    arr.filter((val: Post) => {
      if (val.title.toLowerCase().includes(input.toLowerCase())) {
        return val;
      }
      return "";
    });
    return arr;
  };

  return (
    <div className={s.search}>
      <input
        type="text"
        name="search"
        placeholder="Search"
        value={input}
        autoComplete="off"
        onChange={handleChange}
        onFocus={expandedContainer}
        // onBlur={lostExpandedContainer}
      />
      {isLoading && <MoonLoader loading color="#000" size={20} />}
      {isExpanded && input !== ""
        ? printInformation(postFound).map((val: Post) => (
            <div key={val.id} onClick={postAlert} className={s.foundElements}>
              {val.title}
            </div>
          ))
        : input === ""}
    </div>
  );
};
export default SearchInput;