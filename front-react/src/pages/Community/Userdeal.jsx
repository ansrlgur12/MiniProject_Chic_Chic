import React from "react";
import Header from "../../Header/Header";
import { Link, useNavigate } from "react-router-dom";
import {CommunityStyle} from "./Community";
import ArticleLists from "../ArticleLists";


const UserDeal = () => {
    return(
        <>
            <Header />
            <CommunityStyle>
            <div class = "main">
            <div class="section">
                <h2>회원거래</h2>
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
                    <ArticleLists />
                    <ArticleLists />
                    <ArticleLists />
                </div>
            </div>
            </div>
            </CommunityStyle>
        </>
    );
}
export default UserDeal;