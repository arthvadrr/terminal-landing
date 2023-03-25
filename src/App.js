import { useState } from 'react';
import Nav from './components/Nav/Nav'
import Home from './routes/Home/Home';
import Projects from './routes/Projects/Projects';
import About from './routes/About/About';
import './App.scss';

const App = () => {

  const [screen, setScreen] = useState('Home');

  const setScreenProjects = () => {
    setScreen('Projects');
  }

  const setScreenHome = () => {
    setScreen('Home');
  }

  return (
    <div className="App">
      {screen === 'Home' &&
      <> 
        <Home />
        <Nav 
          screen={screen}
          setScreen={setScreen}
        />
      </>
      }
      {screen === 'Projects' && <Projects screen={screen} setScreen={setScreen}/>}
      {screen === 'About' && <About screen={screen} setScreen={setScreen} />}
    </div>
  );
}

export default App;
