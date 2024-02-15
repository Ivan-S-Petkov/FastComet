import React from "react";
import styled from "styled-components";

function SubmitButton({ clickToggle }) {
  return <Submit type="button" value="Submit" onClick={clickToggle} />;
}

const Submit = styled.input`
  margin-top: 10px;
  width: 45%;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  font-weight: 600;
  background-color: #fbd907;
  padding: 15px 10px;
  cursor: pointer;
`;

export default SubmitButton;
