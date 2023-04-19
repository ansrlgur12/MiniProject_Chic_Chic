import React from "react";
import styled, {css} from "styled-components";
import logoImage from "../image/로고.jpg"
import { Link, useNavigate } from "react-router-dom";
import "./font.css";

const HeaderStyle = styled.div`

    box-sizing: border-box;
    background-color: white;
    position: fixed;
    width: 100vw;
    height: 130px;
    display: flex;
    flex-direction: column;
    
    border-bottom: 1px solid #ccc;
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
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: url("./image/로고.jpg");
  }
  .logo-line .logo-right{
    justify-content: center;
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
  }
  .logo-line .logo-right .searchbar .search-btn:active{
    background-color: aquamarine;
  }
  
  .logo-line .logo-right .searchbar .search-txt{
    height: 30px;
    margin-right: 15px;
    display: none;
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
    justify-content: space-around;
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
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            padding-top: 10px;
            padding-left: 30px;
            width: 650px;
            height: 150px;
            background-color: white;
            transition: all;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
           transition-duration: .3s;
           transition-delay: .3s;
           font-size: small;
            opacity: 0;
        }
    .menu:hover .caption{
        opacity: 1;
        transform: translateY(37px);
    }
    .caption .caption-title{
        line-height: 2;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
    }
`;

const Header = () => {

    const nav = useNavigate();

    return(
        <>
            <HeaderStyle>
                <div class="top"></div>
                <div class="logo-line">
                    <div class="logo-left"></div>
                    <div class="logo" onClick={()=>nav("/")}><div className="image" style={{ backgroundImage: `url(${logoImage})`, backgroundSize: 'cover' }}></div></div>
                    <div class="logo-right">
                        <div class="searchbar">
                        <input class="search-txt" type="text" placeholder="" />
                        <div class="search-btn"><i class="fas fa-search"></i></div>
                    </div>
                    <span class="material-symbols-outlined">
                        person
                    </span>
                </div>
                </div>
                <div class="nav">
                <div class="menu">
                    <Link to = "/">Perfume</Link>
                    <Link to = "/community">Community</Link>
                    <Link to = "/">Custom</Link>
                    <Link to = "/">Notice</Link>
                    <div class="caption">
                        <div className="caption-title">
                            <p>향수</p>
                        </div>
                        <div className="caption-title">
                            <p onClick={()=>nav("/Community")}>리뷰</p>
                            <p>정보공유</p>
                            <p>회원거래</p>
                        </div>
                        <div className="caption-title">
                            <p onClick={()=>nav("/testmain")}>향수 테스트</p>
                            <p>노트 피라미드</p>
                        </div>
                        <div className="caption-title">
                            <p>공지사항</p>
                            <p>이벤트</p>
                            <p>새 소식</p>
                        </div>
                    </div>
                </div>
                </div>
            </HeaderStyle>
        </>
    );
}
export default Header;