import React from "react";
import Header from "../../Header/Header";
import { ImageTestStyle,ImageTestStyle1 } from "../imageTest/imageTest";
import styled from "styled-components";
import Footer from "../../Footer/Footer";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Btn = styled.div`
  display: block;
    font-family : 'NeoDunggeunmoPro-Regular';
  margin: 0 auto ;
  padding: 1rem 4rem;
  
  border: none;
  border-radius: 8px;
  background-color: #fff;
  color: black;
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
const Selfragrance= styled.div`
  display: flex;
  font-size: .8rem;
`


const NoteCategory = () => {
  const nav = useNavigate()
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedFragrance, setSelectedFragrance] = useState("");
  const [selectedValue,setSelectedValue]=  useState({
    fragrance1: "",
    id1: "",
    fragrance2: "",
    id2: "",
    fragrance3: "",
    id3: "",
  });
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedFragrance("");
  };
 
  const handleFragranceClick = (fragrance,id,hashtag) => {
    setSelectedFragrance(hashtag);
    setSelectedValue((prev) => ({
      ...prev,
      [`fragrance${id}`]: fragrance,
      [`id${id}`]: id,
    }));
  };
  const handleSelectClick = () => {
   
    nav(`/NoteFinderMain?fragrance1=${selectedValue.fragrance1}&id1=${selectedValue.id1}&fragrance2=${selectedValue.fragrance2}&id2=${selectedValue.id2}&fragrance3=${selectedValue.fragrance3}&id3=${selectedValue.id3}`);
  
  };  
  useEffect(() => {
    const state = location.state;
    setSelectedValue(state?.selectedValue || {
      fragrance1: "",
      id1: "",
      fragrance2: "",
      id2: "",
      fragrance3: "",
      id3: "",
    });
  }, [location]);


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
          <div  onClick={() => handleFragranceClick("장미","785","#꽃의왕 #우디 #파우더리")}>
        장미
      </div>
          <div  onClick={() => handleFragranceClick("자스민","472","#달콤 #관능적인 #화이트")}>
            자스민
          </div>
          <div  onClick={() => handleFragranceClick("은방울꽃","529","#은은한 #따스한 #맑은")}>
            은방울꽃
          </div>
          <div  onClick={() => handleFragranceClick("라벤더","512","#부드러운 #상쾌한 #스파이시")}>
            라벤더
          </div>
          </FragranceContainer>
          <Selfragrance>{selectedFragrance}</Selfragrance>
        </>
      )}
      {selectedCategory === "Woody" && (
        <>
        <FragranceContainer>
          <div onClick={() => handleFragranceClick("시더우드","193","#따뜻한 #깊은 #자스민")}>
            시더우드
          </div>
          <div onClick={() => handleFragranceClick("샌달우드","808","#부드러움 #견고함 #그린")}>
            샌달우드
          </div>
          <div onClick={() => handleFragranceClick("패출리","692","#달콤한 #그린 #스파이시")}>
            패출리
          </div>
          </FragranceContainer>
          <Selfragrance>{selectedFragrance}</Selfragrance>
        </>
      )}
         
      {selectedCategory === "Citrus" && (
        <>
        <FragranceContainer>
          <div onClick={() => handleFragranceClick("레몬","515","#신맛 #활기찬 #씁쓸한")}>
            레몬
          </div>
          <div onClick={() => handleFragranceClick("라임","530","#달콤 #건조한 #오렌지")}>
            라임
          </div>
          <div onClick={() => handleFragranceClick("오렌지","660","#달콤 #씁쓸한 #라임")}>
           오렌지
          </div>
          <div onClick={() => handleFragranceClick("자몽","388","#쓴 #상큼한 #민트")}>
           자몽
          </div>
          </FragranceContainer>
          <Selfragrance>{selectedFragrance}</Selfragrance>
        </>
      )}
        {selectedCategory === "Spicy" && (
        <>
        <FragranceContainer>
          <div onClick={() => handleFragranceClick("시나몬","224","#무거운 #스파이시 #미들노트")}>
            시나몬
          </div>
          <div onClick={() => handleFragranceClick("정향","237","#자극적 #선명한 #프루티")}>
            정향
          </div>
          <div onClick={() => handleFragranceClick("육두구","646","#부드러운 #달콤한 #머스크")}>
           육두구
          </div>
         
          </FragranceContainer>
          <Selfragrance>{selectedFragrance}</Selfragrance>
        </>
      )}
        {selectedCategory === "Fruity" && (
        <>
        <FragranceContainer>
          <div onClick={() => handleFragranceClick("복숭아","694","#달콤한 #상큼한 #파우더리")}>
            복숭아
          </div>
          <div onClick={() => handleFragranceClick("딸기","858","#달콤한 #상큼한 #장미")}>
            딸기
          </div>
          <div onClick={() => handleFragranceClick("포도","390","#달콤한 #포근한 #아로마틱")}>
           포도
          </div>
          <div onClick={() => handleFragranceClick("무화과","343","#부드러운 #씁쓸한 #우디")}>
           무화과
          </div>
          </FragranceContainer>
          <Selfragrance>{selectedFragrance}</Selfragrance>
        </>
      )}
        {selectedCategory === "Green" && (
        <>
        <FragranceContainer>
          <div onClick={() => handleFragranceClick("세이지","802","#흐리멍텅한 #후추 #부드러운")}>
            세이지
          </div>
          <div onClick={() => handleFragranceClick("민트","604","#시원한 #상큼한 #후추")}>
            민트
          </div>
          <div onClick={() => handleFragranceClick("풀","522","#강렬한 #허브 #스파이시")}>
           풀
          </div>
          <div onClick={() => handleFragranceClick("알로에베라","19","#활기찬 #아쿠아틱 #포도")}>
           알로에베라
          </div>
          </FragranceContainer>
          <Selfragrance>{selectedFragrance}</Selfragrance>
        </>
      )}
        {selectedCategory === "Powdery" && (
        <>
        <FragranceContainer>
          <div onClick={() => handleFragranceClick("통카","908","#달콤한 #열대의 #바닐라")}>
            통카
          </div>
          <div onClick={() => handleFragranceClick("코코넛","245","#달콤한 #우윳빛 #프루티")}>
          코코넛
          </div>
          <div onClick={() => handleFragranceClick("바닐라","920","#아늑한 #부드러운 #어두운")}>
           바닐라
          </div>
          <div onClick={() => handleFragranceClick("Aldehyde","12","#비누향 #신선한 #플로럴")}>
           알데하이드
          </div>
          </FragranceContainer>
          <Selfragrance>{selectedFragrance}</Selfragrance> 
        </>
      )}
        {selectedCategory === "Oriental" && (
        <>
        <FragranceContainer>
          <div onClick={() => handleFragranceClick("난초","664","#담백한 #화려한 #플로럴")}>
            난초
          </div>
          <div onClick={() => handleFragranceClick("머스크","624","#따뜻한 #몽환적인 #묵직한")}>
            머스크
          </div>
          <div onClick={() => handleFragranceClick("엠버","26","#달콤한 #아늑한 #파우더리")}>
           엠버
          </div>
          <div onClick={() => handleFragranceClick("오포포낙스","659","#달콤한 #발사믹 #스파이시")}>
           오포포낙스
          </div>
          
          </FragranceContainer>
          <Selfragrance>{selectedFragrance}</Selfragrance> </>
      )}
   
   </div>
   
      
      
        </CategoryContainer>
        
        </Trapezoid>
        <Btn onClick={()=> handleSelectClick()}>SELECT</Btn>
   
      </div>
      
      
      </ImageTestStyle1>
      </ImageTestStyle>
      <Footer/>
      
      </>
      );};
    
  
  export default NoteCategory;