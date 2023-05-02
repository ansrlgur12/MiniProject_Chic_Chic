import React from "react";
import Header from "../../Header/Header";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Product from "../Products/Products";
import styled from "styled-components";
import NowLoading from "../Loading";

// Json data 를 import 하여 PerfumePage 컴포넌트에서 사용할 수 있게함
import productData from "../../data/products.json";

const PerfumeStyle = styled.div`
box-sizing: border-box;
margin: 0px;
height: 1300px;
display: flex;
flex-direction: column;
align-items: center;

.main{
margin-top: 130px;
width: 60vw;
height: auto;
padding: 70px 0px 0px 0px;
}

.filter {
    display: flex;
    width: 85%;
    margin: 0 auto;
    justify-content: flex-end;
  }
  
  .filter > p:not(:last-child)::after {
    content: "|";
    padding: 10px;
  }
  
  .filter p {
    cursor: pointer;
  }
  
  .flex_wrap {
    max-width: 1440px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    gap: 10px 0px;
    margin: 0 auto;
    margin-top: 10rem;
  }

  .main {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
  }
  
  @media (max-width: 1440px) {
    .flex_wrap {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  
  @media (max-width: 768px) {
    .flex_wrap {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  
  @media (max-width: 360px) {
    .filter p {
      font-size: 12px;
    }
  }
`

export const PerfumePage = () => {
	
  const nav = useNavigate();

	return (
    <>
      <Header />
      <PerfumeStyle>
        <div className="main">
        <header><h2>향수</h2></header>
        <div className="filter">
          <p>최신순</p>
          <p>낮은가격</p>
         

        </div>
        </div>
        <div className="flex_wrap" >
          {/* productData.products 인 이유는 productData 안에 products가 있기 때문 */}
          {productData.products && productData.products.map((product) => {
            return  <Product key={`key-${product.id}`} product={product} />;
          })}
        
        </div>
        </PerfumeStyle>
      <Footer/>
    </>
  );
}

export default PerfumePage;