import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PerfumeList from './PerfumeList';
import styled from 'styled-components';
import PerfumeSearchFilter from './PerfumeSearchFilter';
import PerfumeSearchResults from './PerfumeSearchResults'; 


const PerfumeStyled  = styled.div`
box-sizing: border-box;
padding-top: 200px;
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
        <PerfumeSearchFilter />
      <PerfumeList />
    
      </div>
      </PerfumeStyled>
     <Footer/>
    </>
  );
};

export default Perfume;
