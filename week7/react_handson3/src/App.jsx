import {useState, useEffect, useRef} from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  
  // useRef to persist the timer ID for debouncing without re-renders
  const debounceTimer = useRef(null);

  const fetchCountries = async (searchQuery) => {
    setLoading(true);
    setError(null);
    try {
      const url = searchQuery 
        ? `https://restcountries.com/v3.1/name/${searchQuery}`
        : `https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,population,region`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error("Country not found");
      
      const data = await response.json();
      setCountries(data);
    } catch (err) {
      setError(err.message);
      setCountries([]);
    } finally {
      setLoading(false);
    }
  };

  // Initial Fetch on Mount
  useEffect(() => {
    fetchCountries("");
  }, []);

  // Debounced Search Logic
  const handleSearch = (val) => {
    setQuery(val);
    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      fetchCountries(val);
    }, 500); // Wait 500ms after user stops typing
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">🌍 Country Explorer</h1>
      
      <SearchBar onSearch={handleSearch} query={query} />

      {loading && <p className="text-center text-blue-500">Loading countries...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      
      {!loading && !error && <CountryList countries={countries} />}
    </div>
  );
}

export default App;