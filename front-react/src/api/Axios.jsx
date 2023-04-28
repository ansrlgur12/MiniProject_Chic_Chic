import axios from "axios";
const CHIC_DOMAIN = "http://localhost:8111";

const AxiosApi = {

    articleList : async(anum) => {
        
        return await axios.get(CHIC_DOMAIN + `/article/${anum}`);
    },
    ariticle : async(num) => {
        
        return await axios.get(CHIC_DOMAIN + `/articles/${num}`);
    },

    newArticle : async(bnum, title, text, pwd) => {
        const article = {
            bnum : bnum.toString(),
            title : title,
            text : text,
            pwd : pwd
        };
        return await axios.post(CHIC_DOMAIN + "/new", article);
    },
    
    deleteArticle : async(deleteNum) => {

        return await axios.get(CHIC_DOMAIN + `/articles/${deleteNum}`);
    },

    eventDescGet : async(eNum) => { // 이벤트 페이지 async

        return await axios.get(CHIC_DOMAIN + `/EventDesc/${eNum}`);
    },
};

export default AxiosApi;