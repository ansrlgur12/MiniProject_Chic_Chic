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
`;

const NtcList = (props) => {
    const nav = useNavigate();
    const[article, setArticle] = useState("");

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

    return(
        <>
            <NtcListStyle>     
            {article && article.map(article => (
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
            </NtcListStyle>
        </>
    );
}
export default NtcList;