import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../../api/Axios";
import styled from "styled-components";
import { NtcListStyle } from "./NtcList";

const NewsList = (props) => {
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
                <div class="article" key={article.anum} onClick={()=>onClick(article.anum)}>
              
                <div class="article-left" >
                    <h2>{article.title} </h2>
                    <p className="userDate">{article.id}  |  {article.date}</p>
                    <br />
                    <div className="text" dangerouslySetInnerHTML={{ __html: article.text }} >
                    </div>
                </div>
                <div class="article-image"></div>
            
            </div>
            ))}
            </NtcListStyle>
        </>
    );
}
export default NewsList;