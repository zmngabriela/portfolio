import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import Projects from './containers/Projects';
import About from './containers/About';
import Contact from './containers/Contact';

import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';

import { EstiloGlobal, Container } from './styles/styles';

function App() {
  const [activeLight, setActiveLight] = useState(false);

  function toggleTheme() {
    setActiveLight(!activeLight);
  }

  return (
    <ThemeProvider theme={activeLight ? lightTheme : darkTheme}>
      <EstiloGlobal />
      <Header toggleTheme={toggleTheme} />
      <Container>
        <main>
          <Projects />
          <About />
          <Contact />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
