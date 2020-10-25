import styled from "styled-components";

export const Container = styled.div``;
export const ProductList = styled.div`
  max-width: 700px;
  margin: 20px auto 0;
  padding: 0 20px;
`;
export const Article = styled.article`
  background: #ffff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;

  p {
    font-size: 16px;
    color: #999;
    margin-top: 5px;
    line-height: 24px;
  }

  a {
    height: 42px;
    border-radius: 5px;
    border: 2px solid #da552f;
    background: none;
    margin-top: 10px;
    color: #da552f;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;

    &:hover {
      background: #da552f;
      color: #fff;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  button {
    padding: 10px;
    border-radius: 5px;
    border: 0;
    background: #da552f;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    transition: all 0.2s;
    &:hover {
      background: transparent;
      cursor: pointer;
      border: 1px solid #da552f;
      color: #da552f;
    }
    &:disabled {
      opacity: 0.5;
      cursor: default;

      &:hover {
        opacity: 0.5;
      }
    }
  }
`;
