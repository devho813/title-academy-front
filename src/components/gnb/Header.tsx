import React from 'react';
import styled from 'styled-components';
import SearchForm from './SearchForm';

function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        {/* <h1>제목 학원</h1> */}
        <SearchForm />
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header;

const headerHeight = '4.5rem';

const HeaderContainer = styled.header`
  width: 100vw;
  height: ${headerHeight};
  border-bottom: 1px solid #e8e8e8;
`;

const HeaderWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding: 0.8rem 0;
  text-align: center;

  h1 {
    position: absolute;
    left: 0;
    top: 0;
    font-family: 'Black Han Sans', sans-serif;
    font-size: calc(${headerHeight} / 2);
    line-height: ${headerHeight};
    font-weight: lighter;
  }
`;
