import { useEffect, useRef } from "react";
function SearchBar({ onSearch, query }) {
  const inputRef = useRef(null);

  // Auto-focus on page load
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="max-w-md mx-auto mb-10">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search for a country..."
        className="w-full p-3 rounded-lg border shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
        value={query}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;