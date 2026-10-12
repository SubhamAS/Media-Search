import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/slices/searchSlice";
const SearchBar = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(setQuery(text));

    setText("");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex p-10 gap-10 bg-blue-950"
      >
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="px-5 py-3 bg-[#EAEAEA] rounded w-full text-gray-600 outline-none"
          type="text"
          placeholder="Search Images, Videos or GIF's..."
        />
        <button className="bg-[#EAEAEA] px-5 py-3 rounded text-gray-600 active:scale-95 cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
