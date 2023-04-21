import React from "react";
import  { ImageTestStyle,ImageTestStyle1,Gage } from "./imageTest";
import Header from "../../Header/Header";
import { useNavigate } from "react-router-dom";
import city from "../../image/도시.png"
import vacation from "../../image/휴양지.png"

const ImageTest1 = () =>{
    const nav = useNavigate();


    return(
        <>
        <Header/>
        <ImageTestStyle>
            <ImageTestStyle1>
        <div class="container">
        <Gage>
            <div className="gage">
          <p className="qnum">2/6</p>
        <div class="qheader">
          <div className="bar" style={{width:' 6.4vw',height:'100%', background:'black'}}></div>
        </div>
        </div>
        </Gage>
        <div class="content">
          <div class="question">
            <h2 class="question-title">질문 2</h2>
            <p class="question-description">어느 곳으로 여행을 떠나고 싶으세요?</p>
            </div>
            <div class="options2">
              <div className="optionP">
              <button class="option2" onClick={()=>nav("/imageTest2")} style={{ backgroundImage: `url(${city})`, backgroundSize: 'cover' }}> </button>
              <p>북적이는 도시</p>
              </div>
              <div className="optionP">
              <button class="option2" onClick={()=>nav("/imageTest2")} style={{ backgroundImage: `url(${vacation})`, backgroundSize: 'cover' }}></button>
              <p>힐링되는 휴양지</p>
              </div>
            
            </div>
          </div>
          
        </div>
      
      </ImageTestStyle1>
      </ImageTestStyle>
        </>
    );
};
export default ImageTest1;