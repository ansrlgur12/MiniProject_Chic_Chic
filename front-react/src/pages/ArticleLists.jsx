import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import AxiosApi from "../api/Axios";
import { useState, useEffect } from "react";
import Article from "./Article";

const ArticleListBlock = styled.div`

    .article{
        padding: 10px 0px 30px 0px;
        border-bottom: .5px solid #ccc;
        height: 200px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
        
    }

    .article .article-image{
        flex-basis: 25%;
        background-color: #ccc;
        height: 150px;
        width: 150px;
        background-size: cover;
        background-position: center;
    }
    .article-left{
        overflow:hidden; 
        text-overflow:ellipsis;
        white-space:nowrap;
        flex-basis: 65%;
        padding-top: 0px;
        line-height: 1;
    }

    .userDate{
        font-size: small;
        color: #737373;
    }

  `;

  const ArticleLists = (props) => {
    const nav = useNavigate();
    const[article, setArticle] = useState("");

    useEffect(()=>{
        const article = async() => {
            const rsp = await AxiosApi.articleList(props.num);
            setArticle(rsp.data);
        }
        article();
    }, []);

    const onClick = (num) => {
        nav(`/article/${num}`);
      };

    return(
        <>
            <ArticleListBlock>     
            {article && article.map(article => (
                <div class="article" key={article.anum} onClick={()=>onClick(article.anum)}>
              
                <div class="article-left" >
                    <h2>{article.title} </h2>
                    <p className="userDate">{article.id}  |  {article.date}</p>
                    <br />
                    {article.text}
                </div>
                <div class="article-image"></div>
            
            </div>
            ))}
            </ArticleListBlock>

        </>

        
    );
  }

  export default ArticleLists;