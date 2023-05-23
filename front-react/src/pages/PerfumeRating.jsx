import React, { useState, useEffect } from 'react';
import AxiosApi from "../api/Axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";

const PerfumeRating = ({ perfumeNumber }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            if (!perfumeNumber) {
                return;
            }
            
            try {
                const response = await AxiosApi.viewReview(perfumeNumber);
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, [perfumeNumber]);

    if (!reviews || reviews.length === 0) {
        return <p>현재 평점이 없습니다.</p>;
    }

    const totalRating = reviews.reduce((sum, review) => sum + review.starRating, 0);
    const averageRating = (totalRating / reviews.length).toFixed(1);


    return (
        <div>
            <FontAwesomeIcon icon={fasStar} color="#ffc107" size="lg" />
            {averageRating}
        </div>
    );
};

export default PerfumeRating;
