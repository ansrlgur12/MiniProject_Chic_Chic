import React from "react";
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
    height: 1300px;
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
    margin-right: 20px;
    height: 25px;
    width: 90px;
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
    height: 30px;
    width: 90px;
    border: .5px solid #858585;
    border-radius: 5px;
    padding: 3px;
    text-align: center;
    line-height: 1.5;
  }

  .notLoginWrite{
    display: none;
  }
  
    
`;

const Community = () => {
  const nav = useNavigate();
  const context = useContext(UserContext);
  const {isLogin} = context;
  const [orderBy, setOrderBy] = useState(3);

  const onClickOrderBy = (e) => {
    console.log("정렬 방식 : " + e.target.value);
    setOrderBy(e.target.value);
  }

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