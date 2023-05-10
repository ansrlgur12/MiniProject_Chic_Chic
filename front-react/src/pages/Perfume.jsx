import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PerfumeList from './PerfumeList';
import styled from 'styled-components';

const PerfumeStyled  = styled.div`
box-sizing: border-box;
padding-top: 130px;
width: 70vw;
height: auto;
margin: auto;

`


const Perfume = () => {
  return (
    <>
        <Header />
        <PerfumeStyled>
        <div className='main'>
      <PerfumeList />
    
      </div>
      </PerfumeStyled>
     <Footer/>
    </>
  );
};

export default Perfume;
