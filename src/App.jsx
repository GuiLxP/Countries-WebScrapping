import { useEffect, useState } from "react";

function App() {
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/countries")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setPaises(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Países</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {paises.map((pais, index) => (
          <div key={index} className="p-4 border border-2 rounded shadow hover:bg-gray-100 hover:border-gray-400 hover:shadow-lg transition-all duration-300">
            <img src={pais.images} alt={pais.name} className="w-12 mb-2" />
            <h2 className="text-lg font-semibold">{pais.name}</h2>
            <p>População: {pais.population.toLocaleString()}</p>
            <a href={`https://pt.m.wikipedia.org${pais.details}`} target="_blank" className="text-blue-500">
              See Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
