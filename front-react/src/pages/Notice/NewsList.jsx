import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../../api/Axios";
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
    }, []);

    const onClick = (num) => {
            nav(`/News/${num}`);
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
export default NewsList;