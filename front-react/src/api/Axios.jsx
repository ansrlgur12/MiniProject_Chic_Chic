import axios from "axios";
const CHIC_DOMAIN = "http://localhost:8111";

const AxiosApi = {

    articleGet : async(anum) => {
        
        return await axios.get(CHIC_DOMAIN + `/article/${anum}`);
    },
    ariticle : async(num) => {
        
        return await axios.get(CHIC_DOMAIN + `/articles/${num}`);
    },

    newArticle : async() => {

       // return await axios.get(CHIC_DOMAIN + `/${}`);
    }
    eventDescGet : async(eNum) => { // 이벤트 페이지 async

        return await axios.get(CHIC_DOMAIN + `/EventDesc/${eNum}`);
    },
};

export default AxiosApi;