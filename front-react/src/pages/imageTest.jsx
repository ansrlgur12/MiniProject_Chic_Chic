import React from "react";
import styled, {css} from "styled-components";
import Header from "../Header/Header";

const ImageTestStyle = styled.div`

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    display:flex;
    align-item:center;
  
  
  .container {
    border: 1px solid black;
    max-width: 600px;
    margin: 0px auto;
    padding: 0 20px;
    margin-top:150px;
    
  }
  
  .header {
    
    background-color: #fff;
    padding: 20px 0;
    text-align: center;
    border-bottom: 1px solid #ccc;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
  }
  
  .content {
    padding: 40px 0;
  }
  
  .question {
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
  
  .option {
    width: calc(50% - 10px);
    height: 60px;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: bold;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    transition: background-color 0.2s, border-color 0.2s, color 0.2s;
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
        <div class="container">
        <div class="header">
          <h1 class="title">향수 유형 테스트</h1>
        </div>
        <div class="content">
          <div class="question">
            <h2 class="question-title">질문 1</h2>
            <p class="question-description">당신은 어떤 계절을 좋아하시나요?</p>
            <div class="options">
              <button class="option">봄</button>
              <button class="option">여름</button>
              <button class="option">가을</button>
              <button class="option">겨울</button>
            </div>
          </div>
          
        </div>
      </div>
      </ImageTestStyle>
        </>
    );
};
export default ImageTest;