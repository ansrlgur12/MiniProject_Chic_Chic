import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import mainImage1 from "../image/메인3.jpg";
import mainImage2 from "../image/커뮤.jpg";
import mainImage3 from "../image/커스텀3.jpg";
import mainImage4 from "../image/공지2.jpg";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const MainStyle = styled.div`
    padding-top: 130px;
    font-family: 'KIMM_Bold';
  
  
  .article{
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
  window.scrollTo(0, 0);

    const nav = useNavigate();

    return(
        <>
        <Header/>
        <MainStyle>
        <div className="main">
            <div className="articleContainer">
                <div className="article 1"><div className="main-image" style={{ backgroundImage: `url(${mainImage1})`, backgroundSize: 'cover' }}><div className="main-desc"><h2>Monthly Perfume</h2><p>이번달의 Top3 향수</p></div><button className="main-btn">자세히 보기</button></div></div>
                <div className="article 2"><div className="main-image" style={{ backgroundImage: `url(${mainImage2})`, backgroundSize: 'cover' }}><div className="main-desc"><h2>Perfume Test</h2><p>어떤 향수를 써야할지 모르겠다면?<br/><br/>향수 이미지 테스트를 통해<br/> 본인과 맞는 향수를 추천해드립니다.</p></div><button className="main-btn" onClick={()=>nav("/Testmain")}>자세히 보기</button></div></div>
                <div className="article 3"><div className="main-image" style={{ backgroundImage: `url(${mainImage3})`, backgroundSize: 'cover' }}><div className="main-desc"><h2>Note Finder</h2><p>노트 피라미드에 각 노트별로 원하는 향을 골라보세요<br/>노트별로 고르신 향으로 이루어진 향수를 보여드립니다.</p></div><button className="main-btn" onClick={()=>nav("/NoteFinderMain")}>자세히 보기</button></div></div>
                <div className="article 4"><div className="main-image" style={{ backgroundImage: `url(${mainImage4})`, backgroundSize: 'cover' }}><div className="main-desc"><h2>Notice</h2><p>새로운 소식과 공지사항을 확인해보세요</p></div><button className="main-btn">자세히 보기</button></div></div>
            </div>
        </div>
        </MainStyle>
        <Footer />
        </>
    );
}
export default Main;