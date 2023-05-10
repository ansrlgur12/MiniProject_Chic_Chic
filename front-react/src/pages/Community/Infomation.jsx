import React from "react";
import Header from "../../Header/Header";
import {CommunityStyle} from "./Community";
import { Link, useNavigate } from "react-router-dom";
import ArticleLists from "../Article/ArticleLists";
import Footer from "../../Footer/Footer";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserInfo";

const Information = () => {
    const nav = useNavigate();
    const context = useContext(UserContext);
    const {isLogin} = context;
    const [orderBy, setOrderBy] = useState(3);

  const onClickOrderBy = (e) => {
    console.log("정렬 방식 : " + e.target.value);
    setOrderBy(e.target.value);
  }

    return(
        <>
            <Header />
            <CommunityStyle>
            <div class = "main">
            <div class="section">
                <h2>정보공유</h2>
                <div class="article-title">
                    <select  className ="select" value={orderBy} onChange={onClickOrderBy}>
                            <option value={1}>조회순</option>
                            <option value={2}>인기순</option>
                            <option value={3}>최신순</option>
                        </select>
                    <div><p className={isLogin ? "write" : "notLoginWrite"} onClick={()=>nav("/newarticle")}>작성하기</p></div>
                </div>
                <div class="article-list">
                    <div className="line" />
                    <ArticleLists num={2} view={orderBy}/>
                </div>
            </div>
            </div>
            </CommunityStyle>
            <Footer />
        </>
    );
}
export default Information;