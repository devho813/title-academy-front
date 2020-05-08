import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

function Board() {
  return (
    <BoardContainer>
      <BoardWrapper>
        <Header>
          <h2>게시판</h2>
          <Link href="/write">
            <button>게시글 쓰기</button>
          </Link>
        </Header>
        <ul>
          <li>
            제목: subject / 추천수: recommend / 작성자: UserId / 내용: content / 카테고리: category / 시간: createdAt
          </li>
          <li>
            제목: subject / 추천수: recommend / 작성자: UserId / 내용: content / 카테고리: category / 시간: createdAt
          </li>
          <li>
            제목: subject / 추천수: recommend / 작성자: UserId / 내용: content / 카테고리: category / 시간: createdAt
          </li>
          <li>
            제목: subject / 추천수: recommend / 작성자: UserId / 내용: content / 카테고리: category / 시간: createdAt
          </li>
          <li>
            제목: subject / 추천수: recommend / 작성자: UserId / 내용: content / 카테고리: category / 시간: createdAt
          </li>
        </ul>
      </BoardWrapper>
    </BoardContainer>
  );
}

export default Board;

const BoardContainer = styled.div`
  position: relative;
  width: 100vw;
`;

const BoardWrapper = styled.section`
  position: relative;
  width: 80%;
  margin: 5rem auto 0;
`;

const Header = styled.header`
  position: relative;

  h2 {
    display: inline-block;
    font-size: 2rem;
  }

  button {
    position: absolute;
    right: 0;
    top: 50%;
    padding: 0.8em 1.5em;
    transform: translateY(-50%);
    background-color: #49c5b6;
    font-size: 1rem;
    color: white;
  }
`;
