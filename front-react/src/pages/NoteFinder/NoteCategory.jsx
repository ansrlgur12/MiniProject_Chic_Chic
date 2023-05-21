import React from "react";
import Header from "../../Header/Header";
import { ImageTestStyle,ImageTestStyle1 } from "../imageTest/imageTest";
import styled from "styled-components";
import Footer from "../../Footer/Footer";
import { useState, } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Btn = styled.div`
  display: block;
    font-family : 'NeoDunggeunmoPro-Regular';
  margin: 0 auto ;
  padding: 1rem 4rem;
  
  border: none;
  border-radius: 8px;
  background-color: #fff;
  color: #4C3D3D;
  font-size: 1.5rem;
  position: absolute;
  bottom: 2rem;
  cursor: pointer;
 
`
const Trapezoid = styled.div`
  width: 375px;
  height: 150px;
 

  position: relative;
  bottom: 0;
  display: flex;
  
  align-items: center;
  margin-bottom: 5rem;

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
color: #4C3D3D;
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
color: #4C3D3D;
margin-bottom:7rem;
font-size: 2rem;
`
const Selfragrance= styled.div`
  display: flex;
  font-size: .8rem;
  color: #4C3D3D;
`


const NoteCategory = () => {
  const nav = useNavigate()
  const location = useLocation()
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedFragrance, setSelectedFragrance] = useState("");
  const [selectedValue,setSelectedValue]=  useState([]);
 
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedFragrance("");
  };
 
  const handleFragranceClick = (fragrance,id,hashtag) => {
    setSelectedFragrance(hashtag);
    setSelectedValue({ fragrance, id });
};
  

  const handleSelectClick = () => {
    const index = location.state.index;
  const updatedSelectedValue = { ...location.state.selectedValue };
  updatedSelectedValue[index] = selectedValue;
  nav("/NoteFinderMain", { state: { selectedValue: updatedSelectedValue } });
  };
  useEffect(() => {
    const locationState = location.state;
    if (locationState && locationState.selectedValue) {
      setSelectedValue(locationState.selectedValue);
    }
  }, [location.state]);


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
          <div  onClick={() => handleFragranceClick("로즈","785","#꽃의왕 #베르가못 #미들노트")}>
        로즈
      </div>
          <div  onClick={() => handleFragranceClick("자스민","472","#관능적인 #난초 #베이스노트")}>
            자스민
          </div>
          <div  onClick={() => handleFragranceClick("은방울꽃","529","#은은한 #자몽 #미들노트")}>
            은방울꽃
          </div>
          <div  onClick={() => handleFragranceClick("라벤더","512","#상쾌한 #시더 #탑노트")}>
            라벤더
          </div>
          </FragranceContainer>
          <Selfragrance>{selectedFragrance}</Selfragrance>
        </>
      )}
      {selectedCategory === "Woody" && (
        <>
        <FragranceContainer>
          <div onClick={() => handleFragranceClick("시더우드","193","#깊은 #시나몬 #베이스노트")}>
            시더우드
          </div>
          <div onClick={() => handleFragranceClick("샌달우드","808","#부드러움 #레몬 #베이스노트")}>
            샌달우드
          </div>
          <div onClick={() => handleFragranceClick("패출리","692","#달콤한 #자몽 #베이스노트")}>
            패출리
          </div>
          </FragranceContainer>
          <Selfragrance>{selectedFragrance}</Selfragrance>
        </>
      )}
         
      {selectedCategory === "Citrus" && (
        <>
        <FragranceContainer>
          <div onClick={() => handleFragranceClick("레몬","515","#신맛 #샌달우드 #탑노트")}>
            레몬
          </div>
          <div onClick={() => handleFragranceClick("애플","45","#달콤 #시더 #미들노트")}>
            애플
          </div>
          <div onClick={() => handleFragranceClick("베르가못","660","#귤향 #난초 #탑노트")}>
           베르가못
          </div>
          <div onClick={() => handleFragranceClick("자몽","388","#쓴 #오렌지 #탑노트")}>
           자몽
          </div>
          </FragranceContainer>
          <Selfragrance>{selectedFragrance}</Selfragrance>
        </>
      )}
        {selectedCategory === "Spicy" && (
        <>
        <FragranceContainer>
          <div onClick={() => handleFragranceClick("시나몬","224","#무거운 #레몬 #미들노트")}>
            시나몬
          </div>
          <div onClick={() => handleFragranceClick("정향","237","#자극적 #자몽 #미들노트")}>
            정향
          </div>
          <div onClick={() => handleFragranceClick("육두구","646","#달콤한 #라벤더 #미들노트")}>
           육두구
          </div>
         
          </FragranceContainer>
          <Selfragrance>{selectedFragrance}</Selfragrance>
        </>
      )}
        {selectedCategory === "Fruity" && (
        <>
        <FragranceContainer>
          <div onClick={() => handleFragranceClick("복숭아","694","#상큼한 #난초 #탑노트")}>
            복숭아
          </div>
          <div onClick={() => handleFragranceClick("딸기","858","#달콤한 #장미 #탑노트")}>
            딸기
          </div>
          <div onClick={() => handleFragranceClick("라즈베리","765","#신선한 #난초 #탑노트")}>
           라즈베리
          </div>
          <div onClick={() => handleFragranceClick("무화과","343","#부드러운 #시더우드 #미들노트")}>
           무화과
          </div>
          </FragranceContainer>
          <Selfragrance>{selectedFragrance}</Selfragrance>
        </>
      )}
        {selectedCategory === "Green" && (
        <>
        <FragranceContainer>
          <div onClick={() => handleFragranceClick("세이지","802","#흐리멍텅한 #자몽 #미들노트")}>
            세이지
          </div>
          <div onClick={() => handleFragranceClick("민트","604","#시원한 #시나몬 #탑노트")}>
            민트
          </div>
          <div onClick={() => handleFragranceClick("풀","522","#신선한 #난초 #탑노트")}>
           풀
          </div>
          <div onClick={() => handleFragranceClick("갈바니움","366","#미나리향 #장미 #탑노트")}>
           갈바니움
          </div>
          </FragranceContainer>
          <Selfragrance>{selectedFragrance}</Selfragrance>
        </>
      )}
        {selectedCategory === "Powdery" && (
        <>
        <FragranceContainer>
          <div onClick={() => handleFragranceClick("통카","908","#달콤한 #시더우드 #베이스노트")}>
            통카
          </div>
          <div onClick={() => handleFragranceClick("코코넛","245","#달콤한 #머스크 #탑노트")}>
          코코넛
          </div>
          <div onClick={() => handleFragranceClick("바닐라","920","#아늑한 #로즈 #베이스노트")}>
           바닐라
          </div>
          <div onClick={() => handleFragranceClick("알데하이드","12","#비누향 #자스민 #탑노트")}>
           알데하이드
          </div>
          </FragranceContainer>
          <Selfragrance>{selectedFragrance}</Selfragrance> 
        </>
      )}
        {selectedCategory === "Oriental" && (
        <>
        <FragranceContainer>
          <div onClick={() => handleFragranceClick("난초","473","#담백한 #베르가못 #미들노트")}>
            난초
          </div>
          <div onClick={() => handleFragranceClick("머스크","624","#따뜻한 #플로럴 #베이스노트")}>
            머스크
          </div>
          <div onClick={() => handleFragranceClick("엠버","26","#달콤한 #코코넛 #베이스노트")}>
           엠버
          </div>
          <div onClick={() => handleFragranceClick("오포포낙스","659","#달콤한 #시나몬 #베이스노트")}>
           오포포낙스
          </div>
          
          </FragranceContainer>
          <Selfragrance>{selectedFragrance}</Selfragrance> </>
      )}
   
   </div>
   
      
      
        </CategoryContainer>
        
        </Trapezoid>
        {selectedFragrance && (
        <Btn onClick={()=> handleSelectClick()}>SELECT</Btn>
        )}
      </div>
      
      
      </ImageTestStyle1>
      </ImageTestStyle>
      <Footer/>
      
      </>
      );};
    
  
  export default NoteCategory;