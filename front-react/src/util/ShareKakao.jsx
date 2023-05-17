import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { initKakao } from 'kakao-js-sdk';
import { Kakao } from 'kakao-js-sdk';

const ShareButton = ({ post }) => {
  const [isShared, setShared] = useState(false);

  const initKakaoSDK = () => {
    const options = {
      key: 'b036b5955cea832d410cf00d2ab3b7c8',
    };
    initKakao(options);
  };
  
  useEffect(() => {
    initKakaoSDK();
  }, []);

  const handleShare = () => {
    shareToKakaoTalk(post);
    setShared(true);
  };

  const shareToKakaoTalk = (post) => {
    if (window.Kakao) {
      const { title, description, imageUrl, linkUrl } = post;
      initKakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: title,
          description: description,
          imageUrl: imageUrl,
          link: {
            mobileWebUrl: linkUrl,
            webUrl: linkUrl,
          },
        },
      });
    }
  };

  return (
    <>
      <Helmet>
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
      </Helmet>
      <button onClick={handleShare} disabled={isShared}>
        {isShared ? '공유 완료' : '카카오톡 공유'}
      </button>
    </>
  );
};

export default ShareButton;