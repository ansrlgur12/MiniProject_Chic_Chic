import React from "react";
import Header from "../../Header/Header";
import { useState, useEffect } from 'react';
import { ImageTestStyle,ImageTestStyle1 } from "./imageTest";


const ImageTest6 = () =>{
        
        const [loadingText, setLoadingText] = useState('결과 확인중');
      
        useEffect(() => {
          // 일정 시간 간격으로 마침표를 추가하는 타이머
          const timer = setInterval(() => {
            setLoadingText(prevText => prevText.length < 13 ? prevText + '.' : '결과 확인중');
          }, 500);
      
          // 일정 시간 후에 결과 창으로 이동하는 타이머
          const nextTimer = setTimeout(() => {
            clearInterval(timer);
            // 다음 창으로 이동하는 코드
          }, 3000); // 3초 후에 다음 창으로 이동
      
          return () => {
            clearInterval(timer);
            clearTimeout(nextTimer);
          }
        }, []);
      
        return (
            <>
            <Header/>
            <ImageTestStyle>
                <ImageTestStyle1>
              

          <div className="container">
            <p>{loadingText}</p>
            {/* 결과창 구현 */}
          </div>
          </ImageTestStyle1>
          </ImageTestStyle>
         
          </>
        );
      };
      


export default ImageTest6;