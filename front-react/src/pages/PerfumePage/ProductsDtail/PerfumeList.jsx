import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled, {css} from "styled-components";
import Products from "../../Products/Products";
import Header from "../../../Header/Header";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../Footer/Footer";

import productData from "../../../data/products.json";

export const PerfumeListStyle = styled.div`
box-sizing: border-box;
margin: 0px;
height: 13rem;
display: flex;
flex-direction: column;
align-items: center;

.main{
margin-top: 11rem;
width: 60vw;
height: auto;
padding: 70px 0px 0px 0px;
}
`

function PerfumeList(props) {

     const {perfumeId} = useParams();
    const [Perfume, setPerfume] = useState({});
    const [PerfumeType, setPerfumeType] = useState([]);
    const [ReviewLists, setReviewLists] = useState([]);
	 
    useEffect(() => {
        let contentInfo = `products.json`;
        
        setPerfume(...productData.products.filter(v => v.id == perfumeId));
        
    }, []);
    
    return (
        <>
            <Header/>
            <PerfumeListStyle>
			<div className="main">

                  <p>향수</p>
                  <p>{Perfume.impormation && Perfume.impormation}   </p>
                 <p>{Perfume.impormation && Perfume.impormation}   </p>
                <p>{Perfume.impormation && Perfume.impormation}   </p>
            
                <br />
                <p>향수 정보</p>
                  <p>{Perfume.type && Perfume.type}   </p>
                 <p>{Perfume.type && Perfume.type}   </p>
                <p>{Perfume.type && Perfume.type}   </p>
                <p>{Perfume.type && Perfume.type}   </p>

                <br />
                <p>향수 리뷰</p>
                <p>{Perfume.review && Perfume.review}   </p>
                 <p>{Perfume.review && Perfume.review}   </p>
                <p>{Perfume.review && Perfume.review}   </p>
        
           
            
            
            </div>
            </PerfumeListStyle> 
            
   
        </>
    );
}

export default PerfumeList;