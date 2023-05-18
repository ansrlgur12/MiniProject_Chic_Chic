import React, { useEffect } from "react";
import styled, {css} from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import gradeimg5 from "../../image/gradeLv5.png"
import { UserContext } from "../../context/UserInfo";
import { useContext, useState } from "react";
import { storage } from "../../firebase/firebase";
import profile from "../../image/기본프로필.jpg";
import AxiosApi from "../../api/Axios";
import firebase from 'firebase/app';
import 'firebase/analytics';
import Modal from "../../util/Modal";
import MyReview from "./MyReview";
import Tooltip from "../../util/ToolTip";


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
`;

const MyPage = () => {

    const nav = useNavigate();
    const context = useContext(UserContext);
    const {userId, setUserId, setPassword, setIsLogin, isLogin,userImage,setUserImage} = context;
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState('');
    const [updateProfile, setUpdateProfile] = useState(false);
    
    window.scrollTo(0, 0);
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    useEffect(()=> {
        const userInfo = async() => {
            const rsp = await AxiosApi.getImage(userId);
            await AxiosApi.myGrade(userId);
            console.log(rsp);
            setUrl(rsp.data[0].userImg);
            setUserImage(rsp.data[0].userImg);
        }
        userInfo();
    },[]);

    useEffect(() => {
        if (!isLogin) {
          nav("/");
          alert("로그인이 필요합니다.");
        }
      }, [isLogin, nav]);

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

    const handleUploadClick = async() => {
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);
        fileRef.put(file).then(() => {
          console.log('File uploaded successfully!');
          fileRef.getDownloadURL().then((url) => {
            console.log("저장경로 확인 : " + url);
            setUrl(url);
           
            const update = async() => {
                console.log(url);
                console.log(userId);
                await AxiosApi.updateImage(userId, url);
            };
            update();
            setUserImage(url);
            setUpdateProfile(false);

          });
        });
        
      };

    const onClickMemberDelete = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    };

    

    const confirmModal = async() => {
        setModalOpen(false);
        const deleteMember = async() => {
            const memberReg = await AxiosApi.memberDelete(userId);
            console.log(memberReg.data.result);
            setDeleteModalOpen(true);
        };
        await deleteMember();
        
    };

    const [orderBy, setOrderBy] = useState("");

    const handleNum = (e) => {
        setOrderBy(e.target.dataset.value);
        console.log(e.target.dataset.value);
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
                                    <img className="profileP1" src={url ? url : profile} style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></img>
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
                                        <Tooltip content="회원등급 설정방식 : dsfds"><button className="hintBtn">?</button></Tooltip>
                                        <div><button className="logOut" onClick={onClickLogout}>로그아웃</button></div>
                                        <div><button className="logOut" onClick={onClickMemberDelete}>회원탈퇴</button></div>
                                    </div>
                                    <div className="textProfile">
                                        <button className="textHistory" data-value={1} onClick={handleNum}>내 리뷰</button>
                                        <button className="textHistory" data-value={2} onClick={handleNum}>내 댓글</button>
                                        <button className="textHistory" data-value={3} onClick={handleNum}>내 좋아요</button>
                                        <button className="textHistory" data-value={4} onClick={handleNum}>내 한줄평</button>
                                    </div>
                                </div>
                            </div>
                            <div className="down">
                                <MyReview id={userId} views={orderBy}/>
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="bottom">
                        
                    </div>
                </div>
                <Modal open={modalOpen} confirm={confirmModal} close={closeModal} type={true} header="확인">정말 탈퇴하시겠습니까?</Modal>
                <Modal open={deleteModalOpen} confirm={()=>window.location.replace("/")} justConfirm={true} header="확인">회원 탈퇴가 완료되었습니다.</Modal>
                
            </MyPageStyle>
            <Footer />
        </>
    );
}

export default MyPage;