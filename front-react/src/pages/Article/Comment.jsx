import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AxiosApi from "../../api/Axios";
import Modal from "../../util/Modal";
import { useCallback } from "react";

const CommentBox = styled.div`
    padding: 0;

    .commentList{
        width: 100%;
        padding-bottom: 25px;
        border-bottom: 0.2px solid rgb(161, 161, 161);
    }

    .listTop{
        height: 1em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0px;
    }
    .listName-date{
        font-size: small;
        color: #696969;
    }

    .listUpdate-Delete{
        cursor: pointer;
        margin-top: 30px;
        display: flex;
        font-size: small;
        color: #696969;
    }


    div + div {
        margin-top: 20px;
    }

    .pwd{
        height: 2.5em;
        width: 120px;
        padding: 0.4em;
        border-radius: 0px;
        border: 0.5px solid rgb(149, 149, 149);
    }
    .comment{
        height: 10vh;
        width: 100%;
        padding: 0.4em;
        border-radius: 0px;
        border: 0.5px solid #959595;
        display: flex;
        justify-content: start;
        align-items: flex-start;
    }
    .writeBot{
        display: flex;
        justify-content: right;
        margin-bottom: 50px;
    }
    
    .commentBtn{
        border: 0.5px solid #959595;
        width: 90px;
        height: 40px;
    }

    .commentBtn:active{
        background-color: #c8c8c8;
    }

    .space{
        margin: 0px 5px;
    }


`;

const Comment = (props) => {
    
    const [pwd, setPwd] = useState("");
    const [text, setText] = useState("");
    const [comment, setComment] = useState("");
    const [commentNum, setCommentNum] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);

    const fetchComment = useCallback(async () => {
        const rsp = await AxiosApi.showComment(props.anum);
        setComment(rsp.data);
      }, [props.anum]);
    
      useEffect(() => {
        fetchComment();
      }, [fetchComment]);

    const submit = async(commentNum) => { // 댓글 등록하는 부분
        if(!isUpdate) {
            const rsp = await AxiosApi.newComment(props.anum, text, pwd);
            console.log(rsp);
            setPwd("");
            setText("");
            const newComment = await AxiosApi.showComment(props.anum);
            setComment(newComment.data);
        }
        else{
            await AxiosApi.updateComment(commentNum, text, pwd);
            setIsUpdate(false);
            setPwd("");
            setText("");
            const newComment = await AxiosApi.showComment(props.anum);
            setComment(newComment.data);
        }
        
      }

    const onChangePwd = (e) => {
        setPwd(e.target.value);
    }

    const onChangeText = (e) => {
        setText(e.target.value);
    }

    const commentDelete = async(num) => {
        await AxiosApi.deleteComment(num);
        const updatedComment = comment.filter((c) => c.commentNum !== num);
        setComment(updatedComment);
        setModalOpen(false);
        console.log("삭제완료");

    }

    const viewComment = async(num) => {
        setIsUpdate(true);
        setCommentNum(num);
        const rsp = await AxiosApi.viewComment(num)
        console.log(rsp.data);
        setText(rsp.data[0].commentText);

    }
   
    const deleteClick = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
      }


    return (
        <CommentBox>
            <div className="commentContainer">
                <div className="commentTitle">
                    <h3>댓글</h3>
                </div>
                {comment && comment.map(comment => (      
                <div className="commentList" key={comment.commentNum}> 
                    <div className="listTop">
                        <div className="listName-date">{comment.id} <span className="space">|</span> {comment.date}</div>
                        <div className="listUpdate-Delete">
                            <p onClick={()=>viewComment(comment.commentNum)}>수정</p>
                            <p>|</p>
                            <p onClick={deleteClick}>삭제</p>
                            <Modal open={modalOpen} type={true} confirm={()=>commentDelete(comment.commentNum)} close={closeModal} header={"경고"}>삭제 하시겠습니까?</Modal>
                        </div>
                    </div>
                    <div className="listBot">{comment.commentText}</div>
                </div>
                ))}
                
                <div className="commentWrite">
                    <div className="writeTop">
                        <input className="pwd" type="password" value={pwd} placeholder="비밀번호" onChange={onChangePwd}/>
                    </div>
                    <div className="writeMid">
                        <textarea className="comment" type="text" value={text} placeholder="여러분의 소중한 댓글을 입력해주세요." onChange={onChangeText}/>
                    </div>
                    <div className="writeBot">
                        <button className="commentBtn" onClick={()=>submit(commentNum)}> {isUpdate ? "수정" : "작성"}</button>
                    </div>
                </div>
            </div>
            
        </CommentBox>
    );
}

export default Comment;