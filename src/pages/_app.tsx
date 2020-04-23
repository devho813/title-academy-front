import React from 'react';
import Head from 'next/head';
import GlobalStyles from '../utils/global-styles';

function MyApp({ Component, propTypes }: any) {
  return (
    <>
      <Head>
        <title>제목학원</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0" />
        <meta name="keywords" content="제목학원,커뮤니티,title,cacdemy,title academy" />
        <meta name="description" content="제목학원 커뮤니티 사이트" />
        <meta name="author" content="Chanho Lee <devho813@gmail.com>" />
        <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyles />
      <Component {...propTypes} />
    </>
  );
}

export default MyApp;
