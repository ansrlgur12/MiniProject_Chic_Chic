import React from "react";
import Header from "../../Header/Header";
import styled from "styled-components";
import AxiosApi from "../../api/Axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OtherArticles from "./OtherArticles";
import Comment from "./Comment";
import Modal from "../../util/Modal";
import { useContext } from "react";
import { UserContext } from "../../context/UserInfo";
import ShareButton from "../../util/ShareKakao";
import { initKakao } from "kakao-js-sdk";
import grade from "../../image/향수등급.png";
import gradeGold from "../../image/금.png";
import gradeSilver from "../../image/은.png";
import gradeBronze from "../../image/동.png";

const ArticleStyle = styled.div`
    font-family: 'KorailRoundGothicBold';
    background-color: #9c8d83 ;
    box-sizing: border-box;
    padding-bottom: 60px;
    padding-top: 200px;
    

    .articleMain{
        background-color: white;
        padding-top: 30px;
        border-radius: 15px;
        width: 65vw;
        height: auto;
        margin: auto;
        padding-left: 60px;
        padding-right: 60px;
        padding-bottom: 30px;
        
    }

    .articleTitle h2 {
        font-family: 'KIMM_Bold';
    display: block;
    font-size: 1.7em;
    margin-top: 0.83em;
    margin-bottom: 0.83em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }
  h3 {

display: block;

font-size: 1.17em;

margin-top: 1em;

margin-bottom: 1em;

margin-left: 0;

margin-right: 0;

font-weight: bold;

}

    .title{
        margin-top: 60px;
        color: #5f330d;
    }
    .likes{
        margin-top: 50px;
        border: 1px solid #ccc;
        width: 110px;
        height: 30px;
        display: flex;
        justify-content: center;
        border-radius: 20px;
        margin-bottom: 50px;
    }
    .main{
        margin-top: 50px;
        margin-bottom: 50px;
    }
    .likeCount{
        margin: .4em 1em .5em .2em;
        padding: 0px;
        font-size:small; 
    }
    .gradeImg {
        width: 11px;
        height: 11px;
        padding: 11px;
    }
    .gradeLv{
        display: flex;
    }
   
p {

display: block;

margin-top: 1em;

margin-bottom: 1em;

margin-left: 0;

margin-right: 15px;

}

hr{
    border: .3px solid #ccc;
}
.tag-list{
    display: flex;
    flex-direction: row;
}
.tagName{
    color: rgb(125, 125, 125);
}
.titleInfo{
    display: flex;
    flex-direction: row;
    color: #9c9c9c;
    font-size: small;
}
button{
    background-color: white;
    border: none;
}
.shareBtn{
    margin-bottom: 3px;
}
.likeBtn{
    color: #d01919;
}
.likeDeleteUpdate{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.deleteUpdate{
    cursor: pointer;
    display: flex;
    font-size: small;
    color: #696969;
}   
.notLogindeleteUpdate{
    display: none;
}
.imageContainer{
    margin-top: 50px;
    display: flex;
    justify-content: center;
}
.image{
    width: 70%;
}
.noimage{
    display: none;
}
`;

const Article = () => {
    const nav = useNavigate();
    const { anum } = useParams(); 
    const[article, setArticle] = useState("");
    const [isLiked, setIsLiked] = useState(false);
    const context = useContext(UserContext);
    const {isLogin, userId} = context;
    const[modalOpen, setModalOpen] = useState(false);
    const[deleteModalOpen, setDeleteModalOpen] = useState(false);
    const[isUser, setIsUser] = useState(false);
    const[title, setTitle] = useState("");
    const[image, setImage] = useState("");
    const[text, setText] = useState("");
    const[userGrade, setUserGrade] = useState(1);
    console.log("로그인 여부 : " + isLogin);
    window.scrollTo(0, 0);


    useEffect(()=>{
        const article = async() => {
            const rsp = await AxiosApi.ariticle(anum);
            console.log(rsp.data);
            setTitle(rsp.data[0].title);
            setImage(rsp.data[0].img);
            setUserGrade(rsp.data[0].userGrade);
            setText(rsp.data[0].text);
            

            await AxiosApi.viewCount(anum);
            if(userId){
                const isLike = await AxiosApi.isLike(anum, userId);
                const userMatch = await AxiosApi.isUser(anum, userId);
                console.log(anum);
                console.log(isLike);
                console.log(userMatch.data);
                if(isLike.data === 0) {
                    setIsLiked(false);
                } else {
                    setIsLiked(true);
                }

                if(userMatch.data === 0) {
                    setIsUser(false);
                } else {
                    setIsUser(true);
                }
            }
            
            setArticle(rsp.data);
        }
        article();
    },[anum, isLiked]);


    const onClickDelete = () => {
        setDeleteModalOpen(true);
    }

    const deleteArticle = async() => {
        await AxiosApi.deleteLike(anum);
        await AxiosApi.deleteCommentAll(anum);
        const rsp = await AxiosApi.deleteArticle2(anum);
        console.log(rsp);
        nav(-1);
    }

    const onClickUpdate = (num) => {
        nav(`/update/${num}`);
    }


    const onClickLike = async() => {
        if(userId){
            if(isLiked){
                await AxiosApi.dislike(anum, userId);
                await AxiosApi.minusLike(anum);
                setIsLiked(!isLiked);
            }
            else{
                await AxiosApi.like(anum, userId);
                await AxiosApi.plusLike(anum);
                setIsLiked(!isLiked);
            }
        }else{
            setModalOpen(true);
        }
    };
  
    const closeModal = () => {
      setModalOpen(false);
    }

    const closeDeleteModal = () => {
        setDeleteModalOpen(false);
    }

    let gradeImage = "";

    switch(userGrade) {
        case 0 : gradeImage = grade; break;
        case 1 : gradeImage = gradeBronze; break;
        case 2 : gradeImage = gradeSilver; break;
        case 3 : gradeImage = gradeGold; break;
        default : gradeImage = gradeGold; break;
    }
    
    const sharePage = () => {
        const shareObject = {
          title: title,
          text: text,
          url: window.location.href,
        };
      
        if (navigator.share) { // Navigator를 지원하는 경우만 실행
          navigator
            .share(shareObject)
            .then(() => {
              // 정상 동작할 경우 실행
              alert('공유하기 성공')
            })
            .catch((error) => {
              alert('에러가 발생했습니다.')
            })
        } else { // navigator를 지원하지 않는 경우
          alert('페이지 공유를 지원하지 않습니다.')
        }
      }
        
    const onClickId = (id) => {
        nav(`/userProfile/${id}`);
    };

    return(
        <>
        <Header/>
        <ArticleStyle>
            <div className="articleMain">
            {article && article.map(article => (
                <>
                    <div className="container" key={article.anum}>
                        <div className="title">
                            <div className="articleTitle"><h2>{article.title}</h2></div>
                            <div className="titleInfo">
                                <div className="gradeLv"><p className="gradeImg" style={{backgroundImage: `url(${gradeImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', }}></p></div>
                                <p onClick={()=>onClickId(article.id)}>{article.id}</p>
                                <p>|</p>
                                <p>{article.date}</p>
                                <p>|</p>
                                <p>조회수 {article.view}</p>
                            </div>
                        </div>
                        <div className={article.img === 'image' || article.img === null ? "noimage" : "imageContainer" }><img className="image" src={article.img} alt="article image" style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}/></div>
                        <div className="main" dangerouslySetInnerHTML={{ __html: article.text }} />
                    </div>
                    <div className={"likeDeleteUpdate"}>
                        <div className="likes">
                            <button className="likeBtn" onClick={onClickLike}>{isLiked ? (<i className="fa-solid fa-heart"></i>) : (<i className="fa-sharp fa-regular fa-heart"></i>)}</button>
                            <p className="likeCount">{article.like}</p>
                            <button className="shareBtn" onClick={sharePage}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16">
                                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                                </svg>
                            </button>
                        </div>
                        <div className={isLogin && isUser ? "deleteUpdate" : "notLogindeleteUpdate"}>
                            <p onClick={()=>onClickUpdate(article.anum)}>수정하기</p>
                            <p>|</p>
                            <p onClick={onClickDelete}>삭제하기</p>
                        </div>
                    </div>
                    <br />
                <OtherArticles bnum={article.bnum} />
                </>
           ))}
            <br />
            <Comment anum={anum}/>
            </div>
        </ArticleStyle>
        <Modal open={modalOpen} type={true} confirm={()=>nav("/Login")} close={closeModal} header={"확인"}>로그인이 필요합니다</Modal>
        <Modal open={deleteModalOpen} type={true} confirm={deleteArticle} close={closeDeleteModal} header={"경고"}>삭제하시겠습니까?</Modal>
        </>
    );
}
export default Article;