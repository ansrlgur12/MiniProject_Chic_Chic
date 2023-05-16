import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styled from 'styled-components';

const PerfumeDetailStyle = styled.div`
.perfume-detail-container {
  box-sizing: border-box;
  padding-top: 300px;
  height: 1000px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.perfume-title {
  color: #333;
  font-size: 4em;
  margin-bottom: 50px;
}

.detail-text {
  color: #666;
  font-size: 1.5em;
  margin-bottom: 50px;
}

`

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
      <PerfumeDetailStyle>
      <div className="perfume-detail-container">
        <h1 className="perfume-title"><b>{perfumeDetail.name}</b></h1>
        <img src={perfumeDetail.thumbnail} alt="" />
        <p className="detail-text">Brand: {perfumeDetail.brandName}</p>
        <p className="detail-text">Launch Date: {perfumeDetail.launchDate}</p>
        <p className="detail-text">Price: {perfumeDetail.price}$</p>
        <p className="detail-text">Gender: {perfumeDetail.gender}</p>
      </div>
   
      </PerfumeDetailStyle>
      <Footer/>
    </>
  );
};

export default PerfumeDetail;
