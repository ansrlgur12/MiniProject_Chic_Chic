import React, { useEffect } from "react";
import styled, {css} from "styled-components";
import { Link, useNavigate } from "react-router-dom";
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
import grade from "../../image/향수등급.png";
import gradeGold from "../../image/금.png";
import gradeSilver from "../../image/은.png";
import gradeBronze from "../../image/동.png";
import MyComment from "./MyComment";
import { UserProfileStyle } from "./UserProfile";
import MyLiked from "./MyLiked";
import MyOneLine from "./MyOneLine";


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
        /* display: flex; */
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
    const [userGrade, setUserGrade] = useState(1);
    const [clicked, setClicked] = useState(false);
    const [reviewClicked, setReviewClicked] = useState(false); 
    const [commentClicked, setCommentClicked] = useState(false);
    const [likeClicked, setLikeClicked] = useState(false);
    const [reviewCommentClicked, setReviewCommentClicked] = useState(false);


    useEffect(()=> {
        const userInfo = async() => {
            const rsp = await AxiosApi.getImage(userId);
            await AxiosApi.myGrade(userId);
            console.log(rsp);
            setUserGrade(rsp.data[0].userGrade);
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

    const [orderBy, setOrderBy] = useState(1);

    const handleNum = (e) => {
        const selectedValue = e.target.dataset.value;
        setOrderBy(selectedValue);
        console.log(selectedValue);
        setClicked(true);        // 리뷰 버튼 클릭 시
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

    const onClickUpdate = (id) => {
        nav(`/UpdateMember/${id}`);
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
                                    <div className="profileP2">
                                        <div className={updateProfile ? "profileChange" : "noProfileChange"}>
                                            <input type="file" onChange={handleFileInputChange} />
                                            <button onClick={handleUploadClick}>변경</button>
                                            <button onClick={()=>setUpdateProfile(false)}>취소</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="profileC">
                                    <div className="perProfile">
                                        <div className="nickname">{userId}</div>
                                        <div className="grade">
                                            <div className="gradeLv">
                                                회원 등급 <p className="gradeImg" style={{backgroundImage: `url(${gradeImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', }}></p>
                                                </div>
                                            <Tooltip image1={grade} image2={gradeBronze} image3={gradeSilver} image4={gradeGold}><button className="hintBtn">?</button></Tooltip>
                                        </div>
                                    </div>
                                   
                                   
                                </div>
                                <div className="profileS">
                                {updateProfile && <button className="logOut" onClick={()=>setUpdateProfile(false)}>수정 완료</button>}
                                        {updateProfile && <button className="logOut" onClick={()=>onClickUpdate(userId)}>비밀번호 변경</button>}
                                        {!updateProfile && <button className="logOut" onClick={()=>setUpdateProfile(true)}>회원정보 수정</button>}
                                        <button className="logOut" onClick={onClickLogout}>로그아웃</button>
                                        {updateProfile && <button className="logOut red" onClick={onClickMemberDelete}>회원탈퇴</button>}
                                    </div>
                                    
                            </div>
                            <div className="textProfile">
                                        <button className= {reviewClicked ?  "clickedTextHistory" : "textHistory"}  data-value={1} onClick={handleNum}>리뷰</button>
                                        <button className= {commentClicked ?  "clickedTextHistory" : "textHistory"} data-value={2} onClick={handleNum}>댓글</button>
                                        <button className= {likeClicked ?  "clickedTextHistory" : "textHistory"} data-value={3} onClick={handleNum}>좋아요</button>
                                        <button className= {reviewCommentClicked ?  "clickedTextHistory" : "textHistory"} data-value={4} onClick={handleNum}>한줄평</button>
                                    </div>
                            <div className="down">
                                {reviewClicked && <MyReview id={userId} views={orderBy}/>}
                                {commentClicked && <MyComment id={userId} views={orderBy}/>}
                                {likeClicked && <MyLiked id={userId} views={orderBy}/>}
                                {reviewCommentClicked && <MyOneLine id={userId} views={orderBy}/>}
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="bottom">
                        
                    </div>
                </div>
                <Modal open={modalOpen} confirm={confirmModal} close={closeModal} type={true} header="확인">정말 탈퇴하시겠습니까?</Modal>
                <Modal open={deleteModalOpen} confirm={()=>window.location.replace("/")} justConfirm={true} header="확인">회원 탈퇴가 완료되었습니다.</Modal>
                </div>
            </UserProfileStyle>
            <Footer />
        </>
    );
}

export default MyPage;