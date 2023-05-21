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
    }
    .trt{
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        background-color: hsl(32.72727272727272, 9.821428571428575%, 43.92156862745098%);
        color: white;
    }
`;

const MyOneLine = (props) => {
    window.scrollTo(0, 0);
    const nav = useNavigate();

    const [oneLine, setoneLine] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;

    useEffect(()=>{
    const reviews = async() => {
        console.log("유저번호, view : " + props.id, props.views);
        const rsp = await AxiosApi.myHistoryList(props.id, props.views);
        setoneLine(rsp.data);
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
    const displayedOneLine = oneLine.slice(startIndex, endIndex);

    const totalArticles = oneLine.length;
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
                            <th className="th1">향수</th>
                            <th className="th2">한줄평</th>
                            <th className="th3"></th>
                            <th className="th4">별점</th>
                            <th className="th5"></th>
                        </tr>
                    {displayedOneLine && displayedOneLine.map((oneLine)=> (
                        <tr className="trb" key={oneLine.perfumeNumber}>
                            <td className="td1">{oneLine.perfumeNumber}</td>
                            <td className="td2" onClick={()=>onClick(oneLine.perfumeNumber)}>{oneLine.review}</td>
                            <td className="td3"></td>
                            <td className="td4">{oneLine.starRating}</td>
                            <td className="td5"></td>
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
export default MyOneLine;