import { useState } from "react";
import { useDebounced } from "./hooks/useDebounced";
import Nav from "./components/Nav";
import SeriesContainer from "./components/SeriesContainer";

const App = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounced(search, 1000);

  return (
    <div>
      <Nav />
      <div className="max-w-[85rem] px-2 py-6 sm:px-6 lg:px-6 lg:py-6 mx-auto">
        <div className="py-3 px-10">
          <input
            type="text"
            placeholder="Search Movie..."
            className="input w-full "
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <SeriesContainer search={debouncedSearch} />
      </div>
    </div>
  );
};

export default App;
