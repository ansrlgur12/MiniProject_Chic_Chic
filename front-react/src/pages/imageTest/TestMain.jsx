import React from "react";
import styled from "styled-components";
import Header from "../../Header/Header";
import {ImageTestStyle} from "./imageTest";
import{ImageTestStyle1}  from "./imageTest";
import { useNavigate } from "react-router-dom";

const Testmain = () => {
    const nav = useNavigate();

    return(
        <>
        <Header/>
        <ImageTestStyle>
            <ImageTestStyle1>
        <div class="container">
        <div class="header">
          <h1 class="title">향수 이미지 테스트</h1>
        </div>
        <div class="content">
          <div class="question">
            <h2 class="question-title">나에게 어울리는 향수는?</h2>
            
            
             <button class="startBtn" onClick={()=>nav("/imageTest")}>시작하기</button>
             
          </div>
          
        </div>
      </div>
      </ImageTestStyle1>
        </ImageTestStyle>
        
        </>
    );
};
export default Testmain;