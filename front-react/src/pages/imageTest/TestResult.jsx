import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Header/Header";
import { ImageTestStyle,ImageTestStyle1 } from "./imageTest";
import { useNavigate } from "react-router-dom";

const TestResult = () => {
  
  const location = useLocation();
  const perfumes = location.state?.perfumes || null;
  const nav = useNavigate();
  
  const goToPerfumeDetail = () => { // add this function
    if(perfumes){
      nav(`/perfumeDetail/${perfumes.perfumeNumber}`);
    }
  }
  

return(
    <>
    <Header/>
    <ImageTestStyle>
        <ImageTestStyle1>
        <div className="container">
        <div className="header">
          <h1 className="title">가장 어울리는 향수는</h1>

        </div>
        <div className="content">
          
          
        {  perfumes && (
  
  <div key={perfumes.perfumeNumber}>
     
    <div className='thumbnail'>
  
          <img src={perfumes.thumbnail} alt="thumbnail" />
      
      </div>
      <h2>{perfumes.name}</h2>
      <h2>입니다.</h2>
  </div>
)}
                  </div>
               
                
             <button className="startBtn" onClick={goToPerfumeDetail}>향수 정보</button>
             
          </div>
          


        </ImageTestStyle1>
    </ImageTestStyle>
    </>
);
};
export default TestResult;