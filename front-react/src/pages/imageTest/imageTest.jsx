import React from "react";
import styled from "styled-components";
import Header from "../../Header/Header";
import Spring from "../../image/spring.png"
import Summer from "../../image/summer.png"
import Fall from "../../image/fall.png"
import Winter from "../../image/winter.png"

export const ImageTestStyle = styled.div`

    margin: 0;
    padding: 0;
    height: 100vh;
    
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    display:flex;
    align-items:center;
    justify-content:center;
   
    
  
  
  .container {
    border: 1px solid black;
    width: 375px;
    height: 70vh;
    margin: 0px auto;
    padding: 2rem;
    margin-top:150px;
    position: relative;
    display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
    text-align: center;
    
    
    
  }
  
  .header {
    
    background-color: #fff;
    padding: 20px 0;
    
  }
  .title {
    margin-top:0;
    font-size: 24px;
    font-weight: bold;
  }
  `
  export const ImageTestStyle1 = styled.div`
  
  .content {
    padding: 40px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  .question {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .question-title {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  .question-description {
    font-size: 16px;
    margin-bottom: 20px;
  }
  
  .options {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .startBtn{
    display: block;
    
  margin: 0 auto ;
  padding: 1rem 4rem;
  
  border: none;
  border-radius: 4rem;
  background-color: #1e90ff;
  color: white;
  font-size: 1.5rem;
  position: absolute;
  bottom: 2rem;
  cursor: pointer;
  
  }
  
  .option {
    
    width: 140px;
    height: 60px;
    
  margin-bottom: 20px;
    
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    transition: background-color 0.2s, border-color 0.2s, color 0.2s;
  }
   .optionP{
  
     
     font-size: 16px;
    font-weight: bold;
     
  margin-bottom: 20px;
  display: flex;

  flex-direction: column;
 align-items: center;
  margin-bottom: 20px;

   }
  
  .option:hover {
    background-color: #f5f5f5;
    border-color: #999;
    color: #333;
  }
  
  .option:focus {
    outline: none;
    box-shadow: 0 0 0 2px #006aff;
  }
  



`

const ImageTest= () =>{


    return(
        <>
        <Header/>
        <ImageTestStyle>
          <ImageTestStyle1>
        <div class="container">
        <div class="header">
          <h1 class="title">향수 유형 테스트</h1>
        </div>
        <div class="content">
          <div class="question">
            <h2 class="question-title">질문 1</h2>
            <p class="question-description">당신은 어떤 계절을 좋아하시나요?</p>
            </div>
            <div class="options">
              <div className="optionP">
              <button class="option" style={{ backgroundImage: `url(${Spring})`, backgroundSize: 'cover' }}> </button>
              <p>봄</p>
              </div>
              <div className="optionP">
              <button class="option"style={{ backgroundImage: `url(${Summer})`, backgroundSize: 'cover' }}></button>
              <p>여름</p>
              </div>
              <div className="optionP">
              <button class="option"style={{ backgroundImage: `url(${Fall})`, backgroundSize: 'cover' }}></button>
              <p>가을</p>
              </div>
              <div className="optionP">
              <button class="option"style={{ backgroundImage: `url(${Winter})`, backgroundSize: 'cover' }}></button>
               <p>겨울</p>
               </div>
            </div>
          </div>
          
        </div>
      
      </ImageTestStyle1>
      </ImageTestStyle>
        </>
    );
};
export default ImageTest;