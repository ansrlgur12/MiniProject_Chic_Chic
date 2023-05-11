import React, { useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { FixedSizeGrid as Grid } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// CSS 클래스 정의
export const PerfumelistStyle = styled.div`
.main-container {
  width: 100%; /* 너비를 원하는 값으로 변경 */
  max-width: 10px; /* 최대 너비를 원하는 값으로 변경 */
  margin: 0 auto; /* 컨테이너를 화면 가운데 정렬 */
  /* 필요한 경우 높이, 최소 높이, 최대 높이, 마진, 패딩 등을 추가 */
}
`
const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '1em',
  margin: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '250px',
  height: '250px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};


// API에서 향수 목록을 가져오는 함수
const fetchPerfumes = async ({ pageParam = 0 }) => {
  const response = await axios.get('http://localhost:8111/api/perfumes', {
    params: {
      page: pageParam,
      size: 10,
    },
  });

  console.log("Response:", response.data);

  let nextPage = response.data.totalPages > pageParam + 1 ? pageParam + 1 : null;
  const content = response.data.content;

  if (content.length > 0 && content.length < 10) {
    nextPage = null;
  }

  return {
    content,
    nextPage,
  };
};

const PerfumeList = () => {
  // useInfiniteQuery hook을 사용하여 데이터 가져오기
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery('perfumes', fetchPerfumes, {
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  // 호버 상태를 관리하기 위한 state
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // 데이터가 준비되지 않은 경우
  if (!data) {
    console.log("Data is not ready yet");
    return <div>Loading...</div>;
  }

  console.log("Data pages:", data.pages);

  // 아이템 개수 계산
  const itemCount = hasNextPage ? (data.pages.length + 1) * 10 : data.pages.length * 10;

  // 더 많은 아이템을 로드하기 위한 함수
  const loadMoreItems = isFetchingNextPage ? () => {} : fetchNextPage;

  // 아이템이 로드되었는지 확인하는 함수
  const isItemLoaded = (index) => !hasNextPage || index < data.pages.length * 10;

  // 호버 상태를 관리하는 함수
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  // 아이템을 렌더링하는 함수
  const renderItem = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * 4 + columnIndex; 
    if (!isItemLoaded(index)) return <div style={style}>Loading...</div>;

    const page = Math.floor(index / 10);
    const itemIndex = index % 10;
    const perfume = data.pages[page].content[itemIndex];

    const itemStyle = {
      ...style,
      ...cardStyle,
      // 호버 상태일 때 CSS 클래스 추가
      ...(hoveredIndex === index ? { transform: 'scale(1.05)', cursor: 'pointer' } : {}),
    };




    return (
      <div
      style={itemStyle}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
  >
      <div style={{ width: '60%', margin: 'auto', color: 'black' }}>
          <Link to={`/perfumeDetail/${perfume.perfumeNumber}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h4 style={{ textAlign: 'center', fontWeight: 'normal', fontSize: '1.5rem' }}>{perfume.name}</h4>
          </Link>
           {/* <p style={{ fontSize: '12px' }}>({perfume.perfumeNumber})</p> */}
          <img src={perfume.thumbnail} alt="Perfume Thumbnail" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
      </div>
  </div>
  );

  };

  return (

    <div>
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
    >
      {({ onItemsRendered, ref }) => {
        const listRef = ref;
        return (
          <Grid
            className="perfume-grid"
            columnCount={4}
            columnWidth={270}
            height={1200}
            rowCount={Math.ceil(itemCount / 4)}
            rowHeight={270}
            width={1991.35}
            onItemsRendered={({ visibleColumnStartIndex, visibleColumnStopIndex, visibleRowStartIndex, visibleRowStopIndex }) =>
              onItemsRendered({
                visibleStartIndex: visibleRowStartIndex * 4 + visibleColumnStartIndex,
                visibleStopIndex: visibleRowStopIndex * 4 + visibleColumnStopIndex,
              })
            }
            ref={listRef}
          >
            {renderItem}
          </Grid>
        );
      }}
    </InfiniteLoader>
 </div>
  );
};

export default PerfumeList;