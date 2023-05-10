import React from "react";
import Header from "../../Header/Header";
import { useState, useEffect } from 'react';
import { ImageTestStyle,ImageTestStyle1 } from "./imageTest";
import { useNavigate } from "react-router-dom";


const ImageTest6 = () =>{
  const nav = useNavigate();
        
        const [loadingText, setLoadingText] = useState(false);
        
      
        useEffect(() => {
          // 일정 시간 간격으로 마침표를 추가하는 타이머
          const timer = setInterval(() => {
            setLoadingText(prevText => prevText.length < 13 ? prevText + '.' : '결과 확인중');
          }, 500);
      
          
      
          return () => {
            clearInterval(timer);
          
          }
        }, []);
  
        return (
           <>
            <Header/>
            <ImageTestStyle>
                <ImageTestStyle1>
              

          <div className="container">
            <p>{loadingText}</p>
               
          </div>
          </ImageTestStyle1>
          </ImageTestStyle>
         
          </>
        );
       
        };

   
    
    
      


export default ImageTest6;