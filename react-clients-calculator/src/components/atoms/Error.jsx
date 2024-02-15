import React from "react";
import styled from "styled-components";

function Error({ error }) {
  return <Content>{error}</Content>;
}

const Content = styled.div`
  position: absolute;
  color: rgb(139, 41, 41);
  background-color: rgb(224, 224, 224);
  padding: 20px;
  border-radius: 4px;
  top: 5px;
`;

export default Error;
