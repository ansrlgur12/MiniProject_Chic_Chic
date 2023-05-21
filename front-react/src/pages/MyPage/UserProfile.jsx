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


export const UserProfileStyle = styled.div`
    font-family: 'KorailRoundGothicBold';
    background-color: #FFF7D4 ;
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
        width: 60%;
        height: auto;
        display: inline-block;
        margin-top: 130px;
    }
    

    h2 {
        text-align: center;
        margin: 1em;
    }
    .top {
        background-color: white;
        width: 1fr;
        height: 100%;
        border: .5px solid #ccc;
        /* padding: 20px; */
        padding: 0px 20px;
        border-radius: 10px;
        margin-top: 5em;
    }
    .profileP1 {
        width: 130px;
        height: 130px;
        border: .5px solid #8d8d8d;
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
        padding-left: 30px;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: center;
        height: 50%;

    }
    .textProfile {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .textHistory {
        border: .5px solid #878787;
        width: 80px;
        margin: 16px;
        padding: 4px 8px;
        border-radius: 15px;
        cursor: pointer;
    }
    .gradeImg {
        margin-left: 10px;
        width: 10px;
        height: 10px;
        padding: 12px;
    }
    .gradeLv{
        display: flex;
    }
    .perProfile {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .inside {
        display: flex;
        flex-direction: column;
        /* border-bottom: 1px solid #afafaf; */
        height: auto;
        margin-top: 20px;
        /* padding-bottom: 15px; */
        /* background-color: royalblue; */

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
        /* margin-top: 2em; */
        /* border-top: 1px solid black; */
        /* padding-top: 1em; */
        height: 130px;
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
    .profileP{
        flex-basis: 25%;
    }
    .profileC{
        
        flex-basis: 55%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        
        
    }
    .profileS{
        flex-basis: 15%;
        height: 100%;
    }
    .nickname{
        font-family: 'KIMM_Bold';
        font-size: 1.5em;
        height: 50%;
        margin-bottom: 15px;
    }
    .grade{
        height: 50%;
        display: flex;
        flex-direction: row;
    }
    .clickedTextHistory{
        border: .5px solid #878787;
        width: 80px;
        margin: 16px;
        padding: 4px 8px;
        border-radius: 15px;
        cursor: pointer;
        background-color: rgb(113, 81, 29);
        color: white;
    }
    .logOut{
        height: 2em;
        width: 110px;
        background-color: #FFD95A;
        margin-bottom: 5px;
        border-radius: 5px;
        padding : .2em;
        border: .5px solid #ccc;
        color: white;
    }
    .red{
        color: orangered;
    }


`;

const UserProfile = () => {

    const { id } = useParams(); 

    const nav = useNavigate();
    const [url, setUrl] = useState('');
    window.scrollTo(0, 0);
    const [userGrade, setUserGrade] = useState(1);
    const [clicked, setClicked] = useState(false);
    const [reviewClicked, setReviewClicked] = useState(false); 
    const [commentClicked, setCommentClicked] = useState(false);
    const [likeClicked, setLikeClicked] = useState(false);
    const [reviewCommentClicked, setReviewCommentClicked] = useState(false);

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
        const selectedValue = e.target.dataset.value;
        setOrderBy(selectedValue);
        console.log(selectedValue);
        setClicked(true);

                // 리뷰 버튼 클릭 시
        if (selectedValue === "1") {
            setReviewClicked(true);
            setCommentClicked(false);
            setLikeClicked(false);
            setReviewCommentClicked(false);
        }
        // 댓글 버튼 클릭 시
        else if (selectedValue === "2") {
            setReviewClicked(false);
            setCommentClicked(true);
            setLikeClicked(false);
            setReviewCommentClicked(false);
        }
        // 좋아요 버튼 클릭 시
        else if (selectedValue === "3") {
            setReviewClicked(false);
            setCommentClicked(false);
            setLikeClicked(true);
            setReviewCommentClicked(false);
        }
        // 한줄평 버튼 클릭 시
        else if (selectedValue === "4") {
            setReviewClicked(false);
            setCommentClicked(false);
            setLikeClicked(false);
            setReviewCommentClicked(true);
        }
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
            <UserProfileStyle>
                <div className="container">
                    <div className="top">
                        <div className="inside">
                            <div className="up">
                                <div className="profileP">
                                    <img className="profileP1" src={url ? url : profile} style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></img>
                                </div>
                                <div className="profileC">
                                    <div className="perProfile">
                                        <div className="nickname">{id}</div>
                                        <div className="grade">
                                            <div className="gradeLv">회원 등급  <p className="gradeImg" style={{backgroundImage: `url(${gradeImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', }}></p></div>
                                            <Tooltip image1={grade} image2={gradeBronze} image3={gradeSilver} image4={gradeGold}><button className="hintBtn">?</button></Tooltip>
                                        </div>
                                    </div>
                                </div>
                                <div className="profileS">
                                </div>
                            </div>
                        </div>
                        <div className="textProfile">
                                        <button className= {reviewClicked ?  "clickedTextHistory" : "textHistory"}  data-value={1} onClick={handleNum}>리뷰</button>
                                        <button className= {commentClicked ?  "clickedTextHistory" : "textHistory"} data-value={2} onClick={handleNum}>댓글</button>
                                        <button className= {likeClicked ?  "clickedTextHistory" : "textHistory"} data-value={3} onClick={handleNum}>좋아요</button>
                                        <button className= {reviewCommentClicked ?  "clickedTextHistory" : "textHistory"} data-value={4} onClick={handleNum}>한줄평</button>
                                    </div>
                            <div className= {clicked ? "down" : "noClicked"}>
                                <MyReview id={id} views={orderBy}/>
                            </div>
                    </div>
                </div>
            </UserProfileStyle>
            <Footer />
        </>
    );
}

export default UserProfile;