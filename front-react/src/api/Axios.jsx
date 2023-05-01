import axios from "axios";
const CHIC_DOMAIN = "http://localhost:8111";

const AxiosApi = {

    articleGet : async(anum) => {
        
        return await axios.get(CHIC_DOMAIN + `/article/${anum}`);
    },
    write : async(num) => {
        
        return await axios.get(CHIC_DOMAIN + `/articles/${num}`);
    },

    eventDescGet : async(eventNum) => { // 이벤트 페이지 async

        return await axios.get(CHIC_DOMAIN + `/EventPage/${eventNum}`);
    },
};

export default AxiosApi;