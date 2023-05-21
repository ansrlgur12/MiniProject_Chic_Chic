import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from "../context/UserInfo";
import AxiosApi from "../api/Axios";
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [starRating, setStarRating] = useState(null); 
    const [review, setReview] = useState("");
    const [isUpdate, setIsUpdate] = useState(false);
    const context = useContext(UserContext);
    const { isLogin, userId } = context;
    const { perfumeNumber } = useParams(); 

    useEffect(() => {
        const fetchReviews = async () => {
            const response = await AxiosApi.viewReview(perfumeNumber);
            setReviews(response.data);
        }
        fetchReviews();
    }, [perfumeNumber]);

    const handleReviewChange = (e) => {
        setReview(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!starRating) { 
            alert("평점 선택 해주세요");
            return;
        }
        await submit();
    };

    const submit = async () => {
        if (!isLogin) {
            alert("로그인이 필요합니다.");
            return;
        }

        const userId = context.userId; // 사용자 아이디 가져오기

        if(!isUpdate) {
            await AxiosApi.newReview(perfumeNumber, userId ,starRating, review);
            setStarRating(null);   
            setReview("");
            const newReviews = await AxiosApi.viewReview(perfumeNumber);
            setReviews(newReviews.data);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                평점:
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                        <label key={i}>
                            <input 
                                style={{ display: "none" }}
                                type="radio" 
                                name="rating" 
                                value={ratingValue}
                                onClick={() => setStarRating(ratingValue)}
                            />
                            <FontAwesomeIcon 
                                icon={starRating >= ratingValue ? fasStar : farStar}
                                color={starRating >= ratingValue ? "#ffc107" : "#e4e5e9"}
                                size="lg"
                            />
                        </label>
                    );
                })}
            </label>
            <label>
                한줄평:
                <input type="text" value={review} onChange={handleReviewChange} required/>
            </label>
            <input type="submit" value="등록"/>

            {/* 가져온 리뷰 출력 */}
            {reviews && reviews.map((review, index) => (
                <div key={index}>
                    <p>이름: {review.userId}</p>
                    <p>별점: {review.starRating}</p>
                    <p>한줄평: {review.review}</p>
                </div>
            ))}
        </form>
    );
};

export default Reviews;
