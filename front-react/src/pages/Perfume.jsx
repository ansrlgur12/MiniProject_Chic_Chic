import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PerfumeList from './PerfumeList';
import styled from 'styled-components';
import PerfumeSearchFilter from './PerfumeSearchFilter';
import PerfumeSearchResults from './PerfumeSearchResults'; 
import PerfumeAllSearch from './PerfumeAllSearch';
import PerfumeRating from './PerfumeRating';

export const PerfumeStyled  = styled.div`

box-sizing: border-box;
padding-top: 200px;
width: 50vw;
height: auto;
margin: auto;

`

const Perfume = () => {
  return (
    <>
        <Header />
<PerfumeRating />
        <PerfumeStyled>
       <PerfumeAllSearch /> 
       
       <div className='main' style={{display:"flex"}}>
          <PerfumeSearchFilter />
          <PerfumeList />
        </div>
        </PerfumeStyled>
     <Footer/>
    </>
  );
};

export default Perfume;
