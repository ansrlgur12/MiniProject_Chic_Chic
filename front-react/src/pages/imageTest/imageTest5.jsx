import React from "react";
import Header from "../../Header/Header";
import { useNavigate } from "react-router-dom";
import { ImageTestStyle, ImageTestStyle1,Gage,TextOpt } from "./imageTest";



const ImageTest5 = () =>{
  const nav = useNavigate();


  return(
<>
<Header/>
        <ImageTestStyle>
            <ImageTestStyle1>
        <div class="container">
        <Gage>
            <div className="gage">
          <p className="qnum">6/6</p>
        <div class="qheader">
          <div className="bar" style={{width:' 20vw',height:'100%', background:'black'}}></div>
        </div>
        </div>
        </Gage>
        <div class="content">
          <div class="question">
            <h2 class="question-title">질문 6</h2>
            <p class="question-description">본인 성격과 가장 어울리는 단어는?</p>
            </div>
            <div class="options">
             <TextOpt>
              <button class="text-option" onClick={()=>nav("/imageTest6")}>부드럽다.</button>
              <button class="text-option" onClick={()=>nav("/imageTest6")}>활기차다.</button>
              <button class="text-option" onClick={()=>nav("/imageTest6")}>신중하다.</button>
              <button class="text-option" onClick={()=>nav("/imageTest6")}>사랑스럽다.</button>
              </TextOpt>
             
            
            </div>
          </div>
          
        </div>
      
      </ImageTestStyle1>
      </ImageTestStyle>

</>

  );
};
export default ImageTest5;