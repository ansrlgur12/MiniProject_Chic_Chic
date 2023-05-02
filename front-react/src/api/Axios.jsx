import axios from "axios";
const CHIC_DOMAIN = "http://localhost:8111";

const AxiosApi = {

    articleList : async(anum) => { // 게시글 목록 출력
        
        return await axios.get(CHIC_DOMAIN + `/article/${anum}`);
    },
    smallArticleList : async(anum) => { // 작은 목록 출력
        
        return await axios.get(CHIC_DOMAIN + `/smallArticle/${anum}`);
    },
    ariticle : async(num) => { // 게시글 출력
        
        return await axios.get(CHIC_DOMAIN + `/articles/${num}`);
    },


    newArticle : async(bnum, title, text, pwd) => { // 게시글 작성 정보 저장
        const article = {
            bnum : bnum.toString(),
            title : title,
            text : text,
            pwd : pwd
        };
        return await axios.post(CHIC_DOMAIN + "/newArticle", article);
    },
    
    // deleteArticle : async(deleteNum) => { // 게시글 삭제

    //     return await axios.get(CHIC_DOMAIN + `/articleDelete/${deleteNum}`);
    // },

    deleteArticle2 : async(anum) => {

        return await axios.get(CHIC_DOMAIN + `/articleDelete/${anum}`);
    },

    eventList : async(eventNum) => { // 이벤트 페이지 async

        return await axios.get(CHIC_DOMAIN + `/EventPage/${eventNum}`);
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
    }




};

export default AxiosApi;