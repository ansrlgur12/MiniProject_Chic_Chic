import React, { useContext, useState } from "react";
import styled from "styled-components";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import EventList from "./EventList";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserInfo";

const EventStyle = styled.div`
    font-family: 'KorailRoundGothicBold';
    background-color: #8e6240;
    box-sizing: border-box;
    margin: 0px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .eMain {
        border-radius: 15px;
        background-color: white;
        margin: 0, auto;
        width: 65vw;
        max-width: 1024px;
        height: auto;
        text-align: center;
        padding: 60px 60px 0px 60px;
        margin-top: 200px;
        min-height: 1520px;
    }
    .eContents {
        width: 1fr;
        height: auto;
    }
    .section {
        text-align: right;
        display: flex;
        justify-content: right;
        font-size: .8em;
    }
    .eContainer{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .eventPost {
        width: 200px;
        height: 240px;
        margin: 10px;
        border: .5px solid #afafaf;
        background-color: #afafaf;
    }
    .eArticle {
        margin: 0 10px;
        cursor: pointer;
    }
    .eContents > h2 {
        margin: 10px 0 30px 0;
    }
    .line {
        border-bottom: 1px solid #afafaf;
        width: 1fr;
        margin: 10px 0 20px 0;
    }
    .notLoginWrite{
        display: none;
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
    .select{
        margin-right: 10px;
        height: 40px;
        width: 90px;
        border-radius: 0px;
        border: 0.5px solid rgb(131, 131, 131);
        text-align: center;
    }
    p{
        cursor: pointer;
    }
    h2{
        color: #8e6240;
    }
`;

const EventPage = () => {
    const nav = useNavigate();
    const context = useContext(UserContext);
    const [orderBy, setOrderBy] = useState(1);
    const {isLogin, userId} = context;
    const showWriteButton = userId === "master";

    const handleENum = (e) => {
        console.log("정렬 : " + e.target.value);
        setOrderBy(e.target.value);
      };

    return(
        <>
            <Header />
            <EventStyle>
                <div className="eMain">
                    <div className="eContents">
                        <h2>이벤트</h2>
                        <div className="section">
                            <select className="select" value={orderBy} onChange={handleENum}>
                                <option value={1}>전체 이벤트</option>
                                <option value={2}>진행 이벤트</option>
                                <option value={3}>예정 이벤트</option>
                                <option value={4}>종료 이벤트</option>
                            </select>
                            {isLogin && showWriteButton && (
                            <div><p className={isLogin ? "write" : "notLoginWrite"} onClick={()=>nav("/newEvent")}>작성하기</p></div>
                            )}
                        </div>
                        <div className="line"/> 
                        <div className="text">
                            <EventList eventNum={1} view={orderBy}/>
                        </div>
                    </div>
                </div>
            </EventStyle>
            <Footer />
        </>
    );
}

export default EventPage;