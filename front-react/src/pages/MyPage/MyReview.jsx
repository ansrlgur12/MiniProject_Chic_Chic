import React from "react"; 
import { useEffect, useState } from "react";
import AxiosApi from "../../api/Axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MyPageStyle = styled.div`

`;

const MyReview = () => {
    window.scrollTo(0, 0);
    const nav = useNavigate();
    const [reviews, setReviews] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;

    useEffect(()=>{
    const reviews = async() => {
        const rsp = await AxiosApi.ariticle();
        setReviews(rsp.data);
    }
    reviews();
    }, []);

    return(
        <>
            <MyPageStyle>
                {reviews}
                <table>
                    <tr>
                        <th>게시판</th>
                        <th>제목</th>
                        <th>조회수</th>
                        <th>좋아요</th>
                        <th>등록일</th>
                    </tr>
                    <tr>

                    </tr>
                </table>
            </MyPageStyle>
        </>
    );
}
export default MyReview;