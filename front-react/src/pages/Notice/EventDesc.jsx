import React, { useState, useEffect } from "react";
import AxiosApi from "../../api/Axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";


const EventDescStyle = styled.div`

`;

const EventDesc = () => {
    return(
        <>
            <Header />
            <EventDescStyle>
            </EventDescStyle>
            <Footer />
        </>
    );
}
export default EventDesc;