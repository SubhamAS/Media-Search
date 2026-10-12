import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_API;
const PIXABAY_KEY = import.meta.env.VITE_PIXABAY_API;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_API;

export async function fetchPhotos(query, page = 1, per_page = 20) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });
  return response.data
}

export async function fetchVideos(query, page = 1, per_page = 10) {
  const response = await axios.get("https://pixabay.com/api/videos/", {
    params: { key: PIXABAY_KEY, q:query, page, per_page },
  });
  return response.data
}

export async function fetchGIF(query, limit=10, rating) {
  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: { api_key: GIPHY_KEY, q:query, rating, limit, rating:"g" },
  });
  return response.data
}
