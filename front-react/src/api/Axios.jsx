import axios from "axios";
const CHIC_DOMAIN = "http://localhost:8111";

const AxiosApi = {

    articleGet : async(anum) => {
        
        return await axios.get(CHIC_DOMAIN + `/article/anum=${anum}`);
    },
};

export default AxiosApi;