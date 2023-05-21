import React, { useState } from 'react';
import styled from 'styled-components';

const Sytled = styled.div`
    display: flex;
    flex-direction: row;
    width: 50px;
    margin-left: 10px;


    .toolTip{
        width : 160px;
        height : 175px;
        position: absolute;
        top: 100%;
        left: 250%;
        transform: translateX(-50%);
        background-color: rgb(255, 255, 255);
        border: .5px solid black;
        color: black;
        padding: 10px;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
    }

    .gradeImg {
        display: flex;
        flex-direction: row;
        align-items: center; /* 중앙 정렬을 위해 추가 */
    }

    p {
        position: relative;
        margin-left: 40px;
        padding-bottom: 15px;
        top: 20px; /* 아래로 이동하는 값 제거 */
        white-space: nowrap; /* 한 줄로 텍스트를 유지하도록 설정 */
    }
    .gradeImg + .gradeImg{
        margin-top: 15px;
    }
`;

const Tooltip = ({ content, children , image1, image2, image3, image4, image5}) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <Sytled>
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {children}
      {isTooltipVisible && (
        <div className='toolTip'>
          <span style={{ color: 'black' }}>{content}</span>
          <div className="gradeImg" style={{backgroundImage: `url(${image1})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', }}><p>1등급</p></div>
          <div className="gradeImg" style={{backgroundImage: `url(${image2})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', }}><p>2등급</p></div>
          <div className="gradeImg" style={{backgroundImage: `url(${image3})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', }}><p>3등급</p></div>
          <div className="gradeImg" style={{backgroundImage: `url(${image4})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', }}><p>4등급</p></div>
        </div>
      )}
    </div>
    </Sytled>
  );
};

export default Tooltip;
