import React, { useEffect } from "react";
import  { ImageTestStyle,ImageTestStyle1,Gage } from "./imageTest";
import Header from "../../Header/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import city from "../../image/도시.png"
import vacation from "../../image/휴양지.png"
import Footer from "../../Footer/Footer";

const ImageTest1 = () =>{
    const nav = useNavigate();
  
  
      const [selected, setSelected] = useState([]);
     
    
      useEffect(() => {
        const selectedFromStorage = localStorage.getItem('selected');
        if (selectedFromStorage) {
          setSelected(JSON.parse(selectedFromStorage));
        }
      }, []);
    
      const handleOptionClick = (option) => {
        const newSelected = [...selected,parseInt(option)];
        setSelected(newSelected);
        localStorage.setItem('selected', JSON.stringify(newSelected));
        nav('/imageTest2', { state: { selected: newSelected } });
      };
     
    return(
        <>
        <Header/>
        <ImageTestStyle>
            <ImageTestStyle1>
        <div className="container">
        <Gage>
            <div className="gage">
          <p className="qnum">2/6</p>
        <div className="qheader">
          <div className="bar" style={{width:' 6.4vw',height:'100%', background:'black'}}></div>
        </div>
        </div>
        </Gage>
        <div className="content">
          <div className="question">
            <h2 className="question-title">질문 2</h2>
            <p className="question-description">어느 곳으로 여행을 떠나고 싶으세요?</p>
            </div>
            <div className="options2">
              <div className="optionP">
              <button className="option2" onClick={()=>handleOptionClick("1")} style={{ backgroundImage: `url(${city})`, backgroundSize: 'cover' }}> </button>
              <p>북적이는 도시</p>
              </div>
              <div className="optionP">
              <button className="option2" onClick={()=>handleOptionClick("2")} style={{ backgroundImage: `url(${vacation})`, backgroundSize: 'cover' }}></button>
              <p>힐링되는 휴양지</p>
              </div>
            
            </div>
          </div>
          
        </div>
      
      </ImageTestStyle1>
      </ImageTestStyle>
      <Footer/>
        </>
    );
};
export default ImageTest1;