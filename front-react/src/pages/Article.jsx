import React from "react";
import Header from "../Header/Header";
import styled from "styled-components";

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

    .title{
        margin-top: 60px;
    }
    .likes{
        margin-top: 50px;
        border: 1px solid #ccc;
        width: 150px;
        height: 30px;
        display: flex;
        justify-content: space-evenly;
        border-radius: 15px;
    }
    .main{
        margin-top: 50px;
    }
    .list{
        margin-top: 50px;
        border: 1px solid #ccc;
    }
    .list-title{
        padding: 5px;
        border-bottom: 1px solid #ccc;
    }
    .lists{

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
}
`;

const Article = () => {
    return(
        <>
        <Header/>
        <ArticleStyle>
            <div className="title">
                <h2>제목 제목 제목</h2>
                <p>작성자 이름</p>
                <p>2023.04.20 시간</p>
            </div>
            <div className="main">
                <p>본문내용본문내용본문내용본문내용</p>
                <p>본문내용본문내용본문내용본문내용본문내용본문내용</p>
                <p>본문내용본문내용본문내용본문내용본문내용본문내용</p>
                <p>본문내용본문내용본문내용본문내용본문내용본문내용</p>
                <p>본문내용본문내용본문내용본문내용본문내용본문내용</p>
                <p>본문내용본문내용본문내용본문내용본문내용본문내용</p>
                <p>본문내용본문내용본문내용본문내용본문내용본문내용</p>
                <p>본문내용본문내용본문내용본문내용본문내용본문내용</p>

            </div>
            <div className="likes">
                <button type="radio">좋아요</button>
                <button>공유</button>
            </div>

            <div className="list">
                <div className="list-title">이 카테고리의 다른글</div>
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
                
        </ArticleStyle>
        </>
    );
}
export default Article;