import styled from "styled-components";
import ClientsCalculator from "./components/pages/ClientsCalculator";

function App() {
  return (
    <Wrapper>
      <ClientsCalculator />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
