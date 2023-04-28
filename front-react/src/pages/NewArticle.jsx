import React, { useState } from "react";
import styled from "styled-components";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftjsToHtml from "draftjs-to-html";
import Header from "../Header/Header";

const Setting = styled.div`
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

const Container = styled.div`
    margin: 0 auto;
    width: 55vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: static;
    
`;

const RowBox = styled.div`
  width: 100%;
  display: flex;
`;

const Viewer = styled.div`
  width: calc(50% - 40px);
  height: 400px;
  padding: 20px;
  margin-top: 20px;
  border: 2px solid gray;
`;

const Draft = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [htmlString, setHtmlString] = useState("");

  const updateTextDescription = async (state) => {
    await setEditorState(state);
    const html = draftjsToHtml(convertToRaw(editorState.getCurrentContent()));
    setHtmlString(html);
  };

  const uploadCallback = () => {
    console.log("이미지 업로드");
  };

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
        <select name="" id="">
          <option value={1}>리뷰</option>
          <option value={2}>회원거래</option>
          <option value={3}>정보공유</option>
        </select>
      </div>
      <div className="setting">
        <label htmlFor="">비밀번호</label>
        <input type="password" />
      </div>
      <div className="setting">
        <label htmlFor="">제목</label>
        <input className="titleInput" type="text" />
      </div>
      <div className="setting">
        <label htmlFor="">내용</label>
        <Container>
        <Editor
          placeholder="게시글을 작성해주세요"
          editorState={editorState}
          onEditorStateChange={updateTextDescription}
          toolbar={{
            image: { uploadCallback: uploadCallback },
          }}
          localization={{ locale: "ko" }}
          editorStyle={{
            height: "400px",
            width: "100%",
            border: "3px solid lightgray",
            padding: "20px",
          }}
        />
      </Container>
      </div>
      <div className="setting">
        <label htmlFor="">태그</label>
        <input type="text" className="titleInput" placeholder="태그와 태그는 쉼표(,)로 구분합니다."/>
      </div>
      </blockquote>
      <div className="submit">
        <button>등록</button>
        <button>취소</button>
        </div>
        <p>{htmlString}</p>
      </Setting>
      
      
    </>
  );
};

export default Draft;