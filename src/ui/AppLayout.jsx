import styled from "styled-components";
import { Outlet } from "react-router-dom";
// COMPONENTS
import Header from "./Header";
import SideBar from "./SideBar";

const MAIN = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow-y: scroll;
`;
const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <SideBar />
      <MAIN>
        <Container>
          <Outlet />
        </Container>
      </MAIN>
    </StyledAppLayout>
  );
}

export default AppLayout;
