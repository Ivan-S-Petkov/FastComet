import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function Circle({ color, percentage }) {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [totalLength, setTotalLength] = useState();
  const [circumference, setCircumference] = useState(0);
  const circleRef = useRef(null);

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  useEffect(() => {
    setTotalLength(Math.ceil(circleRef.current.getTotalLength()) + 1);
  }, [dimensions]);

  useEffect(() => {
    percentage !== undefined
      ? setCircumference(totalLength - (percentage / 100) * totalLength)
      : setCircumference(0);
  }, [percentage, totalLength]);

  return (
    <ProgressBar
      ref={circleRef}
      strokeDasharray={totalLength}
      strokeDashoffset={circumference || 0}
      cx="50%"
      cy="50%"
      stroke={color}
      r="42%"
      fill="transparent"
      strokeWidth="30"
    />
  );
}

const ProgressBar = styled.circle`
  transform: rotate(-90 24 24);
  -webkit-filter: drop-shadow(-2px 0px 5px rgba(0, 0, 0, 0.2));
  filter: drop-shadow(-2px 0px 5px rgba(0, 0, 0, 0.2));
`;

export default Circle;
