import React from "react";
import styled from "styled-components";
import Header from "../../Header/Header";
import Spring from "../../image/spring.png"
import Summer from "../../image/summer.png"
import Fall from "../../image/fall.png"
import Winter from "../../image/winter.png"
import "../../Header/font.css";
import { useNavigate } from "react-router-dom";

export const Gage = styled.div`
    .gage{
      
    display: flex;
    flex-direction: column;
    align-items: flex-start;
   
   
  
    
    
  }
  .qnum{
    margin-top: 10px;
  }
  .qheader{
    background-color: #fff;
    border: 3px solid black;
    padding:0px;
    width: 20vw;
    height:10px;
    
  }
`
export const ImageTestStyle = styled.div`

    margin: 0;
    padding: 0;
    height: 100vh;
    
    font-family : 'NeoDunggeunmoPro-Regular';
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
    margin-top:30vh;
   
    display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
    text-align: center;
    
    
  }

  
  .header {
    
    background-color: #fff;  
  }
 


  .title {
    margin-top:0;
    font-size: 24px;
    font-weight: bold;
  }
  `
  export const ImageTestStyle1 = styled.div`
  font-family : 'NeoDunggeunmoPro-Regular';
  
  .content {
    padding-bottom: 40px;
    padding-top: 20px;
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
  border-radius: 8px;
  background-color: #1fdba9;
  color: white;
  font-size: 1.5rem;
  position: absolute;
  bottom: 2rem;
  cursor: pointer;
  
  }
  
  .option {
    
    width: 140px;
    height: 120px;
    
  margin-bottom: 20px;
    
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    transition: background-color 0.2s, border-color 0.2s, color 0.2s;
    cursor:pointer;
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
const nav= useNavigate();

    return(
        <>
        <Header/>
        <ImageTestStyle>
          
          <ImageTestStyle1>
        <div class="container">
        <Gage>
          <div className="gage">
          <p className="qnum">1/6</p>
        <div class="qheader">
          <div className="bar" style={{width:' 3.2vw',height:'100%', background:'black'}}></div>
          </div>
        </div>
        </Gage>
        <div class="content">
          <div class="question">
            <h2 class="question-title">질문 1</h2>
            <p class="question-description">당신은 어떤 계절을 좋아하시나요?</p>
            </div>
            <div class="options">
              <div className="optionP">
              <button class="option" onClick={()=>nav("/imageTest1")} style={{ backgroundImage: `url(${Spring})`, backgroundSize: 'cover' }}> </button>
              <p>봄</p>
              </div>
              <div className="optionP">
              <button class="option" onClick={()=>nav("/imageTest1")} style={{ backgroundImage: `url(${Summer})`, backgroundSize: 'cover' }}></button>
              <p>여름</p>
              </div>
              <div className="optionP">
              <button class="option" onClick={()=>nav("/imageTest1")} style={{ backgroundImage: `url(${Fall})`, backgroundSize: 'cover' }}></button>
              <p>가을</p>
              </div>
              <div className="optionP">
              <button class="option" onClick={()=>nav("/imageTest1")} style={{ backgroundImage: `url(${Winter})`, backgroundSize: 'cover' }}></button>
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