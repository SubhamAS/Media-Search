import { Route, Routes } from "react-router-dom";
import ResultGrid from "./components/ResultGrid";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import CollectionPage from "./Pages/CollectionPage";

const App = () => {
  return (
    <div className="min-h-screen w-full text-white bg-[#1C2321]">
      <SearchBar />
      <Tabs />
      <Routes>
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
      <ResultGrid />
    </div>
  );
};

export default App;
