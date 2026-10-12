import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/slices/searchSlice";
import { useNavigate } from "react-router-dom";

const Tabs = () => {
  const tabs = ["photos", "videos", "gif"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-5 p-10">
        {tabs.map(function (elem, idx) {
          return (
            <button
              className={`${activeTab == elem ? "bg-blue-950" : "bg-gray-700"} px-5 py-2 uppercase transition rounded active:scale-95 cursor-pointer`}
              key={idx}
              onClick={() => {
                dispatch(setActiveTab(elem));
              }}
            >
              {elem}
            </button>
          );
        })}
      </div>
      <div className="pr-5">
        <button
          onClick={() => {
            navigate("/collection");
          }}
          className="bg-gray-700 px-5 py-2 uppercase rounded active:scale-95 cursor-pointer"
        >
          Saved
        </button>
      </div>
    </div>
  );
};

export default Tabs;
