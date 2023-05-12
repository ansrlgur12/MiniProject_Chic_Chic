import React, {useState} from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";
import NewsList from "./NewsList";
import styled from "styled-components";

const NewsLStyle = styled.div`
    box-sizing: border-box;
    height: auto;
    display: flex;
    margin: 0;
    flex-direction: column;
    align-items: center;

    .main{
        margin-top: 200px;
        width: 60vw;
    }
    .main .section{
        display: flex;
        flex-direction: column;
    }
    .main .section .article-title {
        display: flex;
        flex-direction: row;
        justify-content: right;
        /* margin: 20px 0px 20px 0px; */
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
    .article{
        cursor:pointer;
    }
    .select{
        margin-right: 20px;
        height: 25px;
        width: 90px;
    }
    .line {
        border-bottom: 1px solid #afafaf;
        width: 1fr;
        /* margin: 10px 0 20px 0; */
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
    
`;

const NewsL = () => {
    const nav = useNavigate();
    const [orderBy, setOrderBy] = useState(3);
    const onClickOrderBy = (e) => {
    console.log("정렬 방식 : " + e.target.value);
    setOrderBy(e.target.value);
    }

    return(
        <>
            <Header />
            <NewsLStyle>
            <div class = "main">
                <div class="section">
                    <h2>News</h2>
                    <div class="article-title">
                        <select  className ="select" value={orderBy} onChange={onClickOrderBy}>
                            <option value={1}>조회순</option>
                            <option value={2}>인기순</option>
                            <option value={3}>최신순</option>
                        </select>
                        <div><p className="write" onClick={()=>nav("/newarticle")}>작성하기</p></div>
                    </div>
                    <div class="article-list">
                        <div className="line" />
                        <NewsList num={5} view={orderBy}/>
                    </div>
                </div>
            </div>
            </NewsLStyle>
            <Footer />
        </>
    );
};
export default NewsL;