import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Header/Header";
import { ImageTestStyle,ImageTestStyle1 } from "./imageTest";


const TestResult = () => {
const nav = useNavigate();
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
          
           <div className="resultbox"></div>
            <h2>아무거나</h2> <h3>입니다.</h3>
            
             <button class="startBtn" onClick={()=>nav("/imageTest")}>향수 정보</button>
             
          </div>
          
        </div>

        </ImageTestStyle1>
    </ImageTestStyle>
    </>
);
};
export default TestResult;