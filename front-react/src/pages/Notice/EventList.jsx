import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AxiosApi from "../../api/Axios";
import { useNavigate } from "react-router-dom";


const EventDescStyle = styled.div`
    box-sizing: border-box;
    margin: 0px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    
    .eventWarp{
        width: 200px;
        height: 240px;
        border: 1px solid #8e6240;
        cursor: pointer;
        padding: 0;
    }
    .eventPost {
        width: 100%;
        height: 50%;
        margin: 0;
        padding: 0;
    }
    .eDate {
        font-size: .9em;
        color: #8e6240;
    }
    .eNum, .eTitle {
        color: #8e6240;
        font-weight: bold;
    }
    .eDate{

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
                {eventList && eventList.map(event => (
                    <div className="eContainer" key={event.eventNum} onClick={()=>onClick(event.eventNum)}>
                        <div className="eventWarp">
                            <div className="eventPost" style={{backgroundImage: `url(${event.eventImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
                            <div className="eNum">{event.eventNum}</div>
                            <div className="eTitle">{event.eventTitle}</div><br/>
                                <p className="eDate">
                                {event.startEvent} ~ {event.endEvent}
                                </p>
                        </div>
                    </div>
                ))}
            </EventDescStyle>
        </>
    );
}
export default EventList;