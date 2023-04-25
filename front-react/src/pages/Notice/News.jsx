import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import styled, { css } from "styled-components";

const NewsStyle = styled.div`
    
`;

const News = () => {

    return(
        <>
        <Header />
        <NewsStyle>
            <div class = "main">
                <div class="section">
                    <h2>공지사항</h2>
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
                                <h2>규정사항 업데이트</h2>
                                <p>커뮤니티 사이트에 부합하는 내용을 기입하여 주시기 바랍니다. </p>
                            </div>
                            <div class="article-image"></div>
                        </div>
                        <div class="article">
                            <div class="article-left">
                                <h2>체험단 모집 공고</h2>
                                <p>아래 단체에서 체험단을 모집하고 있으니 참고 바랍니다.</p>
                            </div>
                            <div class="article-image"></div>
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