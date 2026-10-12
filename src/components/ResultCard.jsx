import React from "react";
import { useDispatch } from "react-redux";
import { savedItems } from "../redux/slices/collectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(savedItems(item));
  };
  return (
    <div className="h-55 w-65 relative rounded-xl overflow-hidden bg-white">
      <div className="h-full">
        <a href={item.src} target="_blank">
          {item.type == "image" ? (
            <img
              className="h-full w-full object-cover object-center"
              src={item.src}
            />
          ) : (
            ""
          )}
          {item.type == "video" ? (
            <video
              className="h-full w-full object-cover object-center"
              autoPlay
              muted
              loop
              src={item.src}
            />
          ) : (
            ""
          )}
          {item.type == "gif" ? (
            <img
              className="h-full w-full object-cover object-center"
              src={item.src}
            />
          ) : (
            ""
          )}
        </a>
      </div>
      <div
        id="bottom"
        className="absolute flex justify-between items-center bottom-0 w-full px-4 py-2"
      >
        <h2 className=" font-semibold leading-tight h-10 overflow-hidden capitalize text-white">
          {item.title}
        </h2>
        <button className="bg-indigo-900 px-2 py-1 rounded text-sm font-medium active:scale-95 cursor-pointer">
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
