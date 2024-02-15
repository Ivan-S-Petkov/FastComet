import React from "react";
import styled from "styled-components";
import Title from "../atoms/Title";
import Error from "../atoms/Error";
import NumberInput from "../atoms/NumberInput";
import Progress from "../organisms/Progress";
import { useCalculator } from "../../hooks/useCalculator";

function ClientsCalculator() {
  const {
    error,
    progress,
    newClientsHandler,
    allClientsHandler,
    submitHandler,
  } = useCalculator();

  return (
    <Wrapper>
      <Title text="Clients Calculator" />
      {error ? <Error error={error} /> : <></>}
      <InputFields>
        <NumberInput
          placeholder="New Clients"
          inputChange={newClientsHandler}
        />
        <NumberInput
          placeholder="All Clients"
          inputChange={allClientsHandler}
        />
      </InputFields>
      <Progress percentage={progress} clickToggle={submitHandler} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InputFields = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
`;

export default ClientsCalculator;
