import React from "react";
import Header from "../../Header/Header";
import { Gage,ImageTestStyle,ImageTestStyle1 ,TextOpt} from "./imageTest";
import { useNavigate } from "react-router-dom";



const ImageTest2 = () => {
    const nav= useNavigate();
    

    return(
        <>
        <Header/>
        <ImageTestStyle>
            <ImageTestStyle1>
        <div class="container">
        <Gage>
            <div className="gage">
          <p className="qnum">3/6</p>
        <div class="qheader">
          <div className="bar" style={{width:' 10vw',height:'100%', background:'black'}}></div>
        </div>
        </div>
        </Gage>
        <div class="content">
          <div class="question">
            <h2 class="question-title">질문 3</h2>
            <p class="question-description">어떤 향수를 선호하세요?</p>
            </div>
            <div class="options">
             
            <TextOpt>
              <button class="text-option" onClick={()=>nav("/imageTest3")}>어디선가 맡아본 익숙한 향수</button>
              
             
              
              <button class="text-option" onClick={()=>nav("/imageTest3")}>흔하게 맡아 볼 수 없던 향수</button>
              
             
            
            </TextOpt>
            </div>
          </div>
          
        </div>
      
      </ImageTestStyle1>
      </ImageTestStyle>
        
          

        </>
    );
};
export default ImageTest2;