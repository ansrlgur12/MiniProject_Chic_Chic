import React from "react"; 
import { useEffect, useState } from "react";
import AxiosApi from "../../api/Axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MyPageStyle = styled.div`

`;

const MyReview = (props) => {
    window.scrollTo(0, 0);
    const nav = useNavigate();
    const [reviews, setReviews] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;

    useEffect(()=>{
    const reviews = async() => {
        const rsp = await AxiosApi.myHistoryList(props.id, props.view);
        setReviews(rsp.data);
    }
    reviews();
    }, [props.view]);
    
    const onClick = (num) => {
        nav(`/article/${num}`);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const displayedReviews = reviews.slice(startIndex, endIndex);

    const totalArticles = reviews.length;
    const totalPages = Math.ceil(totalArticles / pageSize);

    const maxPageButtons = 5;
    const pageButtonRange = Math.floor(maxPageButtons / 2);

    let startPage = Math.max(currentPage - pageButtonRange, 1);
    let endPage = Math.min(currentPage + pageButtonRange, totalPages);

    if(endPage - startPage < maxPageButtons - 1) {
        if(currentPage - startPage < pageButtonRange) {
            endPage = Math.min(startPage + maxPageButtons - 1, totalPages);
        } else {
            startPage = Math.max(endPage - maxPageButtons + 1, 1);
        }
    }


    return(
        <>
            <MyPageStyle>
                {displayedReviews && displayedReviews.map((review)=> (
                    <div className="reviewContainer" key={review.id}>
                        <table>
                            <tr>
                                <th>게시판</th>
                                <th>제목</th>
                                <th>조회수</th>
                                <th>좋아요</th>
                                <th>등록일</th>
                            </tr>
                            <tr>
                                <td>{review.bnum}</td>
                                <td onClick={()=>onClick(review.anum)}>{review.title}</td>
                                <td>{review.view}</td>
                                <td>{review.like}</td>
                                <td>{review.date}</td>
                            </tr>
                        </table>
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
            </MyPageStyle>
        </>
    );
}
export default MyReview;