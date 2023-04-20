import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Header/Header";
import { ImageTestStyle,ImageTestStyle1,Gage,TextOpt } from "./imageTest";



const ImageTest3= ()=>{
      const nav= useNavigate();

    return(
        <>
           <Header/>
        <ImageTestStyle>
            <ImageTestStyle1>
        <div class="container">
        <Gage>
            <div className="gage">
          <p className="qnum">4/6</p>
        <div class="qheader">
          <div className="bar" style={{width:' 13vw',height:'100%', background:'black'}}></div>
        </div>
        </div>
        </Gage>
        <div class="content">
          <div class="question">
            <h2 class="question-title">질문 4</h2>
            <p class="question-description">본인은 어느 타입이신가요?</p>
            </div>
            <div class="options">
             <TextOpt>
              <button class="text-option" onClick={()=>nav("/imageTest4")}>집 나가기 전 1~2회 뿌린다.</button>
              
             
              
              <button class="text-option" onClick={()=>nav("/imageTest4")}>가지고 다니면서 주기적으로 뿌린다.</button>
              </TextOpt>
             
            
            </div>
          </div>
          
        </div>
      
      </ImageTestStyle1>
      </ImageTestStyle>

        </>
    );
};
export default ImageTest3;
