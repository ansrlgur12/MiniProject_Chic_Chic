import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import AxiosApi from "../../api/Axios";
import Header from "../../Header/Header";
import { Setting, Container } from './NewArticle';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Modal from "../../util/Modal";
import { storage } from "../../firebase/firebase";
import styled from "styled-components";
const InputStyle = styled.div`
`;


const Update = () => {
    const nav = useNavigate();
    const { num } = useParams();
    const [title, setTitle] = useState("");
    const [pwd, setPwd] = useState("");
    const [bnum, setCategory] = useState(1);
    const [text, setText] = useState("");
    const [file, setFile] = useState(null);
    const [image, setImage] = useState('');


    const[modalOpen, setModalOpen] = useState(false);

    useEffect(()=>{
        const viewArticle = async() => {
            const rsp = await AxiosApi.ariticle(num);
            console.log(rsp.data[0]);
            setTitle(rsp.data[0].title);
            setText(rsp.data[0].text);
            setCategory(rsp.data[0].bnum);
            setImage(rsp.data[0].img);
            console.log(rsp.data[0].img);
            console.log(image);
        }
        viewArticle();
    },[num]);



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
      const rsp = await AxiosApi.update(num, bnum, title, text, pwd, image);
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
    const handleFileInputChange = (e) => {
      setFile(e.target.files[0]);
      console.log(e.target.files[0]);
    };
  
    const handleUploadClick = async() => {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name);
      fileRef.put(file).then(() => {
        console.log('File uploaded successfully!');
        fileRef.getDownloadURL().then((url) => {
          console.log("저장경로 확인 : " + url);
          setImage(url);
        });
      });
    };

    const handleUploadDelete = () => {
      setImage('');
    }

      return (
        <>
        <Header />
          <Setting>
          <div className="title">
            <h2>글 수정</h2>
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
            <input className="titleInput" type="text" value={title} onChange={onChangeTitle} />
          </div>
          <div className="setting">
            <label htmlFor="">대표이미지</label>
            <input type="file" onChange={handleFileInputChange}/>
            <button className="submitBtn" onClick={handleUploadClick}>등록</button>
            <button className="submitBtn" onClick={handleUploadDelete}>삭제</button>
          </div>
          <div className="setting">
            <label htmlFor="">이미지 미리보기</label>
            <img className = {image ? "imagePreview" : "noImage" } src={image} alt="image" style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} />
          </div>
          <div className="setting">
            <label htmlFor="">내용</label>
            <Container>
        <CKEditor 
                editor={ClassicEditor}
                
                data={text}
                onReady={(editor) => {
                  console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                  setText(data);
                }}
                // onBlur={(event, editor) => {
                //   console.log('Blur.', editor);
                // }}
                // onFocus={(event, editor) => {
                //   console.log('Focus.', editor);
                // }}
              />
        </Container>
          </div>
          <div className="setting">
            <label htmlFor="">비밀번호</label>
            <input type="password" onChange={onChangePwd} />
          </div>
          </blockquote>
          <div className="submit">
            <button onClick={onClickSubmit}>수정</button>
            <button onClick={goBack}>취소</button>
            </div>
          <Modal open={modalOpen} type={true} confirm={submit} close={closeModal} header={"확인"}>수정 하시겠습니까?</Modal>
          </Setting>
        </>
      );
}

export default Update;