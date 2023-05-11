import React, { useEffect } from "react";
import styled, {css} from "styled-components";
import Header from "../../Header/Header";
import { Link, useNavigate } from "react-router-dom";
import ArticleLists from "../Article/ArticleLists";
import Footer from "../../Footer/Footer";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserInfo";

export const CommunityStyle = styled.div`
    box-sizing: border-box;
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    
  .main{
    margin-top: 130px;
    width: 60vw;
    min-height: 1520px;
    padding: 70px 0px 0px 0px;
    flex-grow: 1;
  }
  .main .section{
    height: 15vh;
    display: flex;
    flex-direction: column;
  }
  .main .section .article-title {
    
    display: flex;
    flex-direction: row;
    justify-content: right;
    margin: 20px 0px 20px 0px;
  }


  h2 {
    color: #804f23;;
    display: block;
    font-size: 1.5em;
    margin-top: 0.83em;
    margin-bottom: 0.83em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }
  .select{
    margin-right: 10px;
    height: 40px;
    width: 90px;
    border-radius: 0px;
    border: 0.5px solid #838383;
    text-align: center;
  }
  .article{
    cursor:pointer;
  }
  .line {
        border-bottom: 1px solid #afafaf;
        width: 1fr;
        margin: 10px 0 20px 0;
  }
  
  .write{
    height: 40px;
    width: 90px;
    border-radius: 0px;
    border: .5px solid #858585;
    border-radius: 5px;
    padding: 3px;
    text-align: center;
    line-height: 2;
  }

  .notLoginWrite{
    display: none;
  }
  
    
`;

const Community = () => {
  window.scrollTo(0, 0);
  const nav = useNavigate();
  const context = useContext(UserContext);
  const {isLogin} = context;
  const [orderBy, setOrderBy] = useState(3);

  const onClickOrderBy = (e) => {
    console.log("정렬 방식 : " + e.target.value);
    setOrderBy(e.target.value);
    
  }

  useEffect(()=> {
    window.scrollTo(0, 0);
  },[]);

  // 페이지 하나로 수정. 게시판테이블 이용해서 리뷰 대신 {board.boardName} <ArticleLists num={1}> 대신 <ArticleLists num={bnum}> 이런식으로 수정하기
    return(
        <>
            <Header />
            <CommunityStyle>
            <div class = "main">
                <div class="section">
                    <h2>리뷰</h2>
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
                        <ArticleLists num={1} view={orderBy}/>
                    </div>
                </div>
            </div>
            </CommunityStyle>
            <Footer />
        </>
    );
};
export default Community;
