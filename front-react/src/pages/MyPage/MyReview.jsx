import React from "react"; 
import { useEffect, useState } from "react";
import AxiosApi from "../../api/Axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MyPageStyle = styled.div`
    
    * {
        box-sizing: border-box;

    }
    table {
        text-align: center;
        width: 100%;
    }
    .btnBox{
        display: flex;
        justify-content: center;
        padding-top: 5px;
    }
    
    .th1{
        width: 10vw;
    }
    .th4{
        width: 9vw;
    }
    .th5{
        width: 11vw;
    }
    .th3{
        width: 9vw;
    }
    .th2{
        width: 26vw;
    }
    .td2{
        cursor: pointer;
        display: flex;
        justify-content: center;
    }
    .trt{
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        background-color: hsl(32.72727272727272, 9.821428571428575%, 43.92156862745098%);
        color: white;
    }
    .trb{
        border-bottom: .5px solid #ccc;
    }
    .numBtn{
        width: 30px;
        height: 30px;
        border: .5px solid #ccc;
        background-color: white;
        font-size: large;
        font-weight: 500;
        color: #42240a;
    }
    .numBtn + .numBtn{
        margin-left: 10px;
    }
    .active{
        background-color:  #5f330d;
        color: white;
    }
    
`;

const MyReview = (props) => {
    window.scrollTo(0, 0);
    const nav = useNavigate();

    const [reviews, setReviews] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;

    useEffect(()=>{
    const reviews = async() => {
        console.log("유저번호, view : " + props.id, props.views);
        const rsp = await AxiosApi.myHistoryList(props.id, props.views);
        setReviews(rsp.data);
    }
    reviews();
    }, [props.id]);
    
    const onClick = (anum) => {
        nav(`/article/${anum}`);
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
                <div className="reviewContainer" >
                    <table>
                        <tr className="trt">
                            <th className="th1">게시판</th>
                            <th className="th2">제목</th>
                            <th className="th3">조회수</th>
                            <th className="th4">좋아요</th>
                            <th className="th5">등록일</th>
                        </tr>
                    {displayedReviews && displayedReviews.map((review)=> (
                        <tr className="trb" key={review.anum}>
                            <td className="td1">{review.bname}</td>
                            <td className="td2" onClick={()=>onClick(review.anum)}>{review.title}</td>
                            <td className="td3">{review.view}</td>
                            <td className="td4">{review.like}</td>
                            <td className="td5">{review.date}</td>
                        </tr>
                    ))}
                    </table>
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
                </div>
                
            </MyPageStyle>
        </>
    );
}
export default MyReview;