import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../Header/Header";
import SearchCommunity from "./SearchCommunity";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchStyle = styled.div`
    padding-top: 200px;
    font-family: 'KorailRoundGothicBold';
    background-color: #9c8d83 ;
    height: 280vh;

    .totalContainer{
        background-color: white;
        border-radius: 15px;
        width: 65vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        padding: 60px 20px;
    }
    .searchContainer {
        display: flex;
        align-items: center;
        position: relative;
    }

    .searchBar{
        padding-left: 2em;
        width: 50vw;
        height: 3em;
        border-radius: 20px;
        border: 3px solid #ccc;
        flex-grow: 1;
        padding-right: 40px;
    }

    .searchBtn {
        position: absolute;
        right: 30px;
        top: 25px;
        transform: translateY(-50%);
        cursor: pointer;
    }

    .searchResult{
        width: 100%;
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .noSearched{
        display: none;
    }

    .searchCategory{
        width: 60vw;
        display: flex;
        flex-direction: row;
    }

    p + p{
        margin-left: 20px;
    }

    .category{
        border: .5px solid #ccc;
        border-radius: 50px;
        padding: .2em .5em;
        background-color: #e3e3e3;
        color: white;
        cursor: pointer;
    }

    .selected{
        background-color: rgb(105, 68, 34);
        color: white;
    }

    .noSelected{
        display: none;
    }
    .communityList{
        width: 60vw;
    }
    .title{
        margin: 10px 0px 20px 10px;
        color: #5f330d;
    }
`;

const Search = () => {
    const [searchValue, setSearchValue] = useState(""); 
    const [isSearched, setIsSearched] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [change, setChange] = useState(0);
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    const handleCategoryClick = async (category) => {
        setSelectedCategory(category);
        if (category === 'perfume' && searchValue !== '') {
            await searchPerfumes();
        }
    };

    const searchBarChange = (e) => {
        setSearchValue(e.target.value);
        setChange(0);
    }

    const onClickSearch = () => {
        setIsSearched(true);
        setChange(1);
    }

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
          onClickSearch();
        }
      };

    const searchPerfumes = async () => {
      try {
        const response = await axios.get(`http://localhost:8111/perfumes/searchByName?name=${searchValue}`);
        setResults(response.data);
        navigate(`/searchResults?${encodeURIComponent(JSON.stringify(response.data))}`);
      } catch (error) {
        console.error('Error searching perfumes:', error);
      }
    };

    return(
        <>
        <Header />
        <SearchStyle>
            <div className="totalContainer">
            <div className="title"><h2>통합검색</h2></div>
            <div className="searchContainer">
                <input type="text" className="searchBar" placeholder="검색어를 입력하세요" onChange={searchBarChange}  onKeyPress={onKeyPress} />
                <div className="searchBtn" onClick={onClickSearch}><i className="fas fa-search"></i></div>
            </div>
            <div className={isSearched ? "searchResult" : "noSearched"}>
                <div className="searchCategory">
                    <p className={`category ${selectedCategory === 'perfume' ? 'selected' : ''}`}onClick={() => handleCategoryClick('perfume')}>perfume</p>
                    <p className={`category ${selectedCategory === 'community' ? 'selected' : ''}`}onClick={() => handleCategoryClick('community')}>community</p>
                    <p className={`category ${selectedCategory === 'event' ? 'selected' : ''}`}onClick={() => handleCategoryClick('event')}>event</p>
                </div>
                <div className={selectedCategory === 'perfume' ?  "perfumeList" : 'noSelected'}>
                    <hr />
                    <p>"perfume 검색 결과"</p>
                    {results.map((perfume, index) => (
                        <div key={index}>
                            <h3>{perfume.name}</h3>
                            <p>{perfume.description}</p>
                        </div>
                    ))}
                </div>
                <div className={selectedCategory === 'community' ?  "communityList" : 'noSelected'}>
                    <hr />
                    <br />
                    {selectedCategory === 'community' && <SearchCommunity change = {change} searchValue={searchValue} />}
                </div>
                <div className={selectedCategory === 'event' ?  "eventList" : 'noSelected'}>
                    <hr />
                    <p>"event 검색 결과"</p>
                </div>
            </div>
            </div>
        </SearchStyle>
        </>
    );
}

export default Search;