import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { FixedSizeGrid as Grid } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const PerfumeSearchResultsStyle = styled.div`
  .search-results-container {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .search-result {
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
  }

  .go-back-button {
    margin-bottom: 20px;
    font-size: 1.2rem;
    padding: 10px 20px;
    background-color: #f0f0f0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .search-result {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 250px;
    height: 250px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .search-result:hover {
    transform: scale(1.05);
    cursor: pointer;
    background-color: #f0f0f0;
  }
`;

const PerfumeSearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);

  // URL에서 검색 결과를 디코딩
  useEffect(() => {
    const results = JSON.parse(decodeURIComponent(location.search.substring(1)));
    setSearchResults(results);
  }, [location]);

  const handleGoBack = () => {
    navigate(-1); 
  };

  const itemCount = searchResults.length;

  const isItemLoaded = (index) => index < itemCount;

  const loadMoreItems = () => {
    // Implement your logic to load more items if needed
  };

  const renderItem = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * 4 + columnIndex;
    const perfume = searchResults[index];
  
    if (!isItemLoaded(index)) return null;
  
    return (
      <Link to={`/perfumeDetail/${perfume.perfumeNumber}`} style={{ textDecoration: 'none', color: 'black' }}>
        <div className="search-result" style={style}>
        <h3 style={{ fontSize: '20px' }}>{perfume.name}</h3>
          <p>{perfume.price}$</p>
          <img src={perfume.thumbnail} alt="Perfume Thumbnail" style={{ maxWidth: '70%', maxHeight: '50%', objectFit: 'contain' }} />
        </div>
      </Link>
    );
  };

  return (
    <>
      <Header />
      <PerfumeSearchResultsStyle>
        <div className="search-results-container">
          <button className="go-back-button" onClick={handleGoBack}>Go Back</button>
          <h2>Search Results</h2>
          <InfiniteLoader
            isItemLoaded={isItemLoaded}
            itemCount={itemCount}
            loadMoreItems={loadMoreItems}
          >
            {({ onItemsRendered, ref }) => (
              <Grid
                ref={ref}
                className="search-results-grid"
                columnCount={4}
                columnWidth={250}
                height={1000}
                rowCount={Math.ceil(itemCount / 4)}
                rowHeight={250}
                width={1300}
                onItemsRendered={onItemsRendered}
                >
                {renderItem}
                </Grid>
                )}
                </InfiniteLoader>
                </div>
                </PerfumeSearchResultsStyle>
                <Footer />
                </>
                );
                };
                
                export default PerfumeSearchResults;