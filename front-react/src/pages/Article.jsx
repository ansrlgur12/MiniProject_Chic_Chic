import React from "react";
import Header from "../Header/Header";
import styled from "styled-components";
import AxiosApi from "../api/Axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ArticleStyle = styled.div`
    box-sizing: border-box;
    padding-top: 130px;
    width: 60vw;
    height: auto;
    margin: auto;

    h2 {
    display: block;
    font-size: 1.5em;
    margin-top: 0.83em;
    margin-bottom: 0.83em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }
  h3 {

display: block;

font-size: 1.17em;

margin-top: 1em;

margin-bottom: 1em;

margin-left: 0;

margin-right: 0;

font-weight: bold;

}

    .title{
        margin-top: 60px;
        color: #5f330d;
    }
    .likes{
        margin-top: 50px;
        border: 1px solid #ccc;
        width: 100px;
        height: 30px;
        display: flex;
        justify-content: space-evenly;
        border-radius: 15px;
        margin-bottom: 50px;
    }
    .main{
        margin-top: 50px;
    }
    .list{
        margin-bottom: 30px;
        color: #696969;
        border: .5px solid #ccc;
        font-size: small;
    }
    .list-title{
        padding-left: 15px;
        width: 100%;
        height: 15px;
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
}

p {

display: block;

margin-top: 1em;

margin-bottom: 1em;

margin-left: 0;

margin-right: 15px;

}

hr{
    border: .3px solid #ccc;
}
.tag-list{
    display: flex;
    flex-direction: row;
}
.tagName{
    color: rgb(125, 125, 125);
}
.titleInfo{
    display: flex;
    flex-direction: row;
    color: #9c9c9c;
    font-size: small;
}
button{
    background-color: white;
    border: none;
}
.shareBtn{
    margin-bottom: 3px;
}
.likeBtn{
    color: #d01919;
}
`;

const Article = () => {
    const { anum } = useParams(); 
    const[article, setArticle] = useState("");

    useEffect(()=>{
        const article = async() => {
            const rsp = await AxiosApi.write(anum);
            console.log(anum);
            setArticle(rsp.data);
        }
        article();
    }, [anum]);

    return(
        <>
        <Header/>
        <ArticleStyle>
            {article && article.map(article => (
                <div className="container" key={article.anum}>
                    <div className="title">
                        <h2>{article.title}</h2>
                        <div className="titleInfo">
                            <p>{article.unum}</p>
                            <p>|</p>
                            <p>{article.date}</p>
                        </div>
                    </div>
                    <div className="main">
                        <p>{article.text}</p>
                    </div>
                </div>
            ))}
           
            <div className="likes">
                <button className="likeBtn"><i class="fa-sharp fa-regular fa-heart"></i></button>
                <button className="shareBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                    </svg>
                </button>
            </div>

            <div className="list">
                <div className="list-title">
                    <p>이 카테고리의 다른글</p>
                </div>
                <hr />
                <div className="lists">
                    <ul>
                        <li>다른 글</li>
                        <li>다른 글</li>
                        <li>다른 글들</li>
                        <li>다른 글 3</li>
                        <li>따른 글</li>
                    </ul>
                </div>
            </div>
            <br />
            <div className="tag">
                <h3>태그</h3>
                <div className="tag-list">
                    <p className="tagName">#향수</p>
                    <p className="tagName">#퍼퓸</p>
                    <p className="tagName">#칙칙</p>
                </div>
            </div>
            <br />
            <div className="comment">
                <h3>댓글</h3>
                <div className="list">
                <ul>
                        <li>다른 글</li>
                        <li>다른 글</li>
                        <li>다른 글들</li>
                        <li>다른 글 3</li>
                        <li>따른 글</li>
                    </ul>
                </div>
            </div>
        </ArticleStyle>
        </>
    );
}
export default Article;