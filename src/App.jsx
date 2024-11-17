import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles/GlobalStyles';
import { darkTheme } from './styles/theme';
import Header from './pages/header/Header';
import { Outlet } from 'react-router-dom';

const Main = styled.main`
  padding-bottom: 60px; /* Ajusta según la altura del Header en mobile */
  @media (min-width: 768px) {
    margin-left: 80px; /* Ajusta según el ancho del Header en desktop */
    padding-bottom: 0;
  }
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Header />
      <Main>
        <Outlet />
      </Main>
    </ThemeProvider>
  );
}

export default App;
