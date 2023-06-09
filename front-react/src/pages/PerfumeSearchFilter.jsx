import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getTopBrands } from '../api/Perfume';
import { useNavigate  } from 'react-router-dom';
import styled from 'styled-components';

const PerfumeSearchFilterStyle = styled.div`
background-color: #FFF8EA;
  position: fixed;    
  top: 15rem;             
  left: 5rem;            
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;

  .filterItem {
    display: flex;
    flex-direction: column;
  }

  button {
    background-color: #9E7676;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 350px;  /* 버튼의 폭을 150px로 설정 */
    height: 50px;  /* 버튼의 높이를 50px로 설정 */
    font-size: 20px;  /* 버튼 내부 텍스트의 크기를 20px로 설정 */
    padding: 10px 20px;  /* 버튼 내부의 패딩을 상하 10px, 좌우 20px로 설정 */
  }
  
  h3 {
    font-family: 'NeoDunggeunmoPro-Regular', sans-serif;
  }

  button:hover {
    background-color: #815B5B;
  }
`;

export const getBrands = async () => {
  try {
    const response = await axios.get('http://localhost:8111/perfumes/brands-by-numbers');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const PerfumeSearchFilter = () => {
  const [brandIdentifier, setBrandIdentifier] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [gender, setGender] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [brands, setBrands] = useState([]); 
  const [brandNumbers, setBrandNumbers] = useState([]);// 상위 브랜드 저장을 위한 state

  useEffect(() => {
    getTopBrands().then(setBrands);
    getBrands().then(setBrandNumbers);
  }, []);

  const history = useNavigate ();
  
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
      history(`/searchResults?${encodeURIComponent(JSON.stringify(response.data))}`);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <PerfumeSearchFilterStyle>
      <div className="filterItem">
        <h3>많은 상품을 보유한 브랜드</h3>
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
        <br /><br />
        
        <h3>유명브랜드</h3>
        {brandNumbers.map((brand, index) => (
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
        </label>
      </div>
      <div className="filterItem">
        <label htmlFor="min-price-input">Min Price</label>
        <input id="min-price-input" type="number" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
      </div>
      <div className="filterItem">
        <label htmlFor="max-price-input">Max Price</label>
        <input id="max-price-input" type="number" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      </div>
      <div className="filterItem">
        <label htmlFor="gender-select">Gender</label>
        <select id="gender-select"value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="0">Male</option>
          <option value="1">Female</option>
        </select>
      </div>
      <br />
      <button onClick={searchPerfumes}>Search</button>
      <div>
        {searchResults.map((perfume, index) => (
          <div key={index}>
            <h3>{perfume.name}</h3>
            <p>{perfume.description}</p>
          </div>
        ))}
      </div>
    </PerfumeSearchFilterStyle>
  );
        };
        export default PerfumeSearchFilter;