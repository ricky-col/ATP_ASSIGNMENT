function CountryCard({ country }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
      <img 
        src={country.flags.png} 
        alt={country.name.common} 
        className="w-full h-40 object-cover" 
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{country.name.common}</h2>
        {/* it retrives country name  */}
        <p className="text-gray-600 text-sm"><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
        <p className="text-gray-600 text-sm"><strong>Region:</strong> {country.region}</p>
        <p className="text-gray-600 text-sm"><strong>Population:</strong> {country.population.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default CountryCard;