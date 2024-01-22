import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Input from "./ui/Input";
import Button from "./ui/Button";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const StyledApp = styled.div`
  padding: 20px;
  background-color: orangered;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert("check in")}>Check in</Button>
        <Button onClick={() => alert("check out")}>Check out</Button>
        <Input type="number" placeholder="Number of Guests" />
        <Input type="number" placeholder="Number of Guests" />
      </StyledApp>
    </>
  );
}
export default App;
