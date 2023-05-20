import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const PerfumeSearchResultsStyle = styled.div`
  .search-results-container {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
  }

  .search-result {
    border: 1px solid #ccc;
    border-radius: 1em;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 230px;
    height: 250px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
  }

  .search-result:hover {
    transform: scale(1.05);
  }
`;

const PerfumeSearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    let results;
    try {
      results = JSON.parse(decodeURIComponent(location.search.substring(1)));
      if (!Array.isArray(results)) {  // 결과가 배열이 아닌 경우
        results = [];  // 빈 배열을 설정
      }
    } catch {
      results = [];  // 예외가 발생한 경우(예: 디코딩이 실패한 경우) 빈 배열을 설정
    }
    console.log(results)
    setSearchResults(results);
  }, [location]);

 
  

  

  

  return (
    <>
      <Header />
      <h2>Search Results</h2>
      <PerfumeSearchResultsStyle>
        <div className="search-results-container">
          {searchResults.map((perfume, index) => (
            <Link
              to={`/perfumeDetail/${perfume.perfumeNumber}`}
              style={{ textDecoration: 'none', color: 'black' }}
              key={perfume.perfumeNumber}
            >
              <div className="search-result">
                <h3 style={{ fontSize: '20px' }}>{perfume.name}</h3>
                <p>{perfume.price}$</p>
                <img
                  src={perfume.thumbnail}
                  alt="Perfume Thumbnail"
                  style={{ maxWidth: '70%', maxHeight: '50%', objectFit: 'contain' }}
                />
              </div>
            </Link>
          ))}
        </div>
      </PerfumeSearchResultsStyle>
      <Footer />
    </>
  );
};

export default PerfumeSearchResults;