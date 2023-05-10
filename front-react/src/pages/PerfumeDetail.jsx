import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styled from 'styled-components';

const PerfumeDetailStyled  = styled.div`
box-sizing: border-box;
padding-top: 130px;
width: 70vw;
height: auto;
margin: auto;

`

const PerfumeDetail = () => {
  const [perfumeDetail, setPerfumeDetail] = useState(null);
  const { perfumeNumber } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8111/perfume-details/${perfumeNumber}`);
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
      <div>
        <h1>{perfumeDetail.name}</h1>
        <p>Perfume Number: {perfumeDetail.perfumeNumber}</p>
        <p>Launch Date: {perfumeDetail.launchDate}</p>
        <p>Gender: {perfumeDetail.gender}</p>
        <p>Price: {perfumeDetail.price}</p>
        <p>Brand: {perfumeDetail.brandName}</p>
      </div>
      </PerfumeDetailStyled>
    </>
  );
  
};

export default PerfumeDetail;
