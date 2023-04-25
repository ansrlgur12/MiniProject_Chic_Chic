import React from "react";
import Header from "../../Header/Header";
import { ImageTestStyle,ImageTestStyle1 } from "../imageTest/imageTest";
import styled from "styled-components";
import Footer from "../../Footer/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Trapezoid = styled.div`
  width: 375px;
  height: 150px;
 

  position: relative;
  bottom: 0;
  display: flex;
  
  align-items: center;

`;

const Category = styled.div`
  width: 80px;
  height: 80px;
  
  border:1px solid black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  margin-top: .5rem;
  margin:.5rem;
  align-items: center;
  align-items: center;
  font-size: 1.3rem;
  color: #ffff;
  cursor: pointer;
`;
const CategoryContainer = styled.div`
position: absolute;
display: flex;

flex-wrap: wrap;
align-items: center;
justify-content: center;

  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  
`;



const FragranceContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
 
  gap:19px;
  margin-top: 2rem;
  cursor: pointer;
  `;
const Selcategory= styled.div`
display: flex;

margin-bottom:7rem;
font-size: 2rem;
`


const NoteCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedFragrance, setSelectedFragrance] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedFragrance("");
  };

  const handleFragranceClick = (fragrance) => {
    setSelectedFragrance(fragrance);
  };
  


  return (
    <>
    <Header/>
     <ImageTestStyle>
      
        <ImageTestStyle1>  
            <div className="container">
            <Selcategory>{selectedCategory}</Selcategory>
           
      <Trapezoid>
        <CategoryContainer>
          
        <Category onClick={() => handleCategoryClick("Floral")} style={{background:"pink"}} >
          <div>Floral</div>
         
        </Category>
        <Category onClick={() => handleCategoryClick("Woody")} style={{background:"brown"}}>
          <div>Woody</div>
         
        </Category>
        <Category onClick={() => handleCategoryClick("Citrus")} style={{background:"orangered"}}>
          <div>Citrus</div>
        
        </Category>
        <Category onClick={() => handleCategoryClick("Spicy")}style={{background:"tomato"}}>
          <div>Spicy</div>
          
        </Category>
        <Category onClick={() => handleCategoryClick("Fruity")}style={{background:"orange"}}>
          <div>Fruity</div>
        
        </Category>
        <Category onClick={() => handleCategoryClick("Green")}style={{background:"green"}}>
          <div>Green</div>
          
        </Category>
        <Category onClick={() => handleCategoryClick("Powdery")}style={{background:"aqua"}}>
          <div>Powdery</div>
        
        </Category>
        <Category onClick={() => handleCategoryClick("Oriental")}style={{background:"#d0f403"}}>
          <div>Oriental</div>
         
        </Category>
        <div className="frcon">
    
      {selectedCategory === "Floral" && (
        <>
        <FragranceContainer>
          <div  onClick={() => handleFragranceClick("Rose")}>
        장미
      </div>
          <div  onClick={() => handleFragranceClick("Jasmine")}>
            자스민
          </div>
          <div  onClick={() => handleFragranceClick("lily of the valley")}>
            은방울꽃
          </div>
          <div  onClick={() => handleFragranceClick("Lavender")}>
            라벤더
          </div>
          </FragranceContainer>
        </>
      )}
      {selectedCategory === "Woody" && (
        <>
        <FragranceContainer>
          <div onClick={() => handleFragranceClick("Cinderwood")}>
            신더우드
          </div>
          <div onClick={() => handleFragranceClick("Sanderwood")}>
            샌달우드
          </div>
          <div onClick={() => handleFragranceClick("Patchouli")}>
            패출리
          </div>
          </FragranceContainer>
        </>
      )}
         
      {selectedCategory === "Citrus" && (
        <>
        <FragranceContainer>
          <div onClick={() => handleFragranceClick("Lemon")}>
            레몬
          </div>
          <div onClick={() => handleFragranceClick("Lime")}>
            라임
          </div>
          <div onClick={() => handleFragranceClick("Orange")}>
           오렌지
          </div>
          <div onClick={() => handleFragranceClick("GrapeFruit")}>
           자몽
          </div>
          </FragranceContainer>
        </>
      )}
        {selectedCategory === "Spicy" && (
        <>
        <FragranceContainer>
          <div onClick={() => handleFragranceClick("Cinnamon")}>
            계피
          </div>
          <div onClick={() => handleFragranceClick("Clove")}>
            정향
          </div>
          <div onClick={() => handleFragranceClick("Nutmeg")}>
           육구두
          </div>
         
          </FragranceContainer>
        </>
      )}
        {selectedCategory === "Fruity" && (
        <>
        <FragranceContainer>
          <div onClick={() => handleFragranceClick("pitch")}>
            복숭아
          </div>
          <div onClick={() => handleFragranceClick("Strawberry")}>
            딸기
          </div>
          <div onClick={() => handleFragranceClick("Grape")}>
           포도
          </div>
          <div onClick={() => handleFragranceClick("Fig")}>
           무화과
          </div>
          </FragranceContainer>
        </>
      )}
        {selectedCategory === "Green" && (
        <>
        <FragranceContainer>
          <div onClick={() => handleFragranceClick("Herb")}>
            허브
          </div>
          <div onClick={() => handleFragranceClick("Mint")}>
            민트
          </div>
          <div onClick={() => handleFragranceClick("Grass")}>
           풀
          </div>
          <div onClick={() => handleFragranceClick("Aloe Vera")}>
           알로에베라
          </div>
          </FragranceContainer>
        </>
      )}
        {selectedCategory === "Powdery" && (
        <>
        <FragranceContainer>
          <div onClick={() => handleFragranceClick("Tonka bean")}>
            통카
          </div>
          <div onClick={() => handleFragranceClick("Nut")}>
            넛
          </div>
          <div onClick={() => handleFragranceClick("Vanila")}>
           바닐라
          </div>
          <div onClick={() => handleFragranceClick("Aldehyde")}>
           알데하이드
          </div>
          </FragranceContainer>
        </>
      )}
        {selectedCategory === "Oriental" && (
        <>
        <FragranceContainer>
          <div onClick={() => handleFragranceClick("Gentiana")}>
            머스크
          </div>
          <div onClick={() => handleFragranceClick("Musk")}>
            사향
          </div>
          <div onClick={() => handleFragranceClick("Amber")}>
           엠버
          </div>
          <div onClick={() => handleFragranceClick("opopanax chironium")}>
           오포포낙스
          </div>
          </FragranceContainer>
        </>
      )}
      
   </div>
 

      
        </CategoryContainer>
        
        </Trapezoid>
  
   
      </div>
      
      
      </ImageTestStyle1>
      </ImageTestStyle>
      <Footer/>
      
      </>
      );};
    
  
  export default NoteCategory;