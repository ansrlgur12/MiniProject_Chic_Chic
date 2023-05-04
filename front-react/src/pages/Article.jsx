import React from "react";
import Header from "../Header/Header";
import styled from "styled-components";
import AxiosApi from "../api/Axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OtherArticles from "./OtherArticles";

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
.likeDeleteUpdate{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.deleteUpdate{
    cursor: pointer;
    margin-top: 30px;
    display: flex;
    font-size: small;
    color: #696969;
}   
`;

const Article = () => {
    const nav = useNavigate();
    const { anum } = useParams(); 
    const[article, setArticle] = useState("");
    

    useEffect(()=>{
        const article = async() => {
            const rsp = await AxiosApi.ariticle(anum);
            console.log(anum);
            setArticle(rsp.data);
        }
        article();
    }, [anum]);



    const onClickDelete = async() => {
        const rsp = await AxiosApi.deleteArticle2(anum);
        console.log(rsp);
        nav('/community');
    }
    const onClickUpdate = (num) => {
        nav(`/update/${num}`);
    }

    return(
        <>
        <Header/>
        <ArticleStyle>
            {article && article.map(article => (
                <div>
                    <div className="container" key={article.anum}>
                        <div className="title">
                            <h2>{article.title}</h2>
                            <div className="titleInfo">
                                <p>{article.id}</p>
                                <p>|</p>
                                <p>{article.date}</p>
                            </div>
                        </div>
                        <div className="main" dangerouslySetInnerHTML={{ __html: article.text }} />
                    </div>
                <div className="likeDeleteUpdate">
                    <div className="likes">
                        <button className="likeBtn"><i class="fa-sharp fa-regular fa-heart"></i></button>
                        <button className="shareBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="deleteUpdate">
                        <p onClick={()=>onClickUpdate(article.anum)}>수정하기</p>
                        <p>|</p>
                        <p onClick={onClickDelete}>삭제하기</p>
                    </div>
                </div>
           <OtherArticles bnum={article.bnum} />
           </div>
           ))}
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