import { useSelector, useDispatch } from "react-redux";
import { removedSavedItem } from "../redux/slices/collectionSlice";
import ResultCard from "../components/ResultCard";

const CollectionPage = () => {
  const dispatch = useDispatch();

  const savedItems = useSelector((store) => store.collection.savedItems);

  return (
    <div className="min-h-screen bg-[#1b2623] px-6 py-8 text-white">
      <h1 className="mb-8 text-3xl font-bold">My Collection</h1>

      {savedItems.length === 0 ? (
        <p className="text-gray-400">
          No saved media yet. Save some images, videos, or GIFs!
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {savedItems.map((item) => (
            <div key={`${item.type}-${item.id}`}>
              <ResultCard item={item} />

              <button
                onClick={() =>
                  dispatch(
                    removedSavedItem({
                      id: item.id,
                      type: item.type,
                    }),
                  )
                }
                className="mt-2 rounded bg-red-600 px-3 py-2"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionPage;
