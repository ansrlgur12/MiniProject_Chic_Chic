import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AxiosApi from "../../api/Axios";
import { useNavigate } from "react-router-dom";

const EventDescStyle = styled.div`
    box-sizing: border-box;
    margin: 0px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .eContainer{
        display: flex; // flex 스타일 적용
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .eventPost {
        display: flex;  // flex 스타일 적용
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 260px;
        margin: 10px;
        border: .5px solid #afafaf;
        background-color: #afafaf;
    }
`;



const EventList = (props) => {
    const nav = useNavigate();

    const[eventList, setEventList] = useState("");
    useEffect(()=> {
        const eventList = async() => {
            const rsp = await AxiosApi.eventList(props.eNum);
            setEventList(rsp.data);
        }
        eventList();
    }, []);

    const onClick = (eNum) => {
        nav(`/eventDesc/${eNum}`);
    };

    return(
        <EventDescStyle>
            {eventList && eventList.map(eventList => (
                <div className="eContainer" key={eventList.eventNum} onClick={()=>onClick(eventList.eventNum)}>
                    <div className="eventPost">
                        <p>{eventList.eventNum}</p>
                        <p>{eventList.eTitle}</p>
                    </div>
                </div>
            ))}
        </EventDescStyle>
    );
}
export default EventList;