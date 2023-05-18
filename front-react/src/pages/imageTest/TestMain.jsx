import React from "react";
import Header from "../../Header/Header";

import {ImageTestStyle} from "./imageTest";
import{ImageTestStyle1}  from "./imageTest";
import { useNavigate } from "react-router-dom";

const Testmain = () => {
    const nav = useNavigate();

    return(
        <>
        <Header/>
        <ImageTestStyle>
            <ImageTestStyle1>
        <div className="container">
        <div className="header">
          <h1 className="title">향수 이미지 테스트</h1>
        </div>
        <div className="content">
          <div className="question">
            <h2 className="question-title">나에게 어울리는 향수는?</h2>
            
            
             <button className="startBtn" onClick={()=>nav("/imageTest")}>시작하기</button>
             
          </div>
          
        </div>
      </div>
      </ImageTestStyle1>
        </ImageTestStyle>
        
        </>
    );
};
export default Testmain;