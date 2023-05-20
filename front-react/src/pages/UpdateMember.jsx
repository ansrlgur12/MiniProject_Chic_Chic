import React, { useEffect, useState } from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Modal from '../util/Modal';
import AxiosApi from '../api/Axios';
import styled from 'styled-components';
import Header from '../Header/Header';
import { useContext } from 'react';
import { UserContext } from '../context/UserInfo';

const MemberUpdateStyle = styled.div`
  background-color: #9c8d83 ;
  height: 120vh;
  padding-top: 200px;

.signUpContainer{
    background-color: white;
    border-radius: 15px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50%;
    margin: 0 auto;
    padding: 40px 40px 40px 40px;
}

.sign {
    font-family: 'KorailRoundGothicBold';
    margin-top: 47px;
    margin-left: 34px;
    font: normal normal bold 24px/35px Poppins;
    display: flex;
    letter-spacing: 0px;
    color: #313131;
    opacity: 1;
    padding-bottom: 50px;
}

  .item1 {
    margin-top: 100px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item2 {
    margin: 10px;
    display: flex;
    align-items: center;
  }

  .item3 {
    margin-top: 10px;
    margin-left: 40px;
    margin-right: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #999;
    font-size: 14px;
  }

  .hint {
      display: flex;
      font-family: 'KorailRoundGothicBold';
      margin-top: -5px;
      margin-bottom: 10px;
      margin-right: 40px;
      justify-content:right;
      align-items:center;
      font-size: 12px;
      color: #999;
  }
  .success {
    color: royalblue;
  }
  .error {
    color: red;
  }

  .enable-button {
    font-family: 'KorailRoundGothicBold';
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 30px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 26px;
    font-weight: bold;
    width: 100%; /* 원하는 너비 설정 */
    height: 50px;
    color: white;
    background-color: #815B5B;
    font-size: 15px;
    font-weight: 400;
    border-radius: 18px;
    border: orange;
    font-weight: 700;
  }
  .enable-button:active {
    font-family: 'KorailRoundGothicBold';
    margin-left: 30px;
    margin-right: 30px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 26px;
    font-weight: bold;
    width: 100%; /* 원하는 너비 설정 */
    height: 50px;
    color: white;
    background-color: #999;
    font-size: 15px;
    font-weight: 400;
    border-radius: 18px;
    border: #999;
    font-weight: 700;
  }
  .disable-button {
    font-family: 'KorailRoundGothicBold';
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 30px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 26px;
    font-weight: bold;
    width: 100%; /* 원하는 너비 설정 */
    height: 50px;
    color: white;
    background-color: #999;
    font-size: 13px;
    font-weight: 400;
    border-radius: 18px;
    border: orange;
  }
`;

const Input = styled.input`
  margin-left: 30px;
  margin-right: 30px;
  width: 100%; /* 원하는 너비 설정 */
  height: auto; /* 높이값 초기화 */
  line-height : normal; /* line-height 초기화 */
  padding: .8em .5em; /* 원하는 여백 설정, 상하단 여백으로 높이를 조절 */
  font-family: inherit; /* 폰트 상속 */
  border: 1px solid #999;
  border-radius: 18px; /* iSO 둥근모서리 제거 */
  outline-style: none; /* 포커스시 발생하는 효과 제거를 원한다면 */
`;


const UpdateMember = () => {

    const nav = useNavigate();
    const { id } = useParams();
    const context = useContext(UserContext);
    const {setIsLogin, setUserId, setPassword, password} = context;


     // 키보드 입력
     const [inputId, setInputId] = useState("");
     const [inputCurrentPw, setInputCurrentPw] = useState("");
     const [inputPw, setInputPw] = useState("");
     const [inputConPw, setInputConPw] = useState("");
 
     // 오류 메시지
     const [idMessage, setIdMessage] = useState("");
     const [cpwMessage, setCpwMessage] = useState("");
     const [pwMessage, setPwMessage] = useState("");
     const [conPwMessage, setConPwMessage] = useState("");
 
     // 유효성 검사
     const [isId, setIsId] = useState(false);
     const [isCurrentPw, setIsCurrentPw] = useState(false);
     const [isPw, setIsPw] = useState(false);
     const [isConPw, setIsConPw] = useState(false);
     
     // 팝업
     const [modalOpen, setModalOpen] = useState(false);
     const [finishModal, setFinishModal] = useState(false);
     const [modalText, setModelText] = useState("중복된 아이디 입니다.");


     useEffect(()=>{
        const update = async() => {
            setInputId(id);
        } 
        update();
    },[id])


     const closeModal = () => {
        setModalOpen(false);
    };

    const onChangId = (e) => {
        setInputId(e.target.value)
        if (e.target.value.length < 5 || e.target.value.length > 12) {
            setIdMessage("5자리 이상 12자리 미만으로 입력해 주세요.");
            setIsId(false);    
        } else {
            setIdMessage("올바른 형식 입니다.");
            setIsId(true);
        }
    }

    const onChangeCurrentPassword = (e) => {
        const passwordRegex = password;
        const passwordCurrent = e.target.value;
        setInputCurrentPw(passwordCurrent);
        if(passwordRegex!==passwordCurrent) {
            setCpwMessage('현재 비밀번호와 일치하지 않습니다!')
            setIsCurrentPw(false);
        }else{
            setCpwMessage('비밀번호 일치')
            setIsCurrentPw(true);
        }

    }

    const onChangePw = (e) => {
        //const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
        const passwordCurrent = e.target.value ;
        setInputPw(passwordCurrent);
        if (!passwordRegex.test(passwordCurrent)) {
            setPwMessage('숫자+영문자 조합으로 8자리 이상 입력해주세요!')
            setIsPw(false)
        } else if(password === passwordCurrent){
            setPwMessage('현재 비밀번호와 일치합니다')
            setIsPw(false)
        } 
        else {
            setPwMessage('안전한 비밀번호에요 : )')
            setIsPw(true);
        }        
    }

    const onChangeConPw = (e) => {
        const passwordCurrent = e.target.value ;
        setInputConPw(passwordCurrent)
        if (passwordCurrent !== inputPw) {
            setConPwMessage('비밀 번호가 일치하지 않습니다.')
            setIsConPw(false)
        } else {
            setConPwMessage('비밀 번호가 일치 합니다. )')
            setIsConPw(true);
        }      
    }

   
    const updatePassword = async() => {
        const rsp = await AxiosApi.updatePassword(id, inputPw);
        console.log(rsp);
        setFinishModal(true);
    }

    return(
        <>
        <Header/>
        <MemberUpdateStyle>
            <div className="signUpContainer">
            <div className="sign">
                <span>비밀번호 변경</span>
            </div>

            <div className="item2">
                <Input placeholder="아이디" value ={inputId} onChange={onChangId}/>
            </div>
            <div className="item2">
                <Input type='password' placeholder="현재 비밀번호" value ={inputCurrentPw} onChange={onChangeCurrentPassword}/>
            </div>
            <div className="hint">
                    {inputCurrentPw.length > 0 && (
                    <span className={`message ${isCurrentPw ? 'success' : 'error'}`}>{cpwMessage}</span>)}
            </div>
            <div className="item2">
                <Input type="password" placeholder="변경할 패스워드" value ={inputPw} onChange={onChangePw}/>
            </div>
            <div className="hint">
                    {inputPw.length > 0 && (
                    <span className={`message ${isPw ? 'success' : 'error'}`}>{pwMessage}</span>)}
            </div>
            <div className="item2">
                <Input type="password" placeholder="패스워드 확인" value ={inputConPw} onChange={onChangeConPw}/>
            </div>
            <div className="hint">
                    {inputPw.length > 0 && (
                    <span className={`message ${isConPw ? 'success' : 'error'}`}>{conPwMessage}</span>)}
            </div>

            <div className="item2">
                {(isCurrentPw && isPw && isConPw) ? 
                <button className="enable-button" onClick={updatePassword}>수정</button> :
                <button className="disable-button">수정</button>}
                <Modal open={finishModal} confirm={() => { setUserId(""); setPassword(""); setIsLogin(false); nav("/"); }} justConfirm={true} header="성공">회원정보 수정성공! 다시 로그인하세요</Modal>
            </div>
            </div>
        </MemberUpdateStyle>
        </>
    );
}

export default UpdateMember;