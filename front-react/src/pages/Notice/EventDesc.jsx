import React, { useState, useEffect } from "react";
import AxiosApi from "../../api/Axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";


const EventDescStyle = styled.div`
    box-sizing: border-box;
    padding-top: 130px;
    width: 60vw;
    height: auto;
`;

const EventDesc = () => {
    return(
        <>
            <Header />
            <EventDescStyle>
                <p>test</p>
            </EventDescStyle>
            <Footer />
        </>
    );
}
export default EventDesc;