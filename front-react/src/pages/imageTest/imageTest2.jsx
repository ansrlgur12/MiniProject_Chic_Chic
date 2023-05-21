import React, {useEffect} from "react";
import Header from "../../Header/Header";
import { Gage,ImageTestStyle,ImageTestStyle1 ,TextOpt} from "./imageTest";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../../Footer/Footer";



const ImageTest2 = () => {
    const nav= useNavigate();
    
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
      nav('/imageTest3', { state: { selected: newSelected } });
    };
   
   
    return(
        <>
        <Header/>
        <ImageTestStyle>
            <ImageTestStyle1>
        <div className="container">
        <Gage>
            <div className="gage">
          <p className="qnum">3/6</p>
        <div className="qheader">
          <div className="bar" style={{width:' 10vw',height:'100%', background:'black'}}></div>
        </div>
        </div>
        </Gage>
        <div className="content">
          <div className="question">
            <h2 className="question-title">질문 3</h2>
            <p className="question-description">어떤 향수를 선호하세요?</p>
            </div>
            <div className="options">
             
            <TextOpt>
              <button className="text-option" onClick={()=>handleOptionClick("1")}>어디선가 맡아본 익숙한 향수</button>
              
             
              
              <button className="text-option" onClick={()=>handleOptionClick("2")}>흔하게 맡아 볼 수 없던 향수</button>
              
             
            
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
export default ImageTest2;