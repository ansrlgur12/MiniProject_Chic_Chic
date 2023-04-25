import React from "react";
import Header from "../../Header/Header";
import styled, { css } from "styled-components";
import Footer from "../../Footer/Footer";
import newsimg1 from "../../image/news1.jpg";
import newsimg2 from "../../image/news2.jpg";

import { Link, useNavigate } from "react-router-dom";

const NewsStyle = styled.div`
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

        display: flex;
        flex-direction: column;
    }
    .main .section .article-title {
        display: flex;
        flex-direction: row;
        justify-content: right;
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
    .article{
        cursor:pointer;
    }
    .line {
        border-bottom: 1px solid #afafaf;
        width: 1fr;
        margin: 10px 0 20px 0;
    }
    .article-left .article-image{
        border: 1px solid black;
    }
    .article-left{
        width: 50vw;
    }
    .article-image{
        width: 50vw;
    }
`;

const News = () => {
    
    const nav = useNavigate();

    return(
        <>
        <Header />
        <NewsStyle>
            <div class = "main">
                <div class="section">
                    <h2>News</h2>
                    <div class="article-title">
                        <select  className ="select" name="" id="">
                            <option value="전체 글">전체 글</option>
                            <option value="조회순">조회순</option>
                            <option value="인기순">인기순</option>
                            <option value="최신순">최신순</option>
                        </select>
                    </div>
                    <div class="article-list">
                        <div className="line"></div>
                        <div class="article">
                            <div class="article-left">
                                <h2>CHANEL PARFUMEUR</h2>
                                <p>샤넬 향수는 특별한 향과 함께 있는 그대로의 모습을 드러내는 작품입니다.
                                    특별한 시리즈를 통해 샤넬 향수에 관련된 노하우와 전문 기술, 창의성을 끊임없이 추구하는 샤넬의 여정을 확인해 보세요. </p>
                            </div>
                            <div class="article-image" style={{backgroundImage: `url(${newsimg1})`, backgroundSize: 'cover'}}></div>
                        </div>
                        <div class="article">
                            <div class="article-left">
                                <h2>샤넬, 북촌서 향수 체험 공간 '조향 마스터클래스' 오픈 | 연합뉴스</h2>
                                <p>샤넬은 오는 19일부터 내년 3월 25일까지 북촌 휘겸재에서 '조향 마스터클래스'를 오픈한다고 7일 밝혔다.</p>
                            </div>
                            <div class="article-image" style={{backgroundImage: `url(${newsimg2})`, backgroundSize: 'cover'}}></div>
                        </div>
                        <div class="article">
                            <div class="article-left">
                                <h2>체험단 모집 공고2</h2>
                                <p>아래 단체에서 체험단을 모집하고 있으니 참고 바랍니다.</p>
                            </div>
                            <div class="article-image"></div>
                        </div>
                        <div class="article">
                            <div class="article-left">
                                <h2>체험단 모집 공고3</h2>
                                <p>아래 단체에서 체험단을 모집하고 있으니 참고 바랍니다.</p>
                            </div>
                            <div class="article-image"></div>
                        </div>
                    </div>
                </div>
            </div>
        </NewsStyle>
        <Footer />
        </>
    );
}

export default News;