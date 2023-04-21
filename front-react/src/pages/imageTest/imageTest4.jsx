import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Header/Header";
import { ImageTestStyle,ImageTestStyle1,Gage,TextOpt } from "./imageTest";


const ImageTest4 = () => {
    const nav = useNavigate();
    return(
        <>
                   <Header/>
        <ImageTestStyle>
            <ImageTestStyle1>
        <div class="container">
        <Gage>
            <div className="gage">
          <p className="qnum">5/6</p>
        <div class="qheader">
          <div className="bar" style={{width:' 17vw',height:'100%', background:'black'}}></div>
        </div>
        </div>
        </Gage>
        <div class="content">
          <div class="question">
            <h2 class="question-title">질문 5</h2>
            <p class="question-description">어느 성별 타입의 향수를 선호하세요?</p>
            </div>
            <div class="options">
             <TextOpt>
              <button class="text-option" onClick={()=>nav("/imageTest5")}>남성</button>
              <button class="text-option" onClick={()=>nav("/imageTest5")}>여성</button>
              <button class="text-option" onClick={()=>nav("/TestResult")}>중성</button>
              </TextOpt>
             
            
            </div>
          </div>
          
        </div>
      
      </ImageTestStyle1>
      </ImageTestStyle>
        </>
        
    );
};
export default ImageTest4;