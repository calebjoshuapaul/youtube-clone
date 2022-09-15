import styled from "styled-components";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div``;
const Wrapper = styled.div``;

function App() {
  return (
    <Container className="App">
      <Menu />
      <Main>
        <Navbar />
        <Wrapper>video cards</Wrapper>
      </Main>
    </Container>
  );
}

export default App;
