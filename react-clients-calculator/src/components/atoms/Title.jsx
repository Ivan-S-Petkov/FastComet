import React from "react";
import styled from "styled-components";

function Title({ text }) {
  return <Content>{text}</Content>;
}

const Content = styled.div`
  font-weight: 700;
  font-size: 28px;
  text-align: center;
  margin: 5px;
`;

export default Title;
