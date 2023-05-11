import React from "react";
import styled, {css} from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const FooterStyled = styled.div`
    width: 100%;
    height: 30vh;
    background-color: #747474;
    margin-top: auto;
`;

const Footer = () => {

    return(
        <FooterStyled>
            <p>푸터 들어갈 자리 입니당</p>
        </FooterStyled>
    );
}

export default Footer;