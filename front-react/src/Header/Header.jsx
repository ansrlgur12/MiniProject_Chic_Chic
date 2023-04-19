import React from "react";
import styled, {css} from "styled-components";
import logoImage from "./image/로고.jpg"
import { Link } from "react-router-dom";

const HeaderStyle = styled.div`
    box-sizing: border-box;
    background-color: white;
    position: fixed;
    width: 100vw;
    height: 130px;
    display: flex;
    flex-direction: column;
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
    width: 400px;
    display: flex;
    justify-content: space-evenly;
    font-size: 0.9em;
  }
  
  a{
    text-decoration: none;
    font-weight: bold;
    color: #42240a;
  }
`;

const Header = () => {


    return(
        <>
            <HeaderStyle>
                <div class="top"></div>
                <div class="logo-line">
                    <div class="logo-left"></div>
                    <div class="logo"><div className="image" style={{ backgroundImage: `url(${logoImage})`, backgroundSize: 'cover' }}></div></div>
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
                    <a href="#">Perfume</a>
                    <Link to = "/community">소개</Link>
                    <a href="#">Custom</a>
                    <a href="#">Notice</a>
                </div>
                </div>
            </HeaderStyle>
        </>
    );
}
export default Header;