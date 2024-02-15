import React from "react";
import styled from "styled-components";
import Circle from "../atoms/Circle";

function Chart({ percentage }) {
  return (
    <Content>
      <Circle color="#ffffff" />
      <Circle color="#499FD7" percentage={percentage} />
    </Content>
  );
}

const Content = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: -1;
  transform: rotate(270deg);

  @media (max-width: 375px) {
    position: relative;
    height: 100vw;
  }
`;

export default Chart;
