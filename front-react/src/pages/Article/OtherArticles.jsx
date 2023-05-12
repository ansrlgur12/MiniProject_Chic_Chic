import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import AxiosApi from "../../api/Axios";
import { Navigate, useNavigate } from "react-router-dom";

const Container=styled.div`

    margin-bottom: 30px;
    color: #696969;
    border: .5px solid #ccc;
    font-size: small;

    .list-title{
        padding-left: 15px;
        padding-top: 15px   ;
        width: 100%;
        height: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    
    ul {
        display: block;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
    }

    ol {
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    }

    li {
    display: list-item;
    text-align: -webkit-match-parent;
    margin-bottom: 15px;
    cursor: pointer;
    }
    .lists{
        padding-left: 10px;
    }

`;

const OtherArticles = (props) => {

    const[article, setArticle] = useState("");
    const[latestArticles, setLatestArticles] = useState([]);
    const nav = useNavigate();

    useEffect(()=>{
        const article = async() => {

            const rsp = await AxiosApi.smallArticleList(props.bnum);
            setArticle(rsp.data);
            setLatestArticles(rsp.data.slice(0, 5)); // 최신 게시글 5개만 선택
        }
        article();
    }, []);

       
    

    return(
        <Container>
                <div className="list-title">
                    <p>이 카테고리의 다른글</p>
                </div>
                <hr />
                <div className="lists">
                    {latestArticles.map((article) => (
                        <li key={article.anum} onClick={()=>nav(`/article/${article.anum}`)}>{article.title}</li>
                    ))}
                </div>
        </Container>
    );
}

export default OtherArticles;