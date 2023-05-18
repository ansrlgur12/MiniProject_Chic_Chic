import React, { useEffect } from "react";
import styled from "styled-components";
import {useNavigate, useParams } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { useState } from "react";
import profile from "../../image/기본프로필.jpg";
import AxiosApi from "../../api/Axios";
import 'firebase/analytics';
import MyReview from "./MyReview";
import Tooltip from "../../util/ToolTip";
import grade from "../../image/향수등급.png";
import gradeGold from "../../image/금.png";
import gradeSilver from "../../image/은.png";
import gradeBronze from "../../image/동.png";


export const MyPageStyle = styled.div`
    box-sizing: border-box;
    margin: 0px;
    height: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .hintBtn {
        border-radius: 50px;
        width: 25px;
        height: 25px;
        background-color: white;
        border: 1px solid black;
        text-align: center;
        line-height: 1;
    }
    .container {
        width: 960px;
        height: auto;
        display: inline-block;
        margin-top: 130px;
    }
    h2 {
        text-align: center;
        margin: 1em;
    }
    .top {
        width: 1fr;
        height: auto;
        border: 1px solid black;
        padding: 20px;
        border-radius: 10px;
    }
    .profileP1 {
        width: 100px;
        height: 100px;
        border: 1px solid black;
        border-radius: 50%;
    }
    .profileP2 {
        display: flex;
        justify-items: center;
        align-items: center;
        margin: 4px;
        margin-top: 10px;
    }
    .up {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

    }
    .textProfile {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .textHistory {
        border: 1px solid black;
        margin: 16px;
        padding: 4px 8px;
        border-radius: 5px;
        cursor: pointer;
    }
    .gradeImg {
        width: 10px;
        height: 10px;
        padding: 12px;
    }
    .gradeLv{
        display: flex;
    }
    .perProfile {
        display: flex;
        justify-content: space-around;
    }
    .inside {
        border-bottom: 1px solid #afafaf;
        margin: 20px 0;

    }
    .pr1 .pr2 {
        margin: 20px;
    }
    .pr2{
        width: 1fr;
        height: 120px;
        border: 1px solid #afafaf;
        padding: 10px;
    }
    .down {
        margin-top: 2em;
        border-top: 1px solid black;
        padding-top: 1em;
        display: flex;
        justify-content: center;
    }
    .profileP2{
        width: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: baseline;
    }
    .profileChange button{
        margin-top: 10px;
        margin-right: 10px;
    }
    .profileChange input{
        margin-top: 10px;
        margin-right: 10px;
    }
    .noProfileChange{
        display: none;
    }
    .noClicked{
        display: none;
    }
`;

const UserProfile = () => {

    const { id } = useParams(); 

    const nav = useNavigate();
    const [url, setUrl] = useState('');
    window.scrollTo(0, 0);
    const [userGrade, setUserGrade] = useState(1);
    const [clicked, setClicked] = useState(false);

    useEffect(()=> {
        const userInfo = async() => {
            console.log(id);
            const rsp = await AxiosApi.getImage(id);
            console.log(rsp);
            setUserGrade(rsp.data[0].userGrade);
            setUrl(rsp.data[0].userImg);
        }
        userInfo();
    },[id]);


    const [orderBy, setOrderBy] = useState(1);

    const handleNum = (e) => {
        setOrderBy(e.target.dataset.value);
        console.log(e.target.dataset.value);
        setClicked(true);
    };
      
    let gradeImage = "";

    switch(userGrade) {
        case 0 : gradeImage = grade; break;
        case 1 : gradeImage = gradeBronze; break;
        case 2 : gradeImage = gradeSilver; break;
        case 3 : gradeImage = gradeGold; break;
        default : gradeImage = gradeGold; break;
    }

    return (
        <>
            <Header/>
            <MyPageStyle>
                <div className="container">
                    <h2>My Page</h2>
                    <div className="top">
                        <div className="inside">
                            <div className="up">
                                <div className="profileP">
                                    <img className="profileP1" src={url ? url : profile} style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></img>
                                </div>
                                <div className="profileC">
                                    <div className="perProfile">
                                        <div className="nickname">아이디 : {id}</div>
                                        <div className="gradeLv">회원 등급 : <p className="gradeImg" style={{backgroundImage: `url(${gradeImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', }}></p></div>
                                        <Tooltip content="회원등급 설정방식 : dsfds"><button className="hintBtn">?</button></Tooltip>
                                    </div>
                                    <div className="textProfile">
                                        <button className="textHistory" data-value={1} onClick={handleNum}>내 리뷰</button>
                                        <button className="textHistory" data-value={2} onClick={handleNum}>내 댓글</button>
                                        <button className="textHistory" data-value={3} onClick={handleNum}>내 좋아요</button>
                                        <button className="textHistory" data-value={4} onClick={handleNum}>내 한줄평</button>
                                    </div>
                                </div>
                            </div>
                            <div className= {clicked ? "down" : "noClicked"}>
                                <MyReview id={id} views={orderBy}/>
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="bottom">
                        
                    </div>
                </div>
                
            </MyPageStyle>
            <Footer />
        </>
    );
}

export default UserProfile;