import React, { useState,useEffect } from "react";
import Header from "../../Header/Header";
import { ImageTestStyle,ImageTestStyle1 } from "../imageTest/imageTest";
import styled from "styled-components";
import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Btn } from "./NoteCategory";
import AxiosApi from "../../api/Axios";
import PerfumeList from "../PerfumeList";
import { PerfumeStyled } from "../Perfume";
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
  word-break: break-all;
  flex: 1 1 100%;
  background-color: orange;
  margin-bottom: 2px;
}

.pyramid__section:nth-of-type(even) {
  background-color: orange;
}

.pyramid__section:hover {
  background-color: orangered;
}
button{
    
    word-break: break-all;
    color: white;
    font-weight: bold;
    border: none;
    text-align:center;
}

`;









  
  const NoteFinderMain = () => {
    const nav = useNavigate();
    const location = useLocation();
   
    const [selectedValue, setSelectedValue] = useState({ 0: {}, 1: {}, 2: {} });
    const [perfumes, setPerfumes] = useState(null);
console.log(selectedValue);


useEffect(() => {
  const locationState = location.state;
  if (locationState && locationState.selectedValue) {
    setSelectedValue(locationState.selectedValue);
  }
}, [location.state]);

const allValuesSelected = () => {
  return (
    selectedValue[0]?.fragrance &&
    selectedValue[1]?.fragrance &&
    selectedValue[2]?.fragrance
  );
};

const handleButtonClick = (index) => {
  nav("/NoteCategory", { state: { index, selectedValue } });
};

const fetchPerfumeResult = async () => {
  const selectedArray = Object.values(selectedValue);

  const ids = selectedArray.map(value => value.id);
  
  try {
    const response = await AxiosApi.NoteFinderResult(ids);
    console.log(ids);
    console.log(response.data); 
    setPerfumes(response.data)
    
    setSelectedValue({ 0: {}, 1: {}, 2: {} });
  } catch (error) {
    console.error( error);
  }
};




  return (
    
    <>
      <Header />
      {perfumes === null? (
      <ImageTestStyle>
        <ImageTestStyle1>
          <div className="container">
            <h2>NOTE FINDER</h2>
            <Triangle>
              <div className="pyramid">
                <button
                  className="pyramid__section"
                  onClick={() => handleButtonClick(0)}
                >
                {selectedValue[0]?.fragrance ? selectedValue[0]?.fragrance : "Click"}
                </button>
                <button
                  className="pyramid__section"
                  onClick={() => handleButtonClick(1)}
                >
                {selectedValue[1]?.fragrance ? selectedValue[1]?.fragrance : "Click"}
                </button>
                <button
                  className="pyramid__section"
                  onClick={() => handleButtonClick(2)}
                >
              {selectedValue[2]?.fragrance ? selectedValue[2]?.fragrance : "Click"}
                </button>
              </div>
            </Triangle>
            {allValuesSelected() && (
  <Btn onClick={fetchPerfumeResult}>RESULT</Btn>
)}
          </div>
        </ImageTestStyle1>
      </ImageTestStyle>
      ): (
      <PerfumeStyled>
      <PerfumeList perfumes = {perfumes}/>
      </PerfumeStyled>)}
      <Footer />
    </>
  );
};

export default NoteFinderMain;