import React from "react";
import styled, {css} from "styled-components";
import Header from "../Header/Header";
import {HeaderStyle} from "../Header/Header";
import { Link } from "react-router-dom";

const CommunityStyle = styled.div`
    box-sizing: border-box;
    margin: 0px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    
  .main{
    margin-top: 130px;
    width: 60vw;
    height: auto;
    padding: 70px 0px 0px 0px;
  }
  .main .section{
    height: 15vh;
    display: flex;
    flex-direction: column;
  }
  .main .section .article-title {
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0px 20px 0px;
  }
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

  .main .article-list .article:nth-child(2) .article-image{
    background-image: url("./image/로고.jpg");
  }
  .main .article-list .article:nth-child(3) .article-image{
    background-image: url("./image/bear\ wallpaper\ pc\ Mac\ 네이버\ 아이콘\ 곰.png");
  }
  h2 {
    display: block;
    font-size: 1.5em;
    margin-top: 0.83em;
    margin-bottom: 0.83em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }
  .select{
    height: 25px;
    width: 70px;
  }
  
    
`;

const Community = () => {

    return(
        <>
            <Header />
            <CommunityStyle>
            <div class = "main">
            <div class="section">
                <h2>리뷰</h2>
                <div class="article-title">
                    <p>전체 글</p>
                    <select  className ="select" name="" id="">
                        <option value="전체 글">전체 글</option>
                        <option value="조회순">조회순</option>
                        <option value="인기순">인기순</option>
                        <option value="최신순">최신순</option>
                    </select>
                </div>
                <div class="article-list">
                    <hr/>
                    <div class="article">
                        <div class="article-left">
                            <h2>제목 제목</h2>
                            <p>뭐시기뭐시기</p>
                        </div>
                        <div class="article-image"></div>
                    </div>
                    <div class="article">
                        <div class="article-left">
                            <h2>제목 제목</h2>
                            <p>뭐시기뭐시기</p>
                        </div>
                        <div class="article-image"></div>
                    </div>
                </div>
            </div>
            </div>
            </CommunityStyle>
        </>
    );
}
export default Community;