import React from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

function SearchForm() {
  return (
    <Form>
      <SearchIcon />
      <input type="search" placeholder="Search..." autoComplete="off" />
      <button>Search</button>
    </Form>
  );
}

export default SearchForm;

const Form = styled.form`
  position: relative;
  display: inline-block;
  width: calc(100% - 31rem);
  height: 100%;
  margin-left: 19rem;

  input {
    width: 100%;
    height: 100%;
    font-family: 'Fira Mono', 'Andale Mono', 'Consolas', monospace;
    font-size: 1rem;
    font-weight: lighter;
    background-color: #f2f2f2;
    border: none;
    padding: 0.5em 1em 0.5em 3em;
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    padding: 0 1.5em;
    height: 100%;
    background-color: #231f20;
    font-size: 1rem;
    color: white;
    cursor: pointer;
  }
`;

const SearchIcon = styled(BsSearch)`
  position: absolute;
  display: inline-block;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
`;
