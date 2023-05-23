import React, { useEffect } from "react";
import Header from "../../Header/Header";
import { useNavigate,useLocation } from "react-router-dom";
import { ImageTestStyle, ImageTestStyle1,Gage,TextOpt } from "./imageTest";
import { useState } from "react";
import Footer from "../../Footer/Footer";
import AxiosApi from "../../api/Axios";




const ImageTest5 = () =>{
  const nav = useNavigate();
  const [perfumes, setPerfumes] = useState(null);
  const { state } = useLocation();
  const [selected, setSelected] = useState(state.selected ||JSON.parse(localStorage.getItem("selected")) || []);
  const [loadingText, setLoadingText] = useState(false);
  

  useEffect(() => {
    localStorage.setItem('selected', JSON.stringify(selected));
  }, [selected]);

  useEffect(() => {
    return () => {
      localStorage.removeItem('selected');
    };
  }, []);
  const handleOptionClick = async (option) => {
    const newSelected = [...selected, parseInt(option)];
    setSelected(newSelected);
    localStorage.setItem('selected', JSON.stringify(newSelected));
    console.log('selected:', newSelected);
    
  };

  useEffect(() => {
    const imageTestResult = async () => {
      try {
        setLoadingText(true);
        const response = await AxiosApi.imageTestResult(selected);
        
        
        setPerfumes(response.data);
      
      } catch (error) {
        console.error(error);
      }
      setLoadingText(false)
    };
    
    if (selected.length === 6) {
      imageTestResult();
    } 
    
  }, [selected]);
  
 
 

useEffect(() => {
    if (perfumes) {
        nav('/TestResult', { state: { perfumes } });  
    }
}, [perfumes, nav]);



  if(loadingText) {
    return(
    <> 
    <Header/>
    <ImageTestStyle>
        <ImageTestStyle1>
      

  <div className="container">
    <p>로딩중...</p>
       
  </div>
  </ImageTestStyle1>
  </ImageTestStyle>
 </>
    )
}


  return(
<>
<Header/>
        <ImageTestStyle>
            <ImageTestStyle1>
        <div className="container">
        <Gage>
            <div className="gage">
          <p className="qnum">6/6</p>
        <div className="qheader">
          <div className="bar" style={{width:' 100%',height:'100%', background:'black'}}></div>
        </div>
        </div>
        </Gage>
        <div className="content">
          <div className="question">
            <h2 className="question-title">질문 6</h2>
            <p className="question-description">본인 성격과 가장 어울리는 단어는?</p>
            </div>
            <div className="options">
             <TextOpt>
              <button className="text-option" onClick={()=>handleOptionClick("1")}>부드럽다.</button>
              <button className="text-option" onClick={()=>handleOptionClick("2")}>활기차다.</button>
              <button className="text-option" onClick={()=>handleOptionClick("3")}>신중하다.</button>
              <button className="text-option" onClick={()=>handleOptionClick("4")}>사랑스럽다.</button>
              </TextOpt>
          
            
            </div>
          </div>
          
        </div>
      
      </ImageTestStyle1>
      </ImageTestStyle>
      <Footer/>

</>

  );
};
export default ImageTest5;