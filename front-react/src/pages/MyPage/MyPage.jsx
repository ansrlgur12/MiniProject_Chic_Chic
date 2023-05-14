import React from "react";
import styled, {css} from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import profileimg from "../../image/face.png"
import gradeimg5 from "../../image/gradeLv5.png"
import { UserContext } from "../../context/UserInfo";
import { useContext, useState } from "react";
import { storage } from "../../firebase/firebase";

export const MyPageStyle = styled.div`
    box-sizing: border-box;
    margin: 0px;
    height: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;

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
`;

const MyPage = () => {
    const nav = useNavigate();
    const context = useContext(UserContext);
    const {userId, setUserId, setPassword, setIsLogin, isLogin} = context;
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState('');
    const [updateProfile, setUpdateProfile] = useState(false);

    const onClickLogout = () => {
        console.log("로그아웃 버튼 클릭");
        setUserId("");
        setPassword("");
        setIsLogin(false);
        console.log(isLogin);
        nav("/");
    }

    const handleFileInputChange = (e) => {
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);
      };

    const handleUploadClick = () => {
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);
        fileRef.put(file).then(() => {
          console.log('File uploaded successfully!');
          fileRef.getDownloadURL().then((url) => {
            console.log("저장경로 확인 : " + url);
            setUrl(url);
            setUpdateProfile(false);
          });
        });
      };
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
                                    <img className="profileP1" src={url} style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></img>
                                    <div className="profileP2">
                                        <button onClick={()=>setUpdateProfile(true)}>프로필 편집</button>
                                        <div className={updateProfile ? "profileChange" : "noProfileChange"}>
                                            <input type="file" onChange={handleFileInputChange} />
                                            <button onClick={handleUploadClick}>변경</button>
                                            <button onClick={()=>setUpdateProfile(false)}>취소</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="profileC">
                                    <div className="perProfile">
                                        <div className="nickname">아이디 : {userId}</div>
                                        <div className="gradeLv">회원 등급 : <p className="gradeImg" style={{backgroundImage: `url(${gradeimg5})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></p></div>
                                        <div><button className="logOut" onClick={onClickLogout}>로그아웃</button></div>
                                    </div>
                                    <div className="textProfile">
                                        <div className="textHistory">내 리뷰</div>
                                        <div className="textHistory">내 댓글</div>
                                        <div className="textHistory">내 좋아요</div>
                                        <div className="textHistory">내 한줄평</div>
                                    </div>
                                </div>
                            </div>
                            <div className="down">
                                <div className="pr1"><h4>소개 글</h4></div>
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