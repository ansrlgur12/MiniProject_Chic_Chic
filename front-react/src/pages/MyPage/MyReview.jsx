import React from "react"; 
import { useEffect, useState } from "react";
import AxiosApi from "../../api/Axios";

const [reviews, setReviews] = useState("");

useEffect(()=>{
    const reviews = async() => {
        const rsp = await AxiosApi.ariticle();
    }
    reviews();
}, []);

const MyReview = () => {

    return(
        <>
        </>
    );
}
export default MyReview;