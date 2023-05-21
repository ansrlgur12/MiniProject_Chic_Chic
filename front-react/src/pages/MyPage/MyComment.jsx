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
        width: 59vw;
    }
    .btnBox{
        display: flex;
        justify-content: center;
    }
    
    .th1{
        width: 10vw;
    }
    .th1 .th3 .th4 .th5{
        width: 10vw;
    }
    .th2{
        width: 30vw;
    }
    .td2{
        cursor: pointer;
        display: flex;
    }
    .trt{
        border-top: 1px solid black;
        border-bottom: 1px solid black;
    }
`;

const MyComment = (props) => {
    window.scrollTo(0, 0);
    const nav = useNavigate();

    const [comment, setcomment] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;

    useEffect(()=>{
    const reviews = async() => {
        console.log("유저번호, view : " + props.id, props.views);
        const rsp = await AxiosApi.myHistoryList(props.id, props.views);
        setcomment(rsp.data);
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
    const displayedComments = comment.slice(startIndex, endIndex);

    const totalArticles = comment.length;
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
                            <th className="th3">댓글</th>
                            <th className="th5">등록일</th>
                        </tr>
                    {displayedComments && displayedComments.map((comment)=> (
                        <tr className="trb" key={comment.commentNum}>
                            <td className="td1">{comment.bnum}</td>
                            <td className="td2" onClick={()=>onClick(comment.anum)}>{comment.title}</td>
                            <td className="td3">{comment.commentText}</td>
                            <td className="td5">{comment.commentDate}</td>
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
export default MyComment;