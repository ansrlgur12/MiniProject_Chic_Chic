import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from "../context/UserInfo";
import AxiosApi from "../api/Axios";
import { useParams } from 'react-router-dom';
import profile from "../image/기본프로필.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Profile = styled.div `
      .profile {
        width: 50px;
        height: 50px;
        border: 1px solid #ccc;
        border-radius: 50%;
    }
    
`
const Btn = styled.span`
    .btn{
        background-color: #815B5B;
        color: white;
        height: 30px;
        width: 50px;
        border: .5px solid #858585;
        border-radius: 5px;
        padding: 3px;
        text-align: center;
   
    }
    `
   
export const Line = styled.div`
    .line1 {
        border-bottom: .5px solid #815B5B;
        width: 1fr;
        margin: 10px 0 20px 0;
    }
`

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

        const userId = context.userId; 

        if(!isUpdate) {
            await AxiosApi.newReview(perfumeNumber, userId ,starRating, review);
            setStarRating(null);   
            setReview("");
            const newReviews = await AxiosApi.viewReview(perfumeNumber);
            setReviews(newReviews.data);
        } else {
            await updateReview();
        }
    }

    const updateReview = async () => {
        if (!starRating || !review) { 
            alert("평점과 한줄평을 모두 입력해주세요");
            return;
        }
        await AxiosApi.updateReview(perfumeNumber, userId, starRating, review);
        setIsUpdate(false); 
        setStarRating(null); 
        setReview(""); 
        const updatedReviews = await AxiosApi.viewReview(perfumeNumber); 
        setReviews(updatedReviews.data);
    }

    const deleteReview = async (userId) => {
        await AxiosApi.deleteReview(perfumeNumber, userId);
        const updatedReviews = await AxiosApi.viewReview(perfumeNumber); 
        setReviews(updatedReviews.data);
    }

    const handleUpdate = async (review) => {
        if (userId !== review.userId) {
            alert("자신이 작성한 리뷰만 수정할 수 있습니다.");
            return;
        }

        try {
            const response = await AxiosApi.viewReviewBeforeUpdate(perfumeNumber, userId);
            setStarRating(response.data.starRating);
            setReview(response.data.review);
            setIsUpdate(true); 
        } catch (error) {
            console.error('Failed to update review:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{marginTop:'100px'}}>
            <Line><div className='line1' ></div></Line>
            <label style={{ marginRight: "30px" }}>
                <span style={{marginRight:'20px'}}> 평점</span>
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
            <label style={{ marginRight: "20px",marginLeft: "100px" }}>
                한줄평
                <input style={{borderRadius:'4px',marginLeft:"20px", border:  '1px solid #815B5B', outlineColor:'#815B5B'}}  type="text" value={review} onChange={handleReviewChange} required maxLength={30} />
            </label>
            <Btn> <input className='btn' type="submit" value={isUpdate ? "수정" : "등록"} /></Btn>
            <Line><div className='line1'></div></Line>
         
            {/* 가져온 리뷰 출력 */}
            {reviews && reviews.map((review, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between',width:'340px',height:'150px', borderRadius:'8px', border:'none',background:'#FFF7D4', marginTop:'3rem',padding:'1rem'}}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Profile> <img className="profile" src={review.image ? review.image : profile} style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat' ,marginRight:'18px'}}></img></Profile>
                        <p style={{marginRight:'2rem'}}> {review.userId}</p>
                        <p>
                            {[...Array(5)].map((star, i) => {
                                const ratingValue = i + 1;
                                return (
                                    <FontAwesomeIcon 
                                        key={i}
                                        icon={review.starRating >= ratingValue ? fasStar : farStar}
                                        color={review.starRating >= ratingValue ? "#ffc107" : "#e4e5e9"}
                                        size="lg"
                                    />
                                );
                            })}
                        </p>
                    </div>
                    <p style={{marginLeft:'4.8rem'}}> {review.review}</p>
                    
        
                    {userId === review.userId && (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {/* <button onClick={() => handleUpdate(review)}>Update Review</button> */}
      
        <Btn><button className="btn" onClick={() => deleteReview(review.userId)}>삭제하기</button></Btn>

    </div>
)}

</div>
))}
</form>
);
};

export default Reviews;