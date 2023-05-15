import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styled from 'styled-components';


const PerfumeDetailStyled  = styled.div`
box-sizing: border-box;
padding-top: 300px;
width: 70vw;
height: 800px;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #f9f9f9;
border-radius: 10px;
box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
color: #333;
font-size: 4em;
margin-bottom: 50px;
`;

const DetailText = styled.p`
color: #666;
font-size: 1.5em;
margin-bottom: 50px;
`;

const PerfumeDetail = () => {
  const [perfumeDetail, setPerfumeDetail] = useState(null);
  const { perfumeNumber } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8111/perfume-details/${perfumeNumber}`);
        console.log(response.data);
        setPerfumeDetail(response.data);
      } catch (error) {
        console.error('Error fetching perfume detail:', error);
      }
    };

    fetchData();
  }, [perfumeNumber]);

  if (!perfumeDetail) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header/>
      <PerfumeDetailStyled>
        <Title><b>{perfumeDetail.name}</b></Title>
        <img src={perfumeDetail.thumbnail} alt="" />
        
        <DetailText>Brand: {perfumeDetail.brandName}</DetailText>
        <DetailText>Launch Date: {perfumeDetail.launchDate}</DetailText>
        <DetailText>Price: {perfumeDetail.price}$</DetailText>
        <DetailText>Gender: {perfumeDetail.gender}</DetailText>
        
       
      </PerfumeDetailStyled>
      <Footer/>
    </>
  );
};


export default PerfumeDetail;
