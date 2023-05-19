import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../../api/Axios";
import styled from "styled-components";

export const NtcListStyle = styled.div`
    .article{
        padding: 10px 0px 10px 0px;
        border-bottom: .5px solid #ccc;
        height: 200px;
        display: flex;
        /* flex-direction: row; */
        justify-content: space-between;
        align-items: center;
    }
    .article .article-image{
        flex-basis: 25%;
        background-color: #ccc;
        height: 150px;
        width: 150px;
        background-size: cover;
        background-position: center;
    }
    .article-left{
        box-sizing: border-box;
        /* overflow:hidden;  */
        text-overflow:ellipsis;
        white-space:nowrap;
        flex-basis: 65%;
        padding-top: 0px;
        line-height: 1;
    }

    .userDate {
        font-size: small;
        color: #737373;
    }
    .text {
        height: 10px;
        display: flex;
        flex-wrap: wrap;
    }
    .text * {
        text-align: center;
        color: black;
        line-height: 1.5;
        font-size: 16px;
        font-weight: normal;
        margin: 0;
        padding: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .profileP1 {
        height: 150px;
        width: 100%;
    }
    .btnBox{
        margin: 20px 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .numBtn{
        width: 30px;
        height: 30px;
        border: .5px solid #ccc;
        background-color: white;
        font-size: large;
        font-weight: 500;
        color: #42240a;
    }
    .numBtn + .numBtn{
        margin-left: 10px;
    }
    .active{
        background-color:  #5f330d;
        color: white;
    }
    .profileP1 {
        height: 150px;
        width: 100%;
    }
    .no-image{
        display: none;
    }
`;

const NtcList = (props) => {
    const nav = useNavigate();
    const[article, setArticle] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;

    useEffect(()=>{
        const article = async() => {
            console.log("게시판번호, 정렬방식 : " + props.num + props.view);
            const rsp = await AxiosApi.articleList(props.num, props.view);
            setArticle(rsp.data);
        }
        article();
    }, [props.view]);

    const onClick = (num) => {
        nav(`/Notice/${num}`);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const displayedArticles = article.slice(startIndex, endIndex);

    const totalArticles = article.length;
    const totalPages = Math.ceil(totalArticles / pageSize);
    
    // 현재 페이지를 중심으로 앞/뒤로 표시할 페이지 버튼의 개수
    const maxPageButtons = 5;
    const pageButtonRange = Math.floor(maxPageButtons / 2);

    // 현재 페이지를 기준으로 표시할 페이지 버튼의 범위 계산
    let startPage = Math.max(currentPage - pageButtonRange, 1);
    let endPage = Math.min(currentPage + pageButtonRange, totalPages);

    // 표시할 페이지 버튼의 개수가 maxPageButtons보다 작을 경우 범위 조정
    if (endPage - startPage < maxPageButtons - 1) {
        if (currentPage - startPage < pageButtonRange) {
            endPage = Math.min(startPage + maxPageButtons - 1, totalPages);
        } else {
            startPage = Math.max(endPage - maxPageButtons + 1, 1);
        }
    }

    return(
        <>
            <NtcListStyle>     
            {displayedArticles && displayedArticles.map(article => (
                <div className="article" key={article.anum} onClick={()=>onClick(article.anum)}>
              
                <div className="article-left" >
                    <h2>{article.title} </h2>
                    <p className="userDate">{article.id}  |  {article.date}</p>
                    <br />
                    <div className="text" dangerouslySetInnerHTML={{ __html: article.text }} >
                    </div>
                </div>
                <div className={article.img === 'image' || article.img === null ? "no-image" : "article-image"}>
                        <img className="profileP1" src={article.img} style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></img>
                </div>
            
            </div>
            ))}
            <div className="btnBox">
                {startPage > 1 && (<button onClick={() => handlePageChange(startPage - 1)}>{"<"}</button>)}
                {[...Array(endPage - startPage + 1)].map((_, index) => {
                    const pageNumber = startPage + index;
                    return (
                        <button className={pageNumber === currentPage ? "numBtn active" : "numBtn"} key={pageNumber} onClick={() => handlePageChange(pageNumber)}>{pageNumber}</button>
                    );
                })}
                {endPage < totalPages && (<button onClick={() => handlePageChange(endPage + 1)}>{">"}</button>)}
            </div>
            </NtcListStyle>
        </>
    );
}
export default NtcList;