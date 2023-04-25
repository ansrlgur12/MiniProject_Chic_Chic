import React from "react";
import styled, {css} from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import profileimg from "../../image/profile.png"
import gradeimg5 from "../../image/gradeLv5.png"

export const MyPageStyle = styled.div`
    box-sizing: border-box;
    margin: 0px;
    height: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .container {
        width: 1024px;
        height: auto;
        display: inline-block;
        margin-top: 130px;
    }
    .top {
        width: 1fr;
        height: auto;
        border: 1px solid black;
        padding: 20px
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
    .line {
        border-bottom: 1px solid #afafaf;
        margin: 20px 0;
    }
    .pr2{
        width: 1fr;
        height: 120px;
        border: 1px solid #afafaf;
    }
    .down {
        margin-top: 2em;
        border-top: 1px solid black;
        padding-top: 1em;
    }
`;

const MyPage = () => {

    const nav = useNavigate();

    return (
        <>
            <Header/>
            <MyPageStyle>
                <div className="container">
                    <div className="top">
                        <div className="inside">
                            <div className="up">
                                <div className="profileP">
                                    <div className="profileP1" style={{backgroundImage: `url(${profileimg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
                                    <div className="profileP2">
                                        <button>프로필 편집</button>
                                    </div>
                                </div>
                                <div className="profileC">
                                    <div className="perProfile">
                                        <div className="nickname">닉네임 : 곰돌이 사육사</div>
                                        <div className="gradeLv">회원 등급 : <p className="gradeImg" style={{backgroundImage: `url(${gradeimg5})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></p></div>
                                    </div>
                                    <div className="textProfile">
                                        <div className="textHistory">내 리뷰</div>
                                        <div className="textHistory">내 댓글</div>
                                        <div className="textHistory">내 좋아요</div>
                                        <div className="textHistory">내 관심목록</div>
                                    </div>
                                </div>
                            </div>
                            <div className="down">
                                <div className="pr1"><h3>소개 글</h3></div>
                                <div className="pr2">안녕하세요 <br />소개 글 작성란입니다.</div>
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

export default MyPage;