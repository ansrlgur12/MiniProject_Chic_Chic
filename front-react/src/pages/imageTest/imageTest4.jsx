import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Header/Header";
import { ImageTestStyle,ImageTestStyle1,Gage,TextOpt } from "./imageTest";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../../Footer/Footer";
const ImageTest4 = () => {
    const nav = useNavigate();
    
   
      
      const [selected, setSelected] = useState([]);
     
      useEffect(() => {
        const selectedFromStorage = localStorage.getItem('selected');
        if (selectedFromStorage) {
          setSelected(JSON.parse(selectedFromStorage));
        }
      }, []);
    
      const handleOptionClick = (option) => {
        const newSelected = [...selected, parseInt(option)];
        setSelected(newSelected);
        localStorage.setItem('selected', JSON.stringify(newSelected));
        nav('/imageTest5', { state: { selected: newSelected } });
      };
    return(
        <>
                   <Header/>
        <ImageTestStyle>
            <ImageTestStyle1>
        <div className="container">
        <Gage>
            <div className="gage">
          <p className="qnum">5/6</p>
        <div className="qheader">
          <div className="bar" style={{width:' 17vw',height:'100%', background:'black'}}></div>
        </div>
        </div>
        </Gage>
        <div className="content">
          <div className="question">
            <h2 className="question-title">질문 5</h2>
            <p className="question-description">어느 성별 타입의 향수를 선호하세요?</p>
            </div>
            <div className="options">
             <TextOpt>
              <button className="text-option" onClick={()=>handleOptionClick("1")}>남성</button>
              <button className="text-option" onClick={()=>handleOptionClick("2")}>여성</button>
              <button className="text-option" onClick={()=>handleOptionClick("3")}>중성</button>
              </TextOpt>
             
            
            </div>
          </div>
          
        </div>
      
      </ImageTestStyle1>
      </ImageTestStyle>
      <Footer/>
        </>
        
    );
};
export default ImageTest4;