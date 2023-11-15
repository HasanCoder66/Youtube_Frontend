import './App.css';
import styled , {ThemeProvider} from 'styled-components'
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { darkTheme, lightTheme } from './components/utils/Theme';
import { useState } from 'react';

const Container = styled.div`
display : flex
`
const Main = styled.div`
flex : 7
`
const Wrapper = styled.div`
`
function App() {
  const [darkMode , setDarkMode ] = useState(true)
    return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container>
    <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
    <Main>
      <Navbar/>
      <Wrapper>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
        <h1>
        hasan ki videos ke cards
        </h1>
      </Wrapper>
    </Main>
    </Container>
    </ThemeProvider>
  );
}

export default App;
