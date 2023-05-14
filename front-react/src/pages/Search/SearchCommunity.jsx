import React, { useEffect, useState } from "react";
import { ArticleListBlock } from "../Article/ArticleLists";
import AxiosApi from "../../api/Axios";
import { useNavigate } from "react-router-dom";
import logoimage from "../../image/로고.jpg";
import styled from "styled-components";

const Style = styled.div`
    h2 {
    color: #804f23;;
    display: block;
    font-size: 1.5em;
    margin-top: 0.83em;
    margin-bottom: 0.83em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }
  .noResult{
    font-size: large;
  }

  .yesResult{
    display: none;
  }
`;

const SearchCommunity = (props) => {

    const nav = useNavigate();
    const [article, setArticle] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [noData, setNoData] = useState(false); 
    const pageSize = 6;

    useEffect(()=> {
        const article = async() => {
            console.log(props.searchValue);
            const rsp = await AxiosApi.searchArticle(props.searchValue);
            setArticle(rsp.data);
            console.log(rsp.data);
            setNoData(rsp.data.length === 0);
        }
        article();
        
    },[props.change]);

    const onClick = (num) => {
        nav(`/article/${num}`);
  };

const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
};

const startIndex = (currentPage - 1) * pageSize;
const endIndex = startIndex + pageSize;
const displayedArticles = article.slice(startIndex, endIndex);
const totalArticles = article.length;
const totalPages = Math.ceil(totalArticles / pageSize);

    // 현재 페이지를 중심으로 앞/뒤로 표시할 페이지 버튼의 개수
const maxPageButtons = 5;
const pageButtonRange = Math.floor(maxPageButtons / 2);

// 현재 페이지를 기준으로 표시할 페이지 버튼의 범위 계산
let startPage = Math.max(currentPage - pageButtonRange, 1);
let endPage = Math.min(currentPage + pageButtonRange, totalPages);

// 표시할 페이지 버튼의 개수가 maxPageButtons보다 작을 경우 범위 조정
if (endPage - startPage < maxPageButtons - 1) {
    if (currentPage - startPage < pageButtonRange) {
    endPage = Math.min(startPage + maxPageButtons - 1, totalPages);
    } else {
    startPage = Math.max(endPage - maxPageButtons + 1, 1);
    }
}

    return(
        <ArticleListBlock>
            <Style>
            {displayedArticles && displayedArticles.map((article) => (
                <div class="article" key={article.anum} onClick={()=>onClick(article.anum)}>
                    <div class="article-left" >
                        <h2>{article.title} </h2>
                        <p className="userDate">{article.id}  |  {article.date}</p>
                        <br />
                        <div className="text" dangerouslySetInnerHTML={{ __html: article.text }} >
                        </div>
                    </div>
                    <div className="article-image">
                        <img className="profileP1" src={article.img === 'image' ? logoimage : article.img} style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></img>
                    </div>
                </div>
            ))}
            <div className="btnBox">
                {startPage > 1 && (<button onClick={() => handlePageChange(startPage - 1)}>{"<"}</button>)}
                {[...Array(endPage - startPage + 1)].map((_, index) => {
                    const pageNumber = startPage + index;
                    return (
                        <button className={pageNumber === currentPage ? "numBtn active" : "numBtn"} key={pageNumber} onClick={() => handlePageChange(pageNumber)}>{pageNumber}</button>
                    );
                })}
                {endPage < totalPages && (<button onClick={() => handlePageChange(endPage + 1)}>{">"}</button>)}
            </div>
            <div className={noData ? "noResult" : 'yesResult'}>
                <p>Community에 검색결과가 없습니다.</p>
            </div>
            </Style>
        </ArticleListBlock>
    );

}

export default SearchCommunity;