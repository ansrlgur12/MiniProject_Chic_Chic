import React, {useState} from "react";
import styled, {css} from "styled-components";
import logoImage from "../image/로고.jpg"
import { Link, useNavigate } from "react-router-dom";
import "./font.css";
import { useContext,useEffect } from "react";
import { UserContext } from "../context/UserInfo";
import Modal from "../util/Modal";
import profile from "../image/기본프로필.jpg"

const HeaderStyle = styled.div`

    box-sizing: border-box;
    background-color: white;
    position: fixed;
    width: 100vw;
    height: 130px;
    display: flex;
    flex-direction: column;
    z-index: 10;
    
    border-bottom: 1px solid #ccc;
    .profileP1 {
        width: 50px;
        height: 50px;
        border: 1px solid #ccc;
        border-radius: 50%;
    }
 .top{
    height: 15px;
    background-color: #42240a;
    margin-bottom: 10px;
  }
  .logo-line{
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  .logo-line .logo-left{
    /* padding-left: 15vw; */
    flex-basis: 20%;
  }
  .logo-line .logo{
    width: 250px;
    height: 100%;
  }
  .logo-line .logo .image{
    cursor:pointer;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
  .logo-line .logo-right{
    justify-content: space-evenly;
    align-items: center;
    flex-basis: 20%;
    display: flex;
    flex-direction: row;
  }
  .logo-line .logo-right .searchbar{
    display: flex;
    height: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .logo-line .logo-right .searchbar .search-btn{
    margin-right: 15px;
    cursor: pointer;
  }
  .logo-line .logo-right .searchbar .search-btn:active{
    background-color: aquamarine;
  }
  
 
  .nav{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav .menu{
    font-family : 'NeoDunggeunmoPro-Regular';
    width: 650px;
    display: flex;
    justify-content: center;
    font-size: 1.1em;
    font-weight: 100;
  }
  
  a{
    text-decoration: none;
    font-weight: bold;
    color: #42240a;
  }
  h2 {
    display: block;
    font-size: 1.5em;
    margin-top: 0.83em;
    margin-bottom: 0.83em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }

  .caption{
            color: #42240a;
            position: absolute;
            overflow: hidden;
            display: flex;
            flex-direction: row;
            justify-content: center;
            padding-top: 10px;
            width: 650px;
            height: 0px;
            background-color: white;
            transition: all;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
           transition-duration: .3s;
           transition-delay: .3s;
           font-size: small;
            opacity: 0;
            z-index: 1;
            top: 110px;
        }
    .nav:hover .caption{
        opacity: 1;
        transform: translateY(20px);
        
        height: 150px;
    }
    .caption:hover{
    }
    .caption .caption-title{
        position: relative;
        margin: 0px 50px;
        line-height: 2;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
    }
    .menutitle{
        margin: 0px 50px 0px 50px;
        color: #42240a;
    }
    .review{
        position: absolute;
        left: 30px;
    }
    .custom{
        position: absolute;
        left: 30px;
    }
    .notice{
        position: absolute;
        left: 15px;
    }
  
    .user-profile{
      width:140px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .BtnCon{
      width:120px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .memBtn{
      background-color: #fff;
      font-family: 'NeoDunggeunmoPro-Regular';
      border: 1px solid black;

    }
`;

const Header = () => {

  const context = useContext(UserContext);
  const {setUserId, setPassword, setIsLogin, isLogin, url, userImage} = context;
  
    const nav = useNavigate();
    const[modalOpen, setModalOpen] = useState(false);

   

    const needLogin = () => {
      setModalOpen(true);
    }

    const closeModal = () => {
      setModalOpen(false);
    }

    return(
        <>
            <HeaderStyle>
                <div className="top"></div>
                <div className="logo-line">
                    <div className="logo-left"></div>
                    <div className="logo" onClick={()=>nav("/")}><div className="image" style={{ backgroundImage: `url(${logoImage})`, backgroundSize: 'cover' }}></div></div>
                    <div className="logo-right">
                        <div className="searchbar">
                        <div className="search-btn" onClick={()=>nav("/Search")}><span>search</span><i className="fas fa-search"></i></div>
                        </div>
                        {isLogin ? (
  <div className="user-profile">
    <img
      className="profileP1"
      src={userImage || profile}
      onClick={()=> {isLogin ? nav("/MyPage") : needLogin()}}
      style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat',cursor:"pointer" }}
    />
   
    <button className="memBtn" onClick={() => { setUserId(""); setPassword(""); setIsLogin(false); nav("/"); }}>Logout</button>
  </div>
) : (
  <div className="BtnCon">
  <button className="memBtn" onClick={() => {  nav("/Login")  }}>Login</button>
  </div>
)}
                    </div>
                </div>
                <div className="nav">
                <div className="menu">
                    <p className="menutitle title1">Perfume</p>
                    <p className="menutitle title2">Community</p>
                    <p className="menutitle title3">Custom</p>
                    <p className="menutitle title4">Notice</p>
                    <div className="caption">
                        <div className="caption-title perfume">
                            <p onClick={()=>nav("/Perfume")}>향수</p>
                        </div>
                        <div className="caption-title review">
                            <p onClick={()=>nav("/Community")}>리뷰</p>
                            <p onClick={()=>nav("/Information")}>정보공유</p>
                            <p onClick={()=>nav("/UserDeal")}>회원거래</p>
                        </div>
                        <div className="caption-title custom">
                            <p onClick={()=>nav("/testmain")}>향수 테스트</p>
                            <p onClick={()=>nav("/NoteFinderMain")} >노트 피라미드</p>
                        </div>
                        <div className="caption-title notice">
                            <p onClick={()=>nav("/Notice")}>공지사항</p>
                            <p onClick={()=>nav("/EventPage")}>이벤트</p>
                            <p onClick={()=>nav("/News")}>새 소식</p>
                        </div>
                    </div>
                </div>
                </div>
            </HeaderStyle>
            <Modal open={modalOpen} type={true} confirm={()=>nav("/Login")} close={closeModal} header={"확인"}>로그인이 필요합니다</Modal>
        </>
    );
}
export default Header;