import React from "react";
import styled, {css} from "styled-components";
import Header from "../../Header/Header";
import eventimg1 from "../../image/event1.jpeg";
import eventimg2 from "../../image/event2.jpeg";
import eventimg3 from "../../image/event3.jpeg";
import eventimg4 from "../../image/event4.jpeg";
import eventimg5 from "../../image/event5.jpeg";
import Footer from "../../Footer/Footer";




const EventStyle = styled.div`
    box-sizing: border-box;
    margin: 0px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .eMain {
        margin: 0, auto;
        width: 80%;
        max-width: 1024px;
        height: auto;
        text-align: center;
        padding: 70px 0px 0px 0px;
        margin-top: 130px;
    }
    .eContents {
        width: 1fr;
        height: auto;
    }
    .section {
        text-align: right;
        display: flex;
        font-size: 0.8em;
        justify-content: right;
    }
    .eContainer{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

    }
    .eventPost {
        width: 220px;
        height: 260px;
        margin: 10px;
        border: .5px solid #afafaf;
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
`;


const EventPage = () => {

    return(
        <>
            <Header />
            <EventStyle>
                <div className="eMain">
                    <div className="eContents">
                        <h2>이벤트</h2>
                        <div className="section">
                            <div className="eArticle eArticle1">전체 이벤트</div>
                            <div className="eArticle eArticle2">진행 이벤트</div>
                            <div className="eArticle eArticle3">예정 이벤트</div>
                            <div className="eArticle eArticle4">종료 이벤트</div>
                        </div>
                        <div className="line"/>
                        <div className="eContainer">
                            <div className="eventPost post1" style={{backgroundImage: `url(${eventimg1})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}></div>
                            <div className="eventPost post2" style={{backgroundImage: `url(${eventimg2})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}></div>
                            <div className="eventPost post3" style={{backgroundImage: `url(${eventimg3})`, backgroundSize: 'contain', backgroundRepeat: "no-repeat"}}></div>
                            <div className="eventPost post4" style={{backgroundImage: `url(${eventimg4})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}></div>
                            <div className="eventPost post5" style={{backgroundImage: `url(${eventimg5})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}></div>
                            <div className="eventPost post6" style={{backgroundImage: `url(${eventimg1})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}></div>
                            <div className="eventPost post7" style={{backgroundImage: `url(${eventimg2})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}></div>
                            <div className="eventPost post8" style={{backgroundImage: `url(${eventimg3})`, backgroundSize: 'contain', backgroundRepeat: "no-repeat"}}></div>
                            <div className="eventPost post9" style={{backgroundImage: `url(${eventimg4})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat"}}></div>

                        </div>
                    </div>
                </div>
            </EventStyle>
            <Footer />
        </>
    );
}

export default EventPage;