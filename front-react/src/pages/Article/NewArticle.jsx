import React, { useEffect, useState, useContext } from "react";
import AxiosApi from "../../api/Axios";
import styled from "styled-components";
import Header from "../../Header/Header";
import { useNavigate } from "react-router-dom";
import Modal from "../../util/Modal";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { UserContext } from "../../context/UserInfo";

export const Setting = styled.div`
  padding-top: 160px;
  width: 60vw;
  height: 15vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  h2 {
    color: #804f23;;
    display: block;
    font-size: 1.5em;
    margin-top: 0.83em;
    margin-bottom: 0.83em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }

  .setting{
    display: flex;
  }
  
  .submit{
      width: 100%;
      display: flex;
      justify-content: right;
    }

    button{
        margin: 50px 10px;
        border-style: none;
        width: 90px;
        height: 40px;
    }
    label{
      width: 100px;
      font-size: small;
      margin: 10px 0px 20px 0px;
    }
    input{
      width: 200px;
      height: 30px;
      margin: 10px 0px 20px 0px;
    }
    select{
      font-size: small;
      height: 30px;
      margin: 10px 0px 20px 0px;
    }

    .titleInput{
      width: 500px;
    }
    .title{
      margin-bottom: 50px;
    }
`;

export const Container = styled.div`
    margin: 0 auto;
    width: 55vw;
    position: static;
    
`;


const Draft = () => {
  const [title, setTitle] = useState("");
  const [pwd, setPwd] = useState("");
  const [bnum, setCategory] = useState(1);
  const nav = useNavigate();
  const [text, setBoard_content] = useState("");
  const[modalOpen, setModalOpen] = useState(false);
  const context = useContext(UserContext);
  const {userId} = context;

  useEffect(()=>{
    console.log(text);
  },[text]);
  useEffect(()=>{
    console.log("제목작성");
  },[title]);
  useEffect(()=>{
    console.log("비밀번호작성");
  },[pwd]);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  }

  const onClickOption = (e) => {
    setCategory(e.target.value);
  }
  const onChangePwd = (e) => {
    setPwd(e.target.value);
  }

  const submit = async() => {
    const rsp = await AxiosApi.newArticle(userId, bnum, title, text, pwd)
    console.log(rsp);
    nav(-1);
  }

  const onClickSubmit = async() => {
      setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  const goBack = () => {
    nav(-1);
  }

  return (
    <>
    <Header />
      <Setting>
      <div className="title">
        <h2>글 작성</h2>
        <hr />
      </div>
      <blockquote>
      <div className="setting">
        <label>카테고리</label>
        <select value={bnum} onChange={onClickOption}>
          <option value={1}>리뷰</option>
          <option value={2}>정보공유</option>
          <option value={3}>회원거래</option>
        </select>
      </div>
      <div className="setting">
        <label htmlFor="">제목</label>
        <input className="titleInput" type="text" onChange={onChangeTitle} />
      </div>
      <div className="setting">
        <label htmlFor="">내용</label>
        <Container>
        <CKEditor 
            editor={ ClassicEditor }
            data=""
            onReady={ editor => {
                // You can store the "editor" and use when it is needed.
                 console.log( 'Editor is ready to use!', editor );
                                
            } }
            onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
                setBoard_content(data);
            }}
            onBlur={ ( event, editor ) => {
                console.log( 'Blur.', editor );
            } }
            onFocus={ ( event, editor ) => {
                console.log( 'Focus.', editor );
            } }
        />
        </Container>
      </div>
      <div className="setting">
        <label htmlFor="">태그</label>
        <input type="text" className="titleInput" placeholder="태그와 태그는 쉼표(,)로 구분합니다."/>
      </div>
      <div className="setting">
        <label htmlFor="">비밀번호</label>
        <input type="password" onChange={onChangePwd} />
      </div>
      </blockquote>
      <div className="submit">
        <button onClick={onClickSubmit}>등록</button>
        <button onClick={goBack}>취소</button>
        </div>
      <Modal open={modalOpen} type={true} confirm={submit} close={closeModal} header={"확인"}>등록 하시겠습니까?</Modal>
      </Setting>
      
      
    </>
  );
};

export default Draft;