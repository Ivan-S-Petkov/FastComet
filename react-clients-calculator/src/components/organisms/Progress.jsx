import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Chart from "../molecules/Chart";
import SubmitButton from "../atoms/SubmitButton";

function Progress({ percentage, clickToggle }) {
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    setHeight(contentRef.current.clientHeight);
  }, []);

  return (
    <Wrapper>
      <Chart percentage={percentage} />
      <Content ref={contentRef} height={height}>
        <Text>Percent Capacity - {percentage}%</Text>
        <SubmitButton clickToggle={clickToggle} />
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  max-width: 500px;
  max-height: 500px;
  width: 100%;
  padding-top: 100%;

  @media (max-width: 375px) {
    padding-top: 0px;
    margin-top: 10px;
  }
`;
const Content = styled.div`
  position: absolute;
  top: calc(50% - ${(props) => props.height / 2}px);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (max-width: 375px) {
    margin-top: 5px;
    position: relative;
  }
`;
const Text = styled.span``;

export default Progress;
