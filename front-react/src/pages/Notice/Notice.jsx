import React, { useState, useEffect } from "react";
import AxiosApi from "../../api/Axios";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";


const NoticeStyle = styled.div`
    font-family: 'KorailRoundGothicBold';
    background-color: #8e6240;
    box-sizing: border-box;
    padding-top: 130px;
    height: auto;
    display: flex;
    justify-content: center;
    
    .noticeCtn{
        text-align: center;
        border-radius: 15px;
        background-color: white;
        padding: 60px 60px 0px 60px;
        margin-top: 70px;
        width: 65vw;
        margin-bottom: 80px;
    }
    .noticeDesc{
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



const Notice = () => {
    const { num } = useParams();
    const nav = useNavigate();
    const[notice, setNotice] = useState("");


    useEffect (()=>{
        const notice = async() => {
            const rsp = await AxiosApi.ariticle(num);
            setNotice(rsp.data);
        }
        notice();
    },[num]);

    return(
        <>
            <Header />
            <NoticeStyle>
                {notice && notice.map(noticeText => (
                    <div className="noticeCtn" key={noticeText.anum} >
                        <div className="noticeDesc">
                            <h2>{noticeText.title}</h2><br />
                            <div className="line" /><br /><br />
                            <div className="explain">
                                <div className="main" dangerouslySetInnerHTML={{ __html: noticeText.text }} />
                                <br /><br/>
                            </div>
                            
                            <div className="eventList">
                                <button className="descBtn" onClick={()=>nav(-1)}>목록</button>
                                <button className="descBtn">수정</button>
                            </div>
                        </div>
                    </div>
                ))}
            </NoticeStyle>
            <Footer />
        </>
    );
}
export default Notice;