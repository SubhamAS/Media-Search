import React, { useEffect } from "react";
import { fetchGIF, fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
  setError,
  setLoading,
  setResult,
  clearResult,
} from "../redux/slices/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";
const ResultGrid = () => {
  const { query, loading, result, error, activeTab } = useSelector(
    (store) => store.search,
  );
  const dispatch = useDispatch();
  useEffect(
    function () {
      const getData = async () => {
        const searchTerm = query.trim() || "random"
        try {
          dispatch(setLoading());
          let data = [];
          if (activeTab == "photos") {
            let response = await fetchPhotos(searchTerm);
            data = response.results.map((item) => ({
              id: item.id,
              type: "image",
              title: item.alt_description,
              thumbnail: item.urls.small,
              src: item.urls.full,
            }));
          }
          if (activeTab == "videos") {
            let response = await fetchVideos(searchTerm);
            data = response.hits.map((item) => ({
              id: item.id,
              type: "video",
              title: item.name,
              thumbnail: item.videos.small.thumbnail,
              src: item.videos.large.url,
            }));
            console.log(response.hits);
          }
          if (activeTab == "gif") {
            let response = await fetchGIF(searchTerm);
            data = response.data.map((item) => ({
              id: item.id,
              type: "gif",
              title: item.title,
              src:
                item.images.original?.url || item.images.downsized_large?.url,
            }));
            console.log(response.data);
          }
          dispatch(setResult(data));
        } catch (err) {
          dispatch(setError(err));
        }
      };

      getData();
    },
    [query, activeTab],
  );

  if (error)
    return (
      <div className="h-full flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">Error</h1>
      </div>
    );

  if (loading)
    return (
      <div className="h-full flex items-center justify-center">
        <h1 className="text-2xl translate-y-40 font-semibold">Loading...</h1>
      </div>
    );

  return (
    <div className="flex flex-wrap gap-5 overflow-auto justify-center px-10 pb-10 h-full">
      {result.map((item, idx) => {
        return (
          <div key={idx}>
              <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
