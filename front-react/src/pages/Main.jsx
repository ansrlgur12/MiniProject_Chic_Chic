import React from "react";
import styled, {css} from "styled-components";
import Header from "../Header/Header";
import mainImage1 from "../image/메인3.jpg";
import mainImage2 from "../image/커뮤.jpg";
import mainImage3 from "../image/커스텀3.jpg";
import mainImage4 from "../image/공지2.jpg";

const MainStyle = styled.div`
.main .container{
    padding-top: 130px;
  }
  .main .container .article{
    
    width: 100%;
    height: 65vh;
  }
  .main-image{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  .article:nth-child(1) .main-image{
    background-image: url("./image/메인3.jpg");
  }
  
  .article:nth-child(2) .main-image{
    background-image: url("./image/커뮤.jpg");
  }
  
  .article:nth-child(3) .main-image{
    background-image: url("./image/커스텀3.jpg");
  }
  
  .article:nth-child(4) .main-image{
    background-image: url("./image/공지2.jpg");
  }
  .article .main-image .main-btn {
    width: 100px;
    height: 50px;
    border-style: none;
    background-color: rgba(255, 255, 255);
    font-weight: bold;
  }
  .main-desc{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex-basis: 60%;
    width: 25%;
    background-color: #341a01b3;
    margin-bottom: 15px;
  }
  h2{
    font-size: 2em;
    font-weight: bold;
    color: white;
  }
  p{
    text-align: center;
    color: white;
    font-weight: bold;
    line-height: 1.5;
  }
`;

const Main = () => {

    return(
        <>
        <Header/>
        <MainStyle>
        <div class="main">
            <div class="container">
                <div class="article 1"><div class="main-image" style={{ backgroundImage: `url(${mainImage1})`, backgroundSize: 'cover' }}><div class="main-desc"><h2>Perfume</h2><p>설명설명 설명설명<br/>설safsdfsfdsasfasdf명설명tjfaud 설명</p></div><button class="main-btn">자세히 보기</button></div></div>
                <div class="article 2"><div class="main-image" style={{ backgroundImage: `url(${mainImage2})`, backgroundSize: 'cover' }}><div class="main-desc"><h2>Community</h2><p>설명설명 설명설명<br/>설safsdfsfdsasfasdf명설명tjfaud 설명</p></div><button class="main-btn">자세히 보기</button></div></div>
                <div class="article 3"><div class="main-image" style={{ backgroundImage: `url(${mainImage3})`, backgroundSize: 'cover' }}><div class="main-desc"><h2>Custom</h2><p>설명설명 설명설명<br/>설safsdfsfdsasfasdf명설명tjfaud 설명</p></div><button class="main-btn">자세히 보기</button></div></div>
                <div class="article 4"><div class="main-image" style={{ backgroundImage: `url(${mainImage4})`, backgroundSize: 'cover' }}><div class="main-desc"><h2>Notice</h2><p>설명설명 설명설명<br/>설safsdfsfdsasfasdf명설명tjfaud 설명</p></div><button class="main-btn">자세히 보기</button></div></div>
            </div>
        </div>
        </MainStyle>
        </>
    );
}
export default Main;