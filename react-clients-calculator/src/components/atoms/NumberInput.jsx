import React from "react";
import styled from "styled-components";

function NumberInput({ value, placeholder, inputChange }) {
  return (
    <Number
      type="number"
      placeholder={placeholder}
      onInput={(e) => inputChange(e.target.value)}
      value={value}
    />
  );
}

const Number = styled.input`
  width: 90%;
  padding: 15px 10px;
  border: 1px solid rgb(199, 199, 199);
  border-radius: 4px;
  font-size: 20px;
  font-style: normal;
  &::placeholder {
    font-style: italic;
  }
`;

export default NumberInput;
