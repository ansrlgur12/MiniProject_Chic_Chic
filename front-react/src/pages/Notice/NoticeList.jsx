import React, {useContext, useState} from "react";
import styled from "styled-components";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";
import NtcList from "./NtcList";
import { UserContext } from "../../context/UserInfo";



const NoticeListStyle = styled.div`
    font-family: 'KorailRoundGothicBold';
    background-color: #8e6240;
    box-sizing: border-box;
    height: auto;
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .main{
        border-radius: 15px;
        background-color: white;
        margin-top: 200px;
        width: 65vw;
        min-height: 1520px;
        padding: 60px 60px 0px 60px;
        flex-grow: 1;
    }
    .main .section{
        /* height: 15vh; */
        display: flex;
        flex-direction: column;
    }
    .main .section .article-title {
        display: flex;
        flex-direction: row;
        justify-content: right;
        /* margin: 20px 0px; */
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
        border: 0.5px solid rgb(131, 131, 131);
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
        border: 0.5px solid rgb(133, 133, 133);
        border-radius: 5px;
        padding: 3px;
        text-align: center;
        line-height: 2;
    }
    .notLoginWrite{
        display: none;
    } 
`;

const NoticeList = () => {

    const nav = useNavigate();
    const context = useContext(UserContext);
    const {isLogin, userId} = context;
    const [orderBy, setOrderBy] = useState(3);

    const onClickOrderBy = (e) => {
    console.log("정렬 방식 : " + e.target.value);
    setOrderBy(e.target.value);
    }

    const showWriteButton = userId === "master";

    return(
        <>
            <Header />
            <NoticeListStyle>
            <div className = "main">
                <div className="section">
                    <h2>공지사항</h2>
                    <div className="article-title">
                        <select  className ="select" value={orderBy} onChange={onClickOrderBy}>
                            <option value={1}>조회순</option>
                            <option value={2}>인기순</option>
                            <option value={3}>최신순</option>
                        </select>
                        {isLogin && showWriteButton && (
                        <div><p className={isLogin ? "write" : "notLoginWrite"} onClick={()=>nav("/newNotice")}>작성하기</p></div>
                        )}
                    </div>
                    <div className="article-list">
                        <div className="line" />
                        <NtcList num={4} view={orderBy}/>
                    </div>
                </div>
            </div>
            </NoticeListStyle>
            <Footer />
        </>
    );
};
export default NoticeList;