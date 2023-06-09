import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AxiosApi from "../../api/Axios";
import Modal from "../../util/Modal";
import { useCallback } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserInfo";
import profile from "../../image/기본프로필.jpg";
import { useNavigate } from "react-router-dom";

const CommentBox = styled.div`
    padding: 0;

    .commentList{
        width: 100%;
        padding-bottom: 25px;
        border-bottom: 0.2px solid rgb(161, 161, 161);
        margin-bottom: 25px;
        display: flex;
        flex-direction: row;
    }

    .listLeft{
        padding-top: 25px;
        flex-basis: 10%;
    }
    .listRight{
        flex-basis: 90%;
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
        font-family: none;
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
    
    .notLoginCommentWrite{
        display: none;
    }

    .notLoginlistUpdate-Delete{
        display: none;
    }
    .profile {
        width: 50px;
        height: 50px;
        border: 1px solid #ccc;
        border-radius: 50%;
    }
    
`;

const Comment = (props) => {
    
    const nav = useNavigate();
    const [pwd, setPwd] = useState("");
    const [text, setText] = useState("");
    const [comment, setComment] = useState("");
    const [commentNum, setCommentNum] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const context = useContext(UserContext);
    const {isLogin, userId} = context;
    const [deleteCommentNum, setDeleteCommentNum] = useState(0);

      useEffect(() => {
        const comment = async() => {
            const rsp = await AxiosApi.showComment(props.anum);
            setComment(rsp.data);
            console.log(rsp.data);
        }
        comment();
      }, [props.anum]);

    const submit = async(commentNum) => { // 댓글 등록하는 부분
        if(!isUpdate) {
            await AxiosApi.newComment(props.anum, userId ,text, pwd);
            await AxiosApi.plusOnePoint(userId);
            await AxiosApi.myGrade(userId);
            setPwd("");
            setText("");
            const newComment = await AxiosApi.showComment(props.anum);
            setComment(newComment.data);
            console.log(newComment.data);
        }
        else{
            await AxiosApi.updateComment(commentNum, text, pwd);
            console.log("댓글번호 : " + commentNum);
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

    const commentDelete = async (num) => {
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

    const onClickDeleteComment = (num) => {
        setDeleteCommentNum(num);
        setModalOpen(true);
    }


     const closeModal = () => {
         setModalOpen(false);
       }

    const onClickId = (id) => {
        nav(`/userProfile/${id}`);
    };


    return (
        <CommentBox>
            <div className="commentContainer">
                <div className="commentTitle">
                    <h3>댓글</h3>
                </div>
                {comment && comment.map(comment => (      
                <div className="commentList" key={comment.commentNum}> 
                    <div className="listLeft" onClick={()=>onClickId(comment.id)}>
                        <img className="profile" src={comment.userImg ? comment.userImg : profile} style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat'} }></img>
                    </div>
                    <div className="listRight">
                        <div className="listTop">
                            <div className="listName-date" onClick={()=>onClickId(comment.id)}>{comment.id} <span className="space">|</span> {comment.date2}</div>
                            <div className={isLogin && userId === comment.id ? "listUpdate-Delete" : "notLoginlistUpdate-Delete"}>
                                <p onClick={()=>viewComment(comment.commentNum)}>수정</p>
                                <p>|</p>
                                <p onClick={()=>onClickDeleteComment(comment.commentNum)}>삭제</p>
                            </div>
                        </div>
                        <div className="listBot">{comment.commentText}</div>
                    </div>
                </div>
                ))}
                
                <div className={isLogin ? "commentWrite" : "notLoginCommentWrite"}>
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
            <Modal open={modalOpen} type={true} confirm={()=>commentDelete(deleteCommentNum)} close={closeModal} header={"확인"}>삭제하시겠습니까?</Modal>
            
        </CommentBox>
    );
}

export default Comment;