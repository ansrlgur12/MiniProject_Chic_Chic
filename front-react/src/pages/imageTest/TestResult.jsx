import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Header/Header";
import { ImageTestStyle,ImageTestStyle1 } from "./imageTest";
import Loading from "../../util/Loading";

const TestResult = () => {
  
  const location = useLocation();
  const perfumes = location.state?.perfumes || null;
  
  


return(
    <>
    <Header/>
    <ImageTestStyle>
        <ImageTestStyle1>
        <div class="container">
        <div class="header">
          <h1 class="title">가장 어울리는 향수는</h1>

        </div>
        <div class="content">
          
          
        {  perfumes && (
  
  <div key={perfumes.perfume_number}>
     <h3>{perfumes.brand}</h3>
    <div className='thumbnail'>
  
          <img src={perfumes.thumbnail} alt="thumbnail" />
      
      </div>
      <h2>{perfumes.name}</h2>
      <h2>입니다.</h2>
  </div>
)}
                  </div>
               
                
             <button class="startBtn">향수 정보</button>
             
          </div>
          


        </ImageTestStyle1>
    </ImageTestStyle>
    </>
);
};
export default TestResult;