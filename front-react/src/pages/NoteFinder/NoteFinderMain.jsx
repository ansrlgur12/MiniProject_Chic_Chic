import React from "react";
import Header from "../../Header/Header";
import { ImageTestStyle,ImageTestStyle1 } from "../imageTest/imageTest";
import styled from "styled-components";
import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";


const Triangle = styled.div`
.pyramid {
    position: relative;
  width: 300px;
  display: flex;
  flex-direction: column;
  
  height: 300px;
  -webkit-clip-path: polygon(50% 0, 100% 100%, 0 100%);
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}



.pyramid__section {
  flex: 1 1 100%;
  background-color: orangered;
  margin-bottom: 2px;
}

.pyramid__section:nth-of-type(even) {
  background-color: orangered;
}

.pyramid__section:hover {
  background-color: orange;
}
button{
    
    color: white;
    font-weight: bold;
    border: none;
    text-align:center;
}
`;





const NoteFinderMain = () => {
    const nav = useNavigate();
    window.scrollTo(0, 0);
return(
    <>
   <Header/>
   <ImageTestStyle>
    <ImageTestStyle1>
        
        <div className="container">
        <h2>NOTE FINDER</h2>
        <Triangle>
        
       
        <div class="pyramid">
  <button class="pyramid__section"onClick={()=>nav("/NoteCategory")}>click</button>
  <button class="pyramid__section">click</button>
  <button class="pyramid__section">click</button>
</div>


     
        
        </Triangle>
   
        </div>
    </ImageTestStyle1>
   </ImageTestStyle>
   
   <Footer/>
    </>
);
};

export default NoteFinderMain;