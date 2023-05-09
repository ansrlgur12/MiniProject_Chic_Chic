import React, { useState, useEffect } from "react";
import AxiosApi from "../../api/Axios";
import styled from "styled-components";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";


const EventDescStyle = styled.div`
    box-sizing: border-box;
    padding-top: 130px;
    height: auto;
    display: flex;
    justify-content: center;
    
    .descContainer{
        text-align: center;
    }
    .eventDesc{
        margin: 70px 0 20px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .line {
        border-bottom: 1px solid #afafaf;
        width: 60vw;
        margin: 10px 0 20px 0;
    }
    .descImg {
        width: 50vw;
        height: 300px;
        border: 1px solid black;
        text-align: center;
    }
    .explain {
        width: 50vw;
        min-height: 300px;

    }
    .descBtn{
        margin: 20px;
        width: 10vw;
        background-color: white;
        border-radius: 5px;
    }
`;



const EventDesc = () => {
    const { eNum } = useParams();
    const nav = useNavigate();

    const[eventDesc, setEventDesc] = useState("");

    useEffect(()=>{
        const eventDesc = async() => {
            const rsp = await AxiosApi.eventDesc(eNum);
            setEventDesc(rsp.data);
            console.log(rsp);
        }
        eventDesc();
    }, [eNum]);

    return(
        <>
            <Header />
            <EventDescStyle>
                {eventDesc && eventDesc.map(desc => (
                    <div className="descContainer" key={desc.eventNum} >
                        <div className="eventDesc">
                            <h2>{desc.eventTitle}</h2><br />
                            <div className="line" /><br />
                            <div className="descImg">
                                {desc.eventImg}
                            </div> <br />
                            <div className="explain">
                                {desc.eventText}<br /><br/>
                                행사기간 : {desc.startEvent} ~ {desc.endEvent}
                            </div>
                            
                            <div className="eventList">
                                <button className="descBtn" onClick={()=>nav(-1)}>목록</button>
                            </div>
                        </div>
                    </div>
                ))}
            </EventDescStyle>
            <Footer />
        </>
    );
}
export default EventDesc;