import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styled from 'styled-components';
import PerfumeReview from './PerfumeReview';
import { CommunityStyle } from './Community/Community';
import { Line } from './PerfumeReview';

const PerfumeDetailStyle = styled.div`

.main{
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 80px;
}
.perfume-img{
  margin-top:5rem;
  margin-bottom: 5rem;
}
.detail-text1{
  width: 100px;
  font-weight: bold;
  justify-content: flex-start;

}
.detail-text2{
  width: 100px;
  font-weight: bold;

}
.detail-text3{
  width: 100px;
  font-weight: bold;
 
}
.detail-text4{
  width: 100px;
  font-weight: bold;
 
}
.detail-text5{
  width: 100px;
  font-weight: bold;
  
}
.detail-text6{
  width: 100px;
  font-weight: bold;
 
}
.detail-text7{
  width: 100px;
  font-weight: bold;

}
.detail-text8{
  width: 100px;
  font-weight: bold;
 
}


.text-box{
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 14rem;
 
}
.detail-item{
  display: flex;
  justify-content: start;
  margin-top: 20px;
  width: 30vw;  
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
      <CommunityStyle>
      
        
      <div className="main">
          <h1 className="perfume-title"><b>{perfumeDetail.name}</b></h1>
          <img className='perfume-img' src={perfumeDetail.thumbnail} alt="" />
          <div className="text-box">
            <div className="detail-item"><span className="detail-text1">브랜드</span><span>{perfumeDetail.brandName}</span></div>
            <div className="detail-item"><span className="detail-text2">발매 일자</span><span>{perfumeDetail.launchDate}</span></div>
            <div className="detail-item"><span className="detail-text3">가격</span><span>{perfumeDetail.price}$</span></div>
            <div className="detail-item"><span className="detail-text4">성별</span><span>{perfumeDetail.gender === 0 ? '여성' : '남성'}</span></div>
            <div className="detail-item"><span className="detail-text5">탑 노트</span><span>{perfumeDetail.topNote.join(', ')}</span></div>
            <div className="detail-item"><span className="detail-text6">미들 노트</span><span>{perfumeDetail.middleNote.join(', ')}</span></div>
            <div className="detail-item"><span className="detail-text7">베이스 노트</span><span>{perfumeDetail.baseNote.join(', ')}</span></div>
            <div className="detail-item"><span className="detail-text8">계절</span><span>{perfumeDetail.seasons.join(', ')}</span></div>
            
          </div>
          
          <PerfumeReview/>
        </div>
      </CommunityStyle>
      </PerfumeDetailStyle>
       <Footer/>
    </>
  );
};

export default PerfumeDetail;