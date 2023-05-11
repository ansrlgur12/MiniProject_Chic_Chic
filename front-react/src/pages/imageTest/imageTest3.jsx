import React, {useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../Header/Header";
import { ImageTestStyle,ImageTestStyle1,Gage,TextOpt } from "./imageTest";
import { useState } from "react";


const ImageTest3= ()=>{
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
        nav('/imageTest4', { state: { selected: newSelected } });
      };
   

    return(
        <>
           <Header/>
        <ImageTestStyle>
            <ImageTestStyle1>
        <div className="container">
        <Gage>
            <div className="gage">
          <p className="qnum">4/6</p>
        <div className="qheader">
          <div className="bar" style={{width:' 13vw',height:'100%', background:'black'}}></div>
        </div>
        </div>
        </Gage>
        <div className="content">
          <div className="question">
            <h2 className="question-title">질문 4</h2>
            <p className="question-description">본인은 어느 타입이신가요?</p>
            </div>
            <div className="options">
             <TextOpt>
              <button className="text-option" onClick={()=>handleOptionClick("1")}>집 나가기 전 1~2회 뿌린다.</button>
              
             
              
              <button className="text-option" onClick={()=>handleOptionClick("2")}>가지고 다니면서 주기적으로 뿌린다.</button>
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
