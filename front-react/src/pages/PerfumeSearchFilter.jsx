import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getTopBrands } from '../api/Perfume';


const PerfumeSearchFilter = () => {
  const [brandIdentifier, setBrandIdentifier] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [gender, setGender] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [brands, setBrands] = useState([]); // 상위 브랜드 저장을 위한 state

  useEffect(() => {
    getTopBrands().then(setBrands); // 컴포넌트 마운트 시 상위 브랜드 가져오기
  }, []);

  const searchPerfumes = async () => {
    try {
      const response = await axios.get('http://localhost:8111/perfumes/search', {
        params: {
          brandIdentifier,
          minPrice,
          maxPrice,
          gender
        }
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <p>Brand</p>
        {brands.map((brand, index) => (
          <label key={index}>
            <input
              type="radio"
              value={brand.name}
              checked={brandIdentifier === brand.name}
              onChange={() => setBrandIdentifier(brand.name)}
            />
            {brand.name}
          </label>
        ))}
        <label>
          <input
            type="radio"
            value="etc"
            checked={brandIdentifier === "etc"}
            onChange={() => setBrandIdentifier("etc")}
          />
          Etc
        </label>
      </div>
      <div>
        <label htmlFor="min-price-input">Min Price</label>
        <input id="min-price-input" type="number" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
      </div>
      <div>
        <label htmlFor="max-price-input">Max Price</label>
        <input id="max-price-input" type="number" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      </div>
      <div>
        <label htmlFor="gender-select">Gender</label>
        <select id="gender-select" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="0">Male</option>
          <option value="1">Female</option>
        </select>
      </div>
      <button onClick={searchPerfumes}>Search</button>
      <div>
        <h2>Search Results</h2>
        {searchResults.map((perfume, index) => (
          <div key={index}>
            <h3>{perfume.name}</h3>
            <p>{perfume.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerfumeSearchFilter;
