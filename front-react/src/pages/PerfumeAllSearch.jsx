import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 1vh; // viewport height의 100%
  
`;

const SearchInput = styled.input`
font-family: 'KorailRoundGothicBold';
  width: 80%; 
  padding: 0.8em;
  margin-right: 1em;
  border: 2px solid #594545;
  border-radius: 10px;
  ::placeholder {
    color: #594545;
  }
`;

const StyledButton = styled.button`
  background-color: #4C3D3D;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
`;


const PerfumeAllSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const searchPerfumes = async () => {
    try {
      const response = await axios.get(`http://localhost:8111/perfumes/searchByName?name=${query}`);
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
    <SearchContainer>
     <SearchInput type="text" placeholder="원하는 상품을 입력하세요" value={query} onChange={handleInputChange} />
      <StyledButton onClick={handleSearchClick}>Search</StyledButton>
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
    </SearchContainer>
  );
};

export default PerfumeAllSearch;