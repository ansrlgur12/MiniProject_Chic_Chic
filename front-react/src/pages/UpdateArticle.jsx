import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import AxiosApi from "../api/Axios";
import Header from "../Header/Header";
import { Setting, Container } from './NewArticle';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Modal from "../util/Modal";



const Update = () => {
    const nav = useNavigate();
    const { num } = useParams(); 
    const [article, setArticle] = useState("");

    useEffect(()=>{
        const article = async() => {
            const rsp = await AxiosApi.ariticle(num);
            console.log(num);
            setArticle(rsp.data);
            setAnum(num);
        }
        article();
    }, [num]);
    const [anum, setAnum] = useState("");
    const [title, setTitle] = useState("");
    const [pwd, setPwd] = useState("");
    const [bnum, setCategory] = useState(1);
    const [text, setBoard_content] = useState("");
    const[modalOpen, setModalOpen] = useState(false);
  


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
      const rsp = await AxiosApi.update(anum, bnum, title, text, pwd);
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
        {article && article.map(article => (
        <>
        <div className="title">
          <h2>글 수정</h2>
          <hr />
        </div>
        <blockquote>
        <div className="setting">
          <label>카테고리</label>
          <select value={article.bnum} onChange={onClickOption}>
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
          <label htmlFor="">내용</label>
          <Container>
          <CKEditor 
              editor={ ClassicEditor }
              data={article.text}
              onReady={ editor => {
                  // You can store the "editor" and use when it is needed.
                   console.log( 'Editor is ready to use!', editor );
                                  
              } }
              onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                  setBoard_content(data);
              }}
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
          <button onClick={onClickSubmit}>수정</button>
          <button onClick={goBack}>취소</button>
          </div>
        <Modal open={modalOpen} type={true} confirm={submit} close={closeModal} header={"확인"}>수정 하시겠습니까?</Modal>
        </>
        ))}
        </Setting>
        
        
      </>
    );
}

export default Update;