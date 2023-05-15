import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const PerfumeAllSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const searchPerfumes = async () => {
    try {
      const response = await axios.get(`http://localhost:8111/api/perfumes?name=${query}`);
      setResults(response.data);
      navigate(`/searchResults?${encodeURIComponent(JSON.stringify(response.data))}`);
    } catch (error) {
      console.error('Error searching perfumes:', error);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    searchPerfumes();
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleInputChange} />
      <button onClick={handleSearchClick}>Search</button>
      <div>
        {results.map((perfume, index) => (
          <div key={index}>
            <Link to={`/perfumeDetail/${perfume.perfumeNumber}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h3>{perfume.name}</h3>
            </Link>
            <p>{perfume.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerfumeAllSearch;
