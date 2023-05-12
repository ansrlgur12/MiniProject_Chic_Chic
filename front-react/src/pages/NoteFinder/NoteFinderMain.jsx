import React, { useState,useEffect } from "react";
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
  word-break: break-all;
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
    
    word-break: break-all;
    color: white;
    font-weight: bold;
    border: none;
    text-align:center;
}

`;




const NoteFinderMain = () => {
  const nav = useNavigate();
  window.scrollTo(0, 0);
  const [selectedValue, setSelectedValue] = useState({
    1: { fragrance: "Click", id: "" },
    2: { fragrance: "Click", id: "" },
    3: { fragrance: "Click", id: "" },
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const fragrance1 = searchParams.get("fragrance1") || "Click";
    const id1 = searchParams.get("id1") || "";
    const fragrance2 = searchParams.get("fragrance2") || "Click";
    const id2 = searchParams.get("id2") || "";
    const fragrance3 = searchParams.get("fragrance3") || "Click";
    const id3 = searchParams.get("id3") || "";
    setSelectedValue({
      1: { fragrance: fragrance1, id: id1 },
      2: { fragrance: fragrance2, id: id2 },
      3: { fragrance: fragrance3, id: id3 },
    });
  }, []);

  const handleSelect = (index, fragrance) => {
    setSelectedValue((prev) => ({
      ...prev,
      [index]: { ...prev[index], fragrance },
    }));
  };

  return (
    
    <>
      <Header />
      <ImageTestStyle>
        <ImageTestStyle1>
          <div className="container">
            <h2>NOTE FINDER</h2>
            <Triangle>
              <div class="pyramid">
                <button
                  class="pyramid__section"
                  onClick={() => {handleSelect(1, selectedValue[1].fragrance); nav("/NoteCategory");}}
                >
                  <div className="value">
                    {selectedValue[1].fragrance}
                  </div>
                </button>
                <button
                  class="pyramid__section"
                  onClick={() => {handleSelect(2, selectedValue[2].fragrance); nav("/NoteCategory");}}
                >
                  {selectedValue[2].fragrance}
                </button>
                <button
                  class="pyramid__section"
                  onClick={() => {handleSelect(3, selectedValue[3].fragrance); nav("/NoteCategory");}}
                >
                  {selectedValue[3].fragrance}
                </button>
              </div>
            </Triangle>
          </div>
        </ImageTestStyle1>
      </ImageTestStyle>
      <Footer />
    </>
  );
};

export default NoteFinderMain