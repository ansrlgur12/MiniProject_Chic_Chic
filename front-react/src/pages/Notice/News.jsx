import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import styled from "styled-components";
import Footer from "../../Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import AxiosApi from "../../api/Axios";

const NewsStyle = styled.div`
    box-sizing: border-box;
    padding-top: 130px;
    height: auto;
    display: flex;
    justify-content: center;
    
    .noticeCtn{
        text-align: center;
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

const News = () => {
    const { num } = useParams();
    const nav = useNavigate();
    const [news, setNews] = useState("");

    useEffect (()=>{
        const news = async() => {
            const rsp = await AxiosApi.ariticle(num);
            setNews(rsp.data);
        }
        news();
    },[num]);


    return(
        <>
        <Header />
        <NewsStyle>
            {news && news.map(newsText => (
                <div className="newContainer" key={newsText.anum}>
                    <div className="newsDesc">
                        <h2>{newsText.title}</h2><br />
                        <div className="line" /><br /><br />
                        <div className="explain">
                            {newsText.text}<br /><br />
                        </div>
                        <div className="eventList">
                            <button className="descBtn" onClick={()=>nav(-1)}>목록</button>
                            <button className="descBtn">수정</button>
                        </div>
                    </div>
                </div>
            ))}
        </NewsStyle>
        <Footer />
        </>
    );
}

export default News;