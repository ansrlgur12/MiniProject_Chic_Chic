import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AxiosApi from "../../api/Axios";
import { useNavigate } from "react-router-dom";
import EventDate from "./EventDate";

const EventDescStyle = styled.div`
    box-sizing: border-box;
    margin: 0px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    
    .eContainer{
        cursor: pointer;
    }

    .eventPost {
        display: flex;  // flex 스타일 적용
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 160px;
        height: 200px;
        margin: 10px;
        border: .5px solid #afafaf;
        background-color: #afafaf;
        font-size: 1.2em;
        font-weight: bold;
    }
    .eDate {
        font-size: .8em;
    }
`;

const EventList = (props) => {
    const nav = useNavigate();
    const[eventList, setEventList] = useState("");
    useEffect(()=> {
        const eventList = async() => {
            const rsp = await AxiosApi.eventList(props.eventNum, props.view);
            setEventList(rsp.data);
            console.log(rsp);
        }
        eventList();
    }, [props.view]);
    const onClick = (eNum) => {
        nav(`/eventDesc/${eNum}`);
    };

    return(
        <>
            <EventDescStyle>
                <div onClick={()=>nav(`/date`)}>date</div>
                {eventList && eventList.map(event => (
                    <div className="eContainer" key={event.eventNum} onClick={()=>onClick(event.eventNum)}>
                        <div className="eventPost">
                            {event.eventNum} <br />
                            {event.eventTitle} <br /><br />
                            <p className="eDate">
                            {event.startEvent}<br /> ~ <br /> {event.endEvent}
                            </p>
                        </div>
                    </div>
                ))}
            </EventDescStyle>
            <EventDate />
        </>
    );
}
export default EventList;