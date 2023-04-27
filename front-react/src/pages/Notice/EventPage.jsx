import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../../api/Axios";




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
`;


const EventPage = () => {
    const nav = useNavigate();
    const[eventDesc, setEventDesc] = useState("");

    useEffect(()=> {
        const eventDesc = async() => {
            const rsp = await AxiosApi.eventDescGet("ALL");
            setEventDesc(rsp.data);
        }
        eventDesc();
    }, []);

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
                        {eventDesc && eventDesc.map(eventDesc => (
                            <div className="eContainer" onClick={()=>nav("/EventDesc")}>
                                <div className="eventPost">
                                    <p>{eventDesc.eventNum}</p>
                                    <p>{eventDesc.eTitle}</p>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </EventStyle>
            <Footer />
        </>
    );
}

export default EventPage;