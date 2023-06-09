import React, { useState, useContext } from "react";
import styled from "styled-components";
import AxiosApi from "../api/Axios";
import { useNavigate } from "react-router-dom";
import Modal from "../util/Modal";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserInfo";
import Header from "../Header/Header";

const Container = styled.div`
  background-color: #9c8d83 ;
  height: 100vh;
  padding-top: 200px;

    .title{
      font-family: 'KorailRoundGothicBold';
      padding-left: 40px;
      margin-bottom: 20px;
      font-weight: bold;
    }

    .loginContainer{
      border-radius: 15px;
      background-color: white;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 80px 40px 40px 40px;
      margin: 0 auto;
      width: 50vw; /* 원하는 너비 설정 */

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
    font-family: 'KorailRoundGothicBold';
      display: flex;
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
    font-size: 15px;
    font-weight: 400;
    border-radius: 18px;
    border: #999;
    font-weight: 700;
  }
  .disable-button {
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
  .signup {
    font-family: 'KorailRoundGothicBold';
    display: flex;
    justify-content: left;
    align-items: center;
    color: orange;
    font-weight: 700;
    margin-top: 10px;
    margin-left: 40px;
    font-size: 14px;
    .link_style {
      color: orange;
      text-decoration: none;
    }
  }
`;

const Input = styled.input`
    margin: 0 auto;
    width: 90%; /* 원하는 너비 설정 */
    height: auto; /* 높이값 초기화 */
    line-height : normal; /* line-height 초기화 */
    padding: .8em .5em; /* 원하는 여백 설정, 상하단 여백으로 높이를 조절 */
    font-family: inherit; /* 폰트 상속 */
    border: 1px solid #999;
    border-radius: 18px; /* iSO 둥근모서리 제거 */
    outline-style: none; /* 포커스시 발생하는 효과 제거를 원한다면 */
`;


const Login = () => {

    const nav = useNavigate();

    const onKeyPress = (e) => {
      if (e.key === 'Enter') {
        onClickLogin();
      }
    };

    // Context API에 값을 저장
    const context = useContext(UserContext);
    const {setUserId, setPassword, setIsLogin, setUserImage} = context;

    // 키보드 입력 받기
    const[inputId, setInputId] = useState("");
    const[inputPw, setInputPw] = useState("");

    // 오류메세지
    const[idMessage, setIdMessage] = useState("");
    const[pwMessage, setPwMessage] = useState("");

    // 유효성검사
    const[isId, setIsId] = useState(false);
    const[isPw, setIsPw] = useState(false);

    // 팝업처리(모달)
    const[modalOpen, setModalOpen] = useState(false);
    const[loginFinishOpen, setLoginFinishOpen] = useState(false);

  
    const closeModal = () => {
        setModalOpen(false);
    }


    const onChangeId = e => {
        // 5 ~ 20자리의 영문자, 숫자, 언더스코어로 이루어진 문자열 체크
        const regexId = /^\w{5,20}$/;
        setInputId(e.target.value);
        if(!regexId.test(e.target.value)){
            setIdMessage("5자리 이상 20자리 미만으로 입력해주세요");
            setIsId(false);
        } else {
            setIdMessage("올바른 형식 입니다.");
            setIsId(true);
        }
    }

    // 8자에서 25자 미만 입력
    const onChangePw = (e) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
        const passwordCurrent = e.target.value;
        setInputPw(passwordCurrent)
        if (!passwordRegex.test(passwordCurrent)) {
            setPwMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!')
            setIsPw(false)
        } else {
            setPwMessage('안전한 비밀번호에요 : )');
            setIsPw(true);
        }
      }

    const onClickLogin = async() => {
      // 로그인을 위해 Axios 호출
      const response = await AxiosApi.memberLogin(inputId, inputPw);
      console.log(response.data);

      if(response.data.success === true) {
        console.log("33");
          setLoginFinishOpen(true);
          setUserId(inputId);
          setPassword(inputPw);
          setIsLogin(true);
          setUserImage(response.data.userImage);
          
      } else {
          console.log("로그인 에러");
          setModalOpen(true);
      }
        
    }
   

  

    return(
      <>
      <Header/>
        <Container>
          <div className="loginContainer">
            <div className="title">
              <h2>Login</h2>
            </div>
            <div className="item2">
                <Input placeholder="아이디" value={inputId} onChange={onChangeId}/>
            </div>
            {/* <div className="hint">
                {inputId.length > 0 && <span className= {`${isId ? "success" : "error"}`}>{idMessage}</span>}
            </div> */}
            <div className="item2">
                <Input type="password" placeholder="비밀번호" value={inputPw} onChange={onChangePw} onKeyPress={onKeyPress}/>
            </div>
            {/* <div className="hint">
                {inputId.length > 0 && <span className= {`${isPw ? "success" : "error"}`}>{pwMessage}</span>}
            </div> */}
            <div className="item2">
            {(isId && isPw) ?
              <button className="enable-button"onClick={onClickLogin}>로그인</button>  :
              <button className="disable-button"onClick={onClickLogin}>로그인</button>}
            </div>
            <Modal open={modalOpen} confirm={closeModal} justConfirm = {true} header={"오류"}>아이디 및 패스워드를 확인해주세요.</Modal>
            <Modal open={loginFinishOpen} confirm={()=>nav(-1)} justConfirm = {true} header={"성공"}>로그인이 성공했습니다.</Modal>
            <div className="signup">
                <div className="link_style" onClick={() => nav("/SignUp")}>아직 회원이 아니세요?</div>
            </div>
            </div>
        </Container>
        </>
    );
}

export default Login;