import React from "react";
import Header from "../Header/Header";
import {CommunityStyle} from "./Community";
import { Link, useNavigate } from "react-router-dom";

const Information = () => {
    const nav = useNavigate();
    return(
        <>
            <Header />
            <CommunityStyle>
            <div class = "main">
            <div class="section">
                <h2>정보공유</h2>
                <div class="article-title">
                    <select  className ="select" name="" id="">
                        <option value="전체 글">전체 글</option>
                        <option value="조회순">조회순</option>
                        <option value="인기순">인기순</option>
                        <option value="최신순">최신순</option>
                    </select>
                </div>
                <div class="article-list">
                    <hr/>
                    <div class="article" onClick={()=>nav("/article")}>
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
export default Information;