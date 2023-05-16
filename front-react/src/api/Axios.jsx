import axios from "axios";
const CHIC_DOMAIN = "http://localhost:8111";

const AxiosApi = {

    articleList : async(anum, view) => { // 게시글 목록 출력
        
        return await axios.get(CHIC_DOMAIN + `/article/${anum}/${view}`);
    },
    smallArticleList : async(anum) => { // 작은 목록 출력
        
        return await axios.get(CHIC_DOMAIN + `/smallArticle/${anum}`);
    },
    ariticle : async(num) => { // 게시글 출력
        
        return await axios.get(CHIC_DOMAIN + `/articles/${num}`);
    },


    newArticle : async(id, bnum, title, text, pwd, image) => { // 게시글 작성 정보 저장
        const article = {
            id : id,
            bnum : bnum.toString(),
            title : title,
            text : text,
            pwd : pwd,
            image : image
        };
        return await axios.post(CHIC_DOMAIN + "/newArticle", article);
    },
    
    // deleteArticle : async(deleteNum) => { // 게시글 삭제

    //     return await axios.get(CHIC_DOMAIN + `/articleDelete/${deleteNum}`);
    // },

    deleteArticle2 : async(anum) => {

        return await axios.get(CHIC_DOMAIN + `/articleDelete/${anum}`);
    },

    // 이벤트 페이지 리스트
    eventList : async(eventNum, view) => {

        return await axios.get(CHIC_DOMAIN + `/EventPage/${eventNum}/${view}`);
    },

    // 이벤트 상세 페이지
    eventDesc : async(eventNum) => {
        return await axios.get(CHIC_DOMAIN + `/EventDesc/${eventNum}`)
    },

    // 로그인
    memberLogin : async(id, pw) => {
        const login = {
            id : id,
            pwd : pw
        };
        return await axios.post(CHIC_DOMAIN + "/login", login);
    },

    // 회원 조회
    memberGet : async(id) => {
        return await axios.get(CHIC_DOMAIN + `/member?name=${id}`);
    },

    // 회원 가입 여부 확인
    memberRegCheck : async(id) => {
        return await axios.get(CHIC_DOMAIN + `/check?id=${id}`);
    },

    // 회원 가입
    memberReg : async(id, pwd, name, email) => {
        const member = {
            id : id,
            pwd : pwd,
            name : name,
            email : email
        };
        return await axios.post(CHIC_DOMAIN + "/new", member);
    },

    // 게시글 수정
    update : async(anum, bnum, title, text, pwd, img) => {
        const article = {
            anum : anum.toString(),
            bnum : bnum.toString(),
            title : title,
            text : text,
            pwd : pwd,
            img : img
        };
        return await axios.post(CHIC_DOMAIN + "/update", article);
    },

    // 댓글 등록
    newComment : async(anum, id, text, pwd) => {
        const comment = {
            anum : anum.toString(),
            id : id,
            text : text,
            pwd : pwd
        };
        return await axios.post(CHIC_DOMAIN + "/comment", comment);
    },

    showComment : async(anum) => { // 댓글 목록 출력
        
        return await axios.get(CHIC_DOMAIN + `/showComment/${anum}`);
    },

    deleteComment : async(commentNum) => { // 댓글 삭제
        return await axios.get(CHIC_DOMAIN + `/commentDelete/${commentNum}`);
    },

    viewComment : async(commentNum) => { // 댓글 수정하기 전 가져오기
        return await axios.get(CHIC_DOMAIN + `/viewComment/${commentNum}`);
    },

    updateComment : async(commentNum, text, pwd) => { // 댓글 수정 등록
        const comment = {
            commentNum : commentNum.toString(),
            text : text,
            pwd : pwd
        };
        return await axios.post(CHIC_DOMAIN + "/updateComment", comment)
    },

    viewCount : async(anum) => {
        const view = {
            anum : anum.toString()
        }
        return await axios.post(CHIC_DOMAIN + `/viewCount/`, view);
    },

    like : async(anum, id) => {
        const like = {
            anum : anum.toString(),
            id : id
        }
        return await axios.post(CHIC_DOMAIN + `/newLike/`, like);
    },

    dislike : async(anum, id) => {
        const dislike = {
            anum : anum.toString(),
            id : id
        }
        return await axios.post(CHIC_DOMAIN + `/disLike/`, dislike);
    },

    deleteLike : async(anum) => { 
        return await axios.get(CHIC_DOMAIN + `/deleteLike/${anum}`);
    },

    isLike : async(anum, id) => {
        return await axios.get(CHIC_DOMAIN + `/countLike/${anum}/${id}`);
    },

    imageTestResult: async (selected) => {
       
        return await axios.get(CHIC_DOMAIN + `/ImageTestResult/${selected}`);
      },
      NoteFinderResult : async(ids) =>{
        return await axios.get(CHIC_DOMAIN+ `/NoteFinderResult/${ids}`);
      },
    plusLike : async(anum) => {
        const plus = {
            anum : anum.toString()
        }
        return await axios.post(CHIC_DOMAIN + `/plusLike/`, plus);
    },

    minusLike : async(anum) => {
        const minus = {
            anum : anum.toString()
        }
        return await axios.post(CHIC_DOMAIN + `/minusLike/`, minus);
    },

    deleteCommentAll : async(anum) => {
        return await axios.get(CHIC_DOMAIN + `/deleteCommentAll/${anum}`);
    },

    isUser : async(anum, id) => {
        return await axios.get(CHIC_DOMAIN + `/isUser/${anum}/${id}`);
    },

    commentMatch : async(commentNum, id, anum) => {
        return await axios.get(CHIC_DOMAIN + `/commentMatch/${commentNum}/${id}/${anum}`);
    },

    getImage : async(id) => {
        return await axios.get(CHIC_DOMAIN + `/getImage/${id}`);
    },

    updateImage : async(id, image) => {
        const updateImg = {
            id : id,
            image : image
        }
    return await axios.post(CHIC_DOMAIN + `/updateImage`, updateImg);
    },

    searchArticle : async(text) => {
        return await axios.get(CHIC_DOMAIN + `/searchArticle/${text}`);
    },

    memberDelete : async(id) => {
        const regCheck = {
            id: id
        }
        return await axios.post(CHIC_DOMAIN + "/memberDelete", regCheck);
    },

    memberArticleDelete : async(id) => {

        return await axios.get(CHIC_DOMAIN + `/memberArticleDelete/${id}`);
    },

    // 내가 쓴 리뷰글
    myHistoryList : async(id) => {
        return await axios.get(CHIC_DOMAIN + `/MyPage/${id}`);
    },



};

export default AxiosApi;