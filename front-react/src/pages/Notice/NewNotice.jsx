import React, { useEffect, useState, useContext } from "react";
import AxiosApi from "../../api/Axios";
import styled from "styled-components";
import Header from "../../Header/Header";
import { useNavigate } from "react-router-dom";
import Modal from "../../util/Modal";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { UserContext } from "../../context/UserInfo";
import { storage } from "../../firebase/firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';


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
    .submitBtn{
        margin: 0px;
        margin-left: 15px;
        margin-top: 10px;
        height: 30px;
        width: 70px;
        border-radius: 3px;
        border: 1px solid #ccc;
    } 
    .noImage{
        display: none;
    } 
    .imagePreview{
        width: 80px;
        margin-bottom: 15px;
    } 
`;

export const Container = styled.div`
    margin: 0 auto;
    width: 55vw;
    position: static;
    
    .ck-editor__editable {
        width: 100%;
        height: 400px;
    }
`;


const NewNotice = () => {
    const [title, setTitle] = useState("");
    const [pwd, setPwd] = useState("");
    const [bnum, setCategory] = useState(4);
    const nav = useNavigate();
    const [text, setBoard_content] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const context = useContext(UserContext);
    const {userId} = context;
    const [file, setFile] = useState(null);
    const [image, setImage] = useState('');
    const [uploadedImage, setUploadedImage] = useState('');


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
        const rsp = await AxiosApi.newNotice(bnum, userId, title, text, pwd, image);
        await AxiosApi.plusThreePoint(userId);
        await AxiosApi.myGrade(userId);
        console.log("submit : " + rsp);
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

    const handleUploadImage = async (file) => {
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);
        console.log(file.name);
        fileRef.put(file).then(() => {
        console.log('File uploaded successfully!');
        fileRef.getDownloadURL().then((url) => {
            console.log("저장경로 확인 : " + url);
            setUploadedImage(url);
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
            <h2>글 작성</h2>
            <hr />
        </div>
        <blockquote>
        <div className="setting">
            <label>카테고리</label>
            <select value={bnum} onChange={onClickOption}>
            <option value={4}>공지사항</option>
            <option value={5}>News</option>
            </select>
        </div>
        <div className="setting">
            <label htmlFor="">제목</label>
            <input className="titleInput" type="text" onChange={onChangeTitle} />
        </div>
        <div className="setting">
            <label htmlFor="">대표이미지</label>
            <input type="file" onChange={handleFileInputChange} />
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
                    config={{
                    ckfinder: {
                        uploadUrl: "https://firebasestorage.googleapis.com/v0/b/chicchic-63182.appspot.com"
                    },
                    image: {
                        toolbar: ['imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:alignRight'],
                        styles: ['full', 'alignLeft', 'alignRight'],
                        upload: { handler: (file) => handleUploadImage(file), },
                    },
                    }}
                    data=""
                    onReady={(editor) => {
                    console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                    setBoard_content(data);
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
            <button onClick={onClickSubmit}>등록</button>
            <button onClick={goBack}>취소</button>
            </div>
        <Modal open={modalOpen} type={true} confirm={submit} close={closeModal} header={"확인"}>등록 하시겠습니까?</Modal>
        </Setting>
        </>
    );
};

export default NewNotice;