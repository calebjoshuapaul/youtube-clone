import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme/Theme";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div``;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container className="App">
        <Menu setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>video cards</Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
