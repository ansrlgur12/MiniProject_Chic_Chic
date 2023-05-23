import React, { useState, useEffect } from "react";
import AxiosApi from "../../api/Axios";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";


const EventDescStyle = styled.div`
    font-family: 'KorailRoundGothicBold';
    background-color: #8e6240;
    box-sizing: border-box;
    padding-top: 130px;
    height: auto;
    display: flex;
    justify-content: center;
    
    .descContainer{
        text-align: center;
        border-radius: 15px;
        background-color: white;
        padding: 0px 60px 0px 60px;
        margin-top: 70px;
        width: 65vw;
        margin-bottom: 80px;
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
    .explain {
        width: 50vw;
        min-height: 300px;
        text-align: center;
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
                            <div className={desc.eventImg === 'image' || desc.eventImg === null ? "noimage" : "imageContainer" }><img className="image" src={desc.eventImg} alt="article image" style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}/></div>
                            </div> <br />
                            <div className="explain">
                                <div className="main" dangerouslySetInnerHTML={{ __html: desc.eventText }} /><br /><br/>
                                행사기간 : {desc.startEvent} ~ {desc.endEvent}
                            </div>
                            
                            <div className="eventList">
                                <button className="descBtn" onClick={()=>nav(-1)}>목록</button>
                                <button className="descBtn">수정</button>
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