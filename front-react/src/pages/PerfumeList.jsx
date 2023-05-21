

import React, { useState, useRef, useCallback } from 'react';
import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PerfumeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1rem;
`;

export const PerfumeCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 1em;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 230px;
  height: 250px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const PerfumeName = styled.h4`
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  color: black;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover ${PerfumeName} {
    color: #888;
  }
`;

const fetchPerfumes = async ({ pageParam = 0 }) => {
  const response = await axios.get('http://localhost:8111/api/perfumes', {
    params: {
      page: pageParam,
      size: 10,
    },
  });

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

const PerfumeList = ({perfumes}) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } =  useInfiniteQuery('perfumes', fetchPerfumes, {
    getNextPageParam: (lastPage) => lastPage.nextPage,
    enabled:!perfumes
  });

  const observer = useRef();
  const lastPerfumeElementRef = useCallback(
    (node) => {
      if (perfumes || isFetching) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [perfumes,isFetching, hasNextPage, fetchNextPage]
  );

  if (!perfumes && !data) {
    return <div>Loading...</div>;
  }
  const perfumePages = perfumes ? [{content: perfumes}] :data?.pages;

  return (
    <PerfumeContainer>
      {perfumePages?.map((page, i) =>
        page.content.map((perfume, index) => {
          const isLastPerfume = page.content.length === index + 1;
          const refProp = isLastPerfume && !perfumes ? { ref: lastPerfumeElementRef } : {};
          return (
            <PerfumeCard key={perfume.perfumeNumber} {...refProp}>
              <StyledLink to={`/perfumeDetail/${perfume.perfumeNumber}`}>
                <PerfumeName>{perfume.name}</PerfumeName>
                <img src={perfume.thumbnail} alt="Perfume Thumbnail" style={{ maxWidth: '85%', maxHeight: '90%', objectFit: 'contain' }} />
              </StyledLink>
            </PerfumeCard>
          );
        })
      )}
      <div>{isFetchingNextPage ? 'Loading more...' : null}</div>
      <div>{!hasNextPage ? 'No more data.' : null}</div>
    </PerfumeContainer>
  );
};

export default PerfumeList;