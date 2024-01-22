import Input from "./ui/Input";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>
            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button onClick={() => alert("check in")}>Check in</Button>
              <Button
                variation="danger"
                size="medium"
                onClick={() => alert("check out")}
              >
                Check out
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="Number of Guests" />
              <Input type="number" placeholder="Number of Guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}
export default App;
