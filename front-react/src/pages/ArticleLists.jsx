import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import AxiosApi from "../api/Axios";
import { useState, useEffect } from "react";

const ArticleListBlock = styled.div`
    .main .article-list{
        width: 100%;
        height: 100%;
    }
    .main .article-list .article{
        padding: 30px 0px 30px 0px;
        border-bottom: .5px solid #ccc;
        height: 200px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .main .article-list .article .article-image{
        flex-basis: 25%;
        background-color: #ccc;
        height: 150px;
        width: 150px;
        background-size: cover;
        background-position: center;
    }
  `;

  const ArticleLists = () => {
    const nav = useNavigate();
    const[article, setArticle] = useState("");

    useEffect(()=>{
        const article = async() => {
            const rsp = await AxiosApi.articleGet("ALL");
            setArticle(rsp.data);
        }
        article();
    }, []);

    return(
        <>
            <ArticleListBlock>        
            {article && article.map(article => (
                <div class="article" onClick={()=>nav("/article")}>
                <div class="article-left">
                    <h2>{article.title}</h2>
                    <p>{article.text}</p>
                </div>
                <div class="article-image"></div>
            </div>
            ))}
            </ArticleListBlock>

        </>

        
    );
  }

  export default ArticleLists;