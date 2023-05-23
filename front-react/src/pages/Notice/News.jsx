import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import styled from "styled-components";
import Footer from "../../Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import AxiosApi from "../../api/Axios";

const NewsStyle = styled.div`
    font-family: 'KorailRoundGothicBold';
    background-color: #8e6240;
    box-sizing: border-box;
    padding-top: 130px;
    height: auto;
    display: flex;
    justify-content: center;
    
    .newsContainer{
        text-align: center;
        border-radius: 15px;
        background-color: white;
        padding: 60px 60px 0px 60px;
        margin-top: 70px;
        width: 65vw;
        margin-bottom: 80px;
    }
    .newsDesc{
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
                <div className="newsContainer" key={newsText.anum}>
                    <div className="newsDesc">
                        <h2>{newsText.title}</h2><br />
                        <div className="line" /><br /><br />
                        <div className="explain">
                            <div className="main" dangerouslySetInnerHTML={{ __html: newsText.text }} /><br /><br/>
                            <br /><br />
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