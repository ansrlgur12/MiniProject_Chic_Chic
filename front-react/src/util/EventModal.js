import React from "react";
import styled from "styled-components";
import EventDate from "../pages/Notice/EventDate";

const ModalStyled = styled.div`
font-family: 'KorailRoundGothicBold';
    .modal {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.6);
    }
    .openModal {
        display: flex;
        align-items: center;
        animation: modal-bg-show 0.8s;
    }
    .button {
        outline: none;
        cursor: pointer;
        border: 0;
    }
    .modal section {
        width: 90%;
        max-width: 450px;
        margin: 0 auto;
        border-radius: 0.3rem;
        background-color: #fff;
        /* 팝업이 열릴때 스르륵 열리는 효과 */
        animation: modal-show 0.3s;
        overflow: hidden;
    }
    .modal section > header {
        position: relative;
        padding: 16px 64px 16px 16px;
        background-color: #594545;
        color: whitesmoke;
        font-weight: 700;
    }

    .modal section > header button {
        border-style: none;
        position: absolute;
        top: -40px;
        right: 15px;
        width: 30px;
        font-size: 21px;
        font-weight: 700;
        text-align: center;
        color: whitesmoke;
        background-color: transparent;
    }
    .modal > section > main {
    padding: 16px;
    border-top: 1px solid #dee2e6;
    }
    .modal > section > footer {
        padding: 12px 16px;
        text-align: right;
    }
    .modal > section > footer button {
        padding: 6px 12px;
        color: whitesmoke;
        background-color: #815B5B;
        border: none;
        border-radius: 5px;
        font-size: 13px;
        margin: 5px;
    }
    @keyframes modal-show {
        from {
        opacity: 0;
        margin-top: -50px;
        }
        to {
        opacity: 1;
        margin-top: 0;
        }
    }
    @keyframes modal-bg-show {
        from {
        opacity: 0;
        }
        to {
        opacity: 1;
        }
  }
`;

const EventModal = (props) => {

    const {open} = props;

    return(
        <ModalStyled>
            <div className={open ? "openModal modal" : "modal"}>
                <EventDate />
            </div>
        </ModalStyled>
    );
}

export default EventModal;