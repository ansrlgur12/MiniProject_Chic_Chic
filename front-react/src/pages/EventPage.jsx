import React from "react";
import styled, {css} from "styled-components";
import Header from "../Header/Header";


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
        width: 420px;
        height: 560px;
    }
    .eArticle {
        margin: 0 10px;

    }
    #hr {
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
                        <div className="section">
                            <div className="eArticle eArticle1">전체 이벤트</div>
                            <div className="eArticle eArticle2">진행 이벤트</div>
                            <div className="eArticle eArticle3">예정 이벤트</div>
                            <div className="eArticle eArticle4">종료 이벤트</div>
                        </div>
                        <hr id="hr"/>
                        <div className="eContainer">
                            <div className="eventPost post1"><img src="../image/event1.jpeg" alt="event1" id="eImg" /></div>
                            <div className="eventPost post2"><img src="../image/event2.jpeg" alt="event2" id="eImg" /></div>
                            <div className="eventPost post3"><img src="../image/event3.jpeg" alt="event3" id="eImg" /></div>
                            <div className="eventPost post4"><img src="../image/event4.jpeg" alt="event4" id="eImg" /></div>
                            <div className="eventPost post5"><img src="../image/event5.jpeg" alt="event5" id="eImg" /></div>
                            <div className="eventPost post6"><img src="../image/event1.jpeg" alt="event1" id="eImg" /></div>
                            <div className="eventPost post7"><img src="../image/event2.jpeg" alt="event2" id="eImg" /></div>
                            <div className="eventPost post8"><img src="../image/event3.jpeg" alt="event3" id="eImg" /></div>
                            <div className="eventPost post9"><img src="../image/event4.jpeg" alt="event4" id="eImg" /></div>
                            <div className="eventPost post10"><img src="../image/event5.jpeg" alt="event5" id="eImg" /></div>
                        </div>
                    </div>
                </div>
            </EventStyle>

        </>
    );
}

export default EventPage;