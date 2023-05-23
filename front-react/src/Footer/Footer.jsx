import styled from "styled-components"

const Foot = styled.div`
    text-align: center;
    color: white;
    background-color: #594545;
    padding-top: 20px;

p{
    font-size: 15px;
    margin: 0;
}
img{
    margin: 5px;
    width: 80px;
    height: 60px;
}
h2{
    font-size: 25px;
    color :#ffe19a;
}
.logo {
    height: 80px;
    width: 85px;
}
.title{
    font-family: 'KCCMurukmuruk';
    font-size: 3em;
}
.object{
    font-family: 'KorailRoundGothicBold';
    font-size: 1.1em;
}
`
const Footer = () => {
    return(
        <Foot>
            <h2 className="title">Chic chic</h2>
            <p className="object">Community & Search : <span>문기혁</span></p>
            <p className="object">Notice & MyPage : <span>정인식</span></p>
            <p className="object">Perfume & Search : <span>정승현</span></p>
            <p className="object">Perfume & Custom : <span>권영진</span></p>
            <br/>
        </Foot>
    );
}

export default Footer;
